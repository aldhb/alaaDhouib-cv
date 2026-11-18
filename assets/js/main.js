/* ==========================================================================
   Portfolio interactions — theme, navigation, i18n, projects, contact
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mobileQuery = window.matchMedia("(max-width: 1023px)");
  var t = function (key) { return window.I18N.t(key); };

  function $(selector, scope) { return (scope || document).querySelector(selector); }
  function $$(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }
  function setStatus(element, message, type) {
    if (!element) return;
    element.textContent = message || "";
    element.classList.remove("is-success", "is-error");
    if (type) element.classList.add(type);
  }

  /* ----------------------------------------------------------------------
     Theme
     ---------------------------------------------------------------------- */
  var themeBtn = document.getElementById("theme-btn");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) themeBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  if (themeBtn) {
    themeBtn.setAttribute("aria-pressed", root.getAttribute("data-theme") === "dark" ? "true" : "false");
    themeBtn.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ----------------------------------------------------------------------
     Language
     ---------------------------------------------------------------------- */
  var langBtn = document.getElementById("lang-btn");
  var langMenu = document.getElementById("lang-menu");
  var langSwitch = $("[data-lang-switch]");
  var initialLang = root.lang;
  if (window.I18N.supported.indexOf(initialLang) === -1) {
    try { initialLang = localStorage.getItem("lang") || "fr"; } catch (e) { initialLang = "fr"; }
  }
  if (window.I18N.supported.indexOf(initialLang) === -1) initialLang = "fr";

  function setLanguage(lang, shouldFocus) {
    if (window.I18N.supported.indexOf(lang) === -1) return;
    window.I18N.apply(document, lang);
    try { localStorage.setItem("lang", lang); } catch (e) {}
    var whatsappLink = $(".contact-card--whatsapp");
    if (whatsappLink) {
      whatsappLink.href = "https://wa.me/21655334713?text=" + encodeURIComponent(window.I18N.t("contact.whatsappMessage"));
    }
    try {
      var url = new URL(window.location.href);
      if (lang === "fr") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    } catch (e) {}
    closeLangMenu();
    var dialog = document.getElementById("project-dialog");
    if (dialog && dialog.open) closeDialog();
    setStatus(document.getElementById("form-status"), "");
    if (shouldFocus && langBtn) langBtn.focus();
  }

  function openLangMenu() {
    if (!langBtn || !langMenu) return;
    langMenu.hidden = false;
    langBtn.setAttribute("aria-expanded", "true");
    var selected = langMenu.querySelector('[aria-checked="true"]') || langMenu.querySelector("button");
    if (selected) selected.focus();
  }

  function closeLangMenu() {
    if (!langBtn || !langMenu) return;
    langMenu.hidden = true;
    langBtn.setAttribute("aria-expanded", "false");
  }

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", function () {
      if (langMenu.hidden) openLangMenu(); else closeLangMenu();
    });

    langBtn.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLangMenu();
      }
    });

    langMenu.addEventListener("click", function (event) {
      var button = event.target.closest("[data-set-lang]");
      if (button) setLanguage(button.getAttribute("data-set-lang"), true);
    });

    langMenu.addEventListener("keydown", function (event) {
      var buttons = $$("[data-set-lang]", langMenu);
      var index = buttons.indexOf(document.activeElement);
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        var next = event.key === "ArrowDown" ? (index + 1) % buttons.length : (index - 1 + buttons.length) % buttons.length;
        buttons[next].focus();
      } else if (event.key === "Escape") {
        event.preventDefault();
        closeLangMenu();
        langBtn.focus();
      } else if (event.key === "Tab") {
        closeLangMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (langSwitch && !langSwitch.contains(event.target)) closeLangMenu();
    });
  }

  setLanguage(initialLang, false);

  /* ----------------------------------------------------------------------
     Mobile navigation
     ---------------------------------------------------------------------- */
  var menuBtn = document.getElementById("menu-btn");
  var mobileNav = document.getElementById("mobile-nav");

  function setMobileMenu(open) {
    if (!menuBtn || !mobileNav) return;
    mobileNav.hidden = !open;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? t("a11y.closeMenu") : t("a11y.openMenu"));
    body.classList.toggle("menu-open", open && mobileQuery.matches);
    if (open) {
      var first = mobileNav.querySelector("a");
      if (first) first.focus();
    }
  }

  function closeMobileMenu() { setMobileMenu(false); }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      setMobileMenu(mobileNav.hidden);
    });
    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMobileMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !mobileNav.hidden) {
        closeMobileMenu();
        menuBtn.focus();
      }
    });
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", function (event) {
        if (!event.matches) closeMobileMenu();
      });
    }
  }

  /* ----------------------------------------------------------------------
     Header state, back-to-top and scrollspy
     ---------------------------------------------------------------------- */
  var header = document.getElementById("site-header");
  var backToTop = document.getElementById("back-to-top");
  var navLinks = $$(".main-nav a, .mobile-nav a");
  var sections = ["accueil", "a-propos", "competences", "projets", "services", "experience", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var ticking = false;

  function updateOnScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (backToTop) backToTop.hidden = y < 600;

    if (sections.length) {
      var offset = (header ? header.offsetHeight : 70) + 120;
      var activeId = sections[0].id;
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= offset) activeId = section.id;
      });
      navLinks.forEach(function (link) {
        var href = link.getAttribute("href");
        if (!href || href.charAt(0) !== "#") return;
        if (href === "#" + activeId) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateOnScroll);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  updateOnScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ----------------------------------------------------------------------
     Progressive reveal
     ---------------------------------------------------------------------- */
  var revealItems = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (element) { element.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 120px 0px" });
    revealItems.forEach(function (element) { revealObserver.observe(element); });
    window.setTimeout(function () {
      revealItems.forEach(function (element) { element.classList.add("is-visible"); });
    }, 2500);
  }

  /* ----------------------------------------------------------------------
     Copy email
     ---------------------------------------------------------------------- */
  var copyBtn = document.getElementById("copy-email");
  var copyStatus = document.getElementById("copy-status");
  var emailAddress = copyBtn ? copyBtn.getAttribute("data-email") || "dhouib.alaa@gmail.com" : "dhouib.alaa@gmail.com";

  function legacyCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  if (copyBtn && copyStatus) {
    copyBtn.addEventListener("click", function () {
      var done = function (ok) {
        setStatus(copyStatus, t(ok ? "form.copied" : "form.copyError"), ok ? "is-success" : "is-error");
        window.setTimeout(function () { copyStatus.textContent = ""; copyStatus.classList.remove("is-success", "is-error"); }, 4500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailAddress).then(function () { done(true); }, function () { done(legacyCopy(emailAddress)); });
      } else {
        done(legacyCopy(emailAddress));
      }
    });
  }

  /* ----------------------------------------------------------------------
     Project dialog
     ---------------------------------------------------------------------- */
  var dialog = document.getElementById("project-dialog");
  var lastTrigger = null;

  function projectData(id) {
    return window.I18N.t("projects.items." + id);
  }

  function fillDialog(id) {
    var data = projectData(id);
    if (!data || typeof data !== "object") return;
    var card = document.querySelector('.project-card[data-project="' + id + '"]');
    var title = data.title || "";
    var index = card ? (card.querySelector(".project-index") || {}).textContent : "";
    var statusEl = card ? card.querySelector(".status") : null;

    $("#dialog-index").textContent = index || "—";
    $("#dialog-category").textContent = data.category || "";
    var dialogStatus = $("#dialog-status");
    dialogStatus.textContent = data.status || "";
    dialogStatus.className = "status" + (statusEl ? " " + statusEl.className.replace(/\bstatus\b/, "").trim() : "");
    $("#dialog-title").textContent = title;
    $("#dialog-client").textContent = data.client || "";
    $("#dialog-summary").textContent = data.summary || "";
    $("#dialog-problem").textContent = data.problem || "";
    $("#dialog-note").textContent = data.note || "";

    var features = $("#dialog-features");
    features.textContent = "";
    (data.features || []).forEach(function (feature) {
      var item = document.createElement("li");
      item.textContent = feature;
      features.appendChild(item);
    });

    var tech = $("#dialog-tech");
    tech.textContent = "";
    (data.tech || []).forEach(function (technology) {
      var item = document.createElement("li");
      item.textContent = technology;
      tech.appendChild(item);
    });

    var contactLink = $("#dialog-contact");
    contactLink.setAttribute("data-project-title", title);
    contactLink.setAttribute("data-project-id", id);
  }

  function openDialog(id, trigger) {
    if (!dialog) return;
    lastTrigger = trigger || null;
    fillDialog(id);
    closeMobileMenu();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    body.classList.add("dialog-open");
  }

  function closeDialog() {
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    body.classList.remove("dialog-open");
    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
  }

  if (dialog) {
    $$('[data-open-project]').forEach(function (button) {
      button.addEventListener("click", function () {
        openDialog(button.getAttribute("data-open-project"), button);
      });
    });

    $$("[data-close-dialog]", dialog).forEach(function (button) {
      button.addEventListener("click", closeDialog);
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeDialog();
    });

    dialog.addEventListener("cancel", function () {
      body.classList.remove("dialog-open");
    });

    dialog.addEventListener("close", function () {
      body.classList.remove("dialog-open");
    });
  }

  /* ----------------------------------------------------------------------
     Contact prefill
     ---------------------------------------------------------------------- */
  var form = document.getElementById("contact-form");
  var subjectInput = document.getElementById("cf-subject");
  var nameInput = document.getElementById("cf-name");
  var formStatus = document.getElementById("form-status");

  function prefillSubject(kind, title) {
    if (!subjectInput) return;
    var value;
    if (kind === "general") value = t("form.generalSubject");
    else if (title) value = t(kind === "demo" ? "form.demoPrefix" : "form.projectPrefix") + title;
    else value = t("form.generalSubject");
    subjectInput.value = value;
    subjectInput.classList.remove("is-invalid");
    var field = subjectInput.closest(".field");
    if (field) field.classList.remove("has-error");
    var error = document.getElementById("cf-subject-error");
    if (error) error.textContent = "";
  }

  $$("[data-prefill-demo]").forEach(function (link) {
    link.addEventListener("click", function () {
      var id = link.getAttribute("data-prefill-demo");
      if (id === "general") {
        prefillSubject("general");
      } else {
        var data = projectData(id);
        prefillSubject("demo", data && data.title);
      }
      window.setTimeout(function () {
        if (subjectInput) subjectInput.focus({ preventScroll: true });
      }, 650);
    });
  });

  var dialogContact = document.getElementById("dialog-contact");
  if (dialogContact) {
    dialogContact.addEventListener("click", function (event) {
      event.preventDefault();
      var title = dialogContact.getAttribute("data-project-title") || "";
      prefillSubject("project", title);
      closeDialog();
      var contactSection = document.getElementById("contact");
      if (contactSection) contactSection.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      window.setTimeout(function () {
        if (subjectInput) subjectInput.focus({ preventScroll: true });
      }, 700);
    });
  }

  /* ----------------------------------------------------------------------
     Form validation and submission
     ---------------------------------------------------------------------- */
  function fieldError(input, message) {
    if (!input) return;
    var field = input.closest(".field");
    var error = document.getElementById(input.id + "-error");
    if (field) field.classList.toggle("has-error", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function validateField(input) {
    if (!input) return true;
    var value = (input.value || "").trim();
    if (input.name === "name") {
      var nameError = value.length < 2 ? t("form.required") : "";
      fieldError(input, nameError);
      return !nameError;
    }
    if (input.name === "email") {
      var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      fieldError(input, !value ? t("form.required") : !emailValid ? t("form.invalidEmail") : "");
      return value && emailValid;
    }
    if (input.name === "subject") {
      var subjectError = !value ? t("form.required") : "";
      fieldError(input, subjectError);
      return !subjectError;
    }
    if (input.name === "message") {
      var messageError = value.length < 10 ? t("form.shortMessage") : "";
      fieldError(input, messageError);
      return !messageError;
    }
    return true;
  }

  if (form) {
    var fields = ["cf-name", "cf-email", "cf-subject", "cf-message"].map(function (id) { return document.getElementById(id); }).filter(Boolean);

    fields.forEach(function (input) {
      input.addEventListener("blur", function () { validateField(input); });
      input.addEventListener("input", function () {
        var field = input.closest(".field");
        if (field && field.classList.contains("has-error")) validateField(input);
        if (formStatus) setStatus(formStatus, "");
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (formStatus) setStatus(formStatus, "");

      var valid = fields.map(validateField).every(Boolean);
      if (!valid) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var honeypot = document.getElementById("cf-company");
      if (honeypot && honeypot.value.trim()) return;

      var submitBtn = document.getElementById("cf-submit");
      var submitLabel = submitBtn ? submitBtn.querySelector("[data-i18n]") : null;
      var originalLabel = submitLabel ? submitLabel.textContent : "";
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var subject = document.getElementById("cf-subject").value.trim();
      var message = document.getElementById("cf-message").value.trim();
      var endpoint = (form.getAttribute("data-endpoint") || "").trim();

      if (endpoint) {
        if (submitLabel) submitLabel.textContent = t("form.sending");
        form.classList.add("is-sending");
        fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        }).then(function (response) {
          if (!response.ok) throw new Error("Request failed");
          if (formStatus) setStatus(formStatus, t("form.successEndpoint"), "is-success");
          form.reset();
          fields.forEach(function (input) { fieldError(input, ""); });
        }).catch(function () {
          if (formStatus) setStatus(formStatus, t("form.error"), "is-error");
        }).then(function () {
          form.classList.remove("is-sending");
          if (submitLabel) submitLabel.textContent = originalLabel;
        });
        return;
      }

      var bodyText = "Nom / Name: " + name + "\nEmail: " + email + "\n\n" + message;
      var mailto = "mailto:dhouib.alaa@gmail.com?subject=" + encodeURIComponent("[Portfolio] " + subject) + "&body=" + encodeURIComponent(bodyText);
      window.location.href = mailto;
      if (formStatus) setStatus(formStatus, t("form.success"), "is-success");
    });
  }

  /* ----------------------------------------------------------------------
     Misc
     ---------------------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
