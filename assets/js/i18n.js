/* ==========================================================================
   i18n core — language registry, translation and DOM application
   ========================================================================== */
(function (window, document) {
  "use strict";

  var dictionaries = {};
  var supported = ["fr", "en", "ar"];
  var fallback = "fr";
  var current = "fr";

  function getPath(object, path) {
    if (!object || !path) return undefined;
    return path.split(".").reduce(function (value, key) {
      return value && typeof value === "object" && key in value ? value[key] : undefined;
    }, object);
  }

  function register(lang, dictionary) {
    if (supported.indexOf(lang) === -1) return;
    dictionaries[lang] = dictionary;
  }

  function t(key, lang) {
    var code = lang || current;
    var value = getPath(dictionaries[code], key);
    if (value === undefined && code !== fallback) value = getPath(dictionaries[fallback], key);
    return value === undefined ? key : value;
  }

  function applyList(element, lang) {
    var key = element.getAttribute("data-list");
    var values = t(key, lang);
    if (!Array.isArray(values)) return;

    var limit = parseInt(element.getAttribute("data-list-limit"), 10);
    var visible = limit > 0 ? values.slice(0, limit) : values.slice();

    element.textContent = "";
    visible.forEach(function (value) {
      var item = document.createElement("li");
      item.textContent = value;
      element.appendChild(item);
    });

    if (limit > 0 && values.length > limit) {
      var more = document.createElement("li");
      more.className = "chip-more";
      more.textContent = "+" + (values.length - limit);
      more.setAttribute("aria-label", t("projects.moreLabel", lang));
      more.setAttribute("title", t("projects.moreLabel", lang));
      element.appendChild(more);
    }
  }

  function apply(root, lang) {
    var code = supported.indexOf(lang) !== -1 ? lang : fallback;
    current = code;
    var scope = root || document;
    var nodes;

    nodes = scope.querySelectorAll("[data-i18n]");
    Array.prototype.forEach.call(nodes, function (element) {
      var value = t(element.getAttribute("data-i18n"), code);
      if (typeof value === "string") element.textContent = value;
    });

    nodes = scope.querySelectorAll("[data-i18n-aria-label]");
    Array.prototype.forEach.call(nodes, function (element) {
      var value = t(element.getAttribute("data-i18n-aria-label"), code);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    nodes = scope.querySelectorAll("[data-i18n-placeholder]");
    Array.prototype.forEach.call(nodes, function (element) {
      var value = t(element.getAttribute("data-i18n-placeholder"), code);
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    nodes = scope.querySelectorAll("[data-i18n-title]");
    Array.prototype.forEach.call(nodes, function (element) {
      var value = t(element.getAttribute("data-i18n-title"), code);
      if (typeof value === "string") element.setAttribute("title", value);
    });

    nodes = scope.querySelectorAll("[data-i18n-alt]");
    Array.prototype.forEach.call(nodes, function (element) {
      var value = t(element.getAttribute("data-i18n-alt"), code);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    nodes = scope.querySelectorAll("[data-list]");
    Array.prototype.forEach.call(nodes, function (element) {
      applyList(element, code);
    });

    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", code);
    document.title = t("meta.title", code);

    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t("meta.description", code));

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title", code));
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t("meta.description", code));
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", code === "fr" ? "fr_FR" : code === "ar" ? "ar_TN" : "en_US");

    var currentLabel = document.getElementById("lang-current");
    if (currentLabel) currentLabel.textContent = code.toUpperCase();

    nodes = document.querySelectorAll("[data-set-lang]");
    Array.prototype.forEach.call(nodes, function (button) {
      button.setAttribute("aria-checked", button.getAttribute("data-set-lang") === code ? "true" : "false");
    });

    current = code;
    return code;
  }

  window.I18N = {
    supported: supported,
    register: register,
    t: t,
    apply: apply,
    get current() { return current; },
    get available() { return Object.keys(dictionaries); }
  };
})(window, document);
