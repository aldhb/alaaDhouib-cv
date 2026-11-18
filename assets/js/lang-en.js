/* English */
(function () {
  "use strict";
  window.I18N.register("en", {
    meta: {
      title: "Alaa Dhouib — Software Developer | Full Stack & Software Solutions",
      description: "Portfolio of Alaa Dhouib, software developer in Sfax: websites, e-commerce, management applications, ERP, booking platforms, databases and Business Intelligence."
    },
    a11y: {
      skip: "Skip to content",
      mainNav: "Main navigation",
      sectionNav: "Portfolio sections",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      theme: "Toggle light and dark theme",
      lang: "Change language",
      photoAlt: "Alaa Dhouib, software developer in Sfax",
      brandHome: "Alaa Dhouib — Home",
      moreFeatures: "View all features",
      external: "Opens in a new tab"
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      services: "Services",
      experience: "Experience",
      contact: "Contact"
    },
    actions: {
      cv: "CV",
      downloadCv: "Download my CV",
      discoverProjects: "Explore my projects",
      contactMe: "Contact me",
      viewProject: "View project",
      privateDemo: "Private demo",
      discuss: "Discuss the project",
      close: "Close",
      backTop: "Back to top",
      copyEmail: "Copy email address",
      copied: "Email address copied.",
      whatsapp: "WhatsApp",
      github: "GitHub",
      email: "Email",
      code: "Source code"
    },
    hero: {
      firstName: "Alaa",
      lastName: "Dhouib",
      available: "Available for projects & collaborations",
      role: "Software Developer · Full Stack Developer",
      lead1: "I design and build digital solutions for businesses: websites, management applications, booking platforms, ERP systems and decision-support dashboards.",
      lead2: "My goal: turn business needs into efficient, modern software tailored to each activity.",
      downloadCv: "Download my CV (PDF)",
      location: "Sfax, Tunisia",
      remote: "On-site & remote work",
      stackNote: "Web, business & Business Intelligence",
      fact1: { title: "Web & Full Stack", text: "Websites, interfaces and applications" },
      fact2: { title: "ERP & business", text: "Digitising business processes" },
      fact3: { title: "Data & BI", text: "Data Warehouse and dashboards" }
    },
    about: {
      label: "About",
      title: "I turn business needs into concrete solutions.",
      p1: "A software developer based in Sfax, I combine a background in Business Computing and Business Intelligence with hands-on web and software development. This dual perspective helps me understand how a company works before designing the tools that support it.",
      p2: "I designed, developed and administered the e-commerce platform of a wholesale distributor of mobile and computer accessories. From requirements analysis to maintenance, including data management and user support, this experience taught me to deliver reliable, genuinely usable solutions.",
      p3: "Today I build management applications, ERP systems, booking platforms and business intelligence solutions. I care deeply about clear interfaces, data quality and ease of use.",
      quote: "Good software does more than work: it saves time for the people who use it.",
      approachLabel: "How I work",
      approach: ["Listening to needs", "Rigour", "Problem solving", "Autonomy", "Communication", "Project management"],
      profile: {
        role: "Software Developer",
        location: "Location",
        education: "Education",
        educationValue: "Business Computing & BI",
        focus: "Specialties",
        languages: "Languages",
        availability: "Open to opportunities",
        availabilityText: "Freelance projects, collaborations and software development roles."
      },
      pillars: {
        analysis: { title: "Analysis & design", text: "Understand the need, model the data and define the right solution." },
        fullstack: { title: "Full-stack development", text: "Interfaces, back-end, databases and feature integration." },
        business: { title: "Business solutions", text: "ERP, retail management, booking and process digitisation." },
        data: { title: "Data & Business Intelligence", text: "Structure data and turn it into useful dashboards." }
      }
    },
    skills: {
      label: "Technical expertise",
      title: "Technical skills serving real business projects.",
      subtitle: "Technologies chosen to design, build and maintain complete solutions — without artificial proficiency scores.",
      web: { title: "Web Development", desc: "Modern interfaces and complete web applications, from front-end to back-end.", tags: ["PHP", "Laravel", "HTML5", "CSS3", "React", "Angular"] },
      db: { title: "Databases", desc: "Design, modelling and administration of relational databases.", tags: ["SQL", "MySQL", "Relational modelling", "phpMyAdmin", "Database administration"] },
      software: { title: "Software Development", desc: "From requirements analysis to maintenance, with solid business logic.", tags: ["Requirements analysis", "Application design", "Business logic", "Feature development", "Maintenance & upgrades"] },
      erp: { title: "ERP & business solutions", desc: "Management tools built around real company processes.", tags: ["Custom management software", "Retail management", "Inventory management", "Sales management", "Product management", "Digitisation"] },
      bi: { title: "Business Intelligence", desc: "Data structuring, ETL and decision-support reporting.", tags: ["Data Warehouse", "Dimensional modelling", "ETL", "SQL Server", "SSIS", "Power BI"] },
      tools: { title: "Tools & methods", desc: "An organised, collaborative and well-documented working environment.", tags: ["Git & GitHub", "Visual Studio Code", "Microsoft Office 365", "Project management", "Technical documentation"] },
      note: "Skills are grouped by area, without percentages: what matters is the ability to design and deliver a complete solution."
    },
    projects: {
      label: "Portfolio",
      title: "Four projects, four business problems solved.",
      subtitle: "Concrete work in e-commerce, booking, ERP and Business Intelligence. Each project is presented with its context, real status and implemented features.",
      mockup: "Illustrative preview",
      bookingToast: "Booking confirmed",
      problemLabel: "The challenge",
      featuresLabel: "Key features",
      stackLabel: "Technologies",
      moreLabel: "View all features",
      note: "Projects without a public demo are available on request. No fictional demo links are shown.",
      ctaTitle: "Have a similar project?",
      ctaText: "Let's talk about your needs and the right solution.",
      items: {
        ecommerce: {
          category: "Web Development · E-commerce",
          status: "Live",
          title: "E-commerce platform — Gadgets & computer accessories",
          client: "BSM Company · Sfax",
          summary: "An e-commerce platform to showcase and sell gadgets, computer accessories and electronic products.",
          problem: "Structure a large catalogue, make product browsing easy and centralise online business management.",
          note: "Live and maintained in production. Private demo available on request.",
          features: ["Product catalogue", "Categories and catalogue organisation", "Product pages with images, descriptions and prices", "Commercial content management", "Administration interface", "Order tracking"],
          tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
        },
        booking: {
          category: "Web Development · Booking",
          status: "Completed · private demo",
          title: "Online booking platform",
          client: "Web project · Sfax",
          summary: "A platform that digitises booking: services, availability, requests and centralised follow-up.",
          problem: "Replace manual exchanges with a clear, organised and traceable booking journey.",
          note: "Completed project — private demo available on request.",
          features: ["Browse available services", "Service information and availability", "Online booking form", "Booking request management", "Booking follow-up", "Customer information management"],
          tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
        },
        erp: {
          category: "Software · ERP · Retail management",
          status: "In development",
          title: "ERP for mobile phone & accessory stores",
          client: "Business solution · Sfax",
          summary: "An ERP to centralise products, inventory, purchases, sales and margins for mobile phone stores.",
          problem: "Data scattered across files and ledgers makes it difficult to track inventory, sales and margins.",
          note: "Project in development: not all features in scope are operational yet.",
          features: ["Product and category management", "Inventory and stock movements", "Purchases and suppliers", "Sales and customers", "Pricing and margins", "Dashboard and statistics", "Users and access rights", "Operation history"],
          tech: ["PHP", "MySQL", "Relational modelling", "Administration interface"]
        },
        bi: {
          category: "Data Engineering · Business Intelligence",
          status: "Completed project",
          title: "Data Warehouse & BI — WideWorldImporters",
          client: "Business intelligence project",
          summary: "A data warehouse built from WideWorldImporters for analysis and reporting.",
          problem: "An operational database does not support fast, reliable analysis: it needs a dimensional model and structured indicators.",
          note: "Completed business intelligence project: analysis, modelling, ETL and Power BI reporting.",
          features: ["Source database analysis", "Dimensional model design", "Fact tables and dimensions", "ETL process with SQL Server Integration Services", "SQL Server data warehouse", "Power BI dashboards"],
          tech: ["SQL Server", "SQL", "SSIS", "Power BI", "Dimensional modelling"]
        }
      }
    },
    services: {
      label: "Services",
      title: "Software solutions tailored to your business.",
      subtitle: "From the initial idea to production, I support you throughout your project's lifecycle.",
      ctaLabel: "A specific need?",
      ctaTitle: "Do you have an idea or a specific need?",
      ctaText: "I can help you design and build a software solution tailored to your activity.",
      ctaButton: "Let's discuss your project",
      items: {
        web: { title: "Professional websites", text: "Showcase sites, corporate websites and custom interfaces, fast and responsive." },
        ecommerce: { title: "E-commerce platforms", text: "Catalogues, carts, orders and administration to sell online." },
        software: { title: "Management software", text: "Business applications to structure your daily operations." },
        erp: { title: "ERP solutions", text: "An ERP tailored to your processes: sales, inventory, purchasing and customers." },
        booking: { title: "Online booking", text: "Booking journeys, availability and centralised request tracking." },
        database: { title: "Databases", text: "Design, modelling, optimisation and administration of your data." },
        bi: { title: "Business Intelligence", text: "Data Warehouse, ETL and decision-support dashboards." },
        maintenance: { title: "Maintenance & upgrades", text: "Fixes, continuous improvement and user support." }
      }
    },
    experience: {
      label: "Background",
      title: "Hands-on experience, from requirements to production.",
      subtitle: "Development, technical administration, user relations and project coordination: a field-oriented background.",
      jobs: {
        bsm: {
          type: "Professional experience",
          place: "Sfax, Tunisia",
          role: "Technical Lead & E-commerce Developer",
          org: "BSM Company · Wholesale distributor of mobile and computer accessories",
          bullets: ["Analysed the company's needs and contributed to an e-commerce solution tailored to its business.", "Developed the platform: interfaces, features and data management.", "Handled technical administration: hosting, database, updates and maintenance.", "Managed the product catalogue and order-related features.", "Diagnosed and resolved technical issues; supported users and customers.", "Monitored site performance and security-related aspects."]
        },
        ider: {
          type: "Volunteer experience",
          place: "Sfax, Tunisia",
          role: "Head of the Digital Marketing Department",
          org: "Ider Club — ISGIS Sfax",
          bullets: ["Coordinated the team and monitored the department's projects.", "Contributed to digital communication strategies.", "Managed and animated the club's social media accounts.", "Created graphic and audiovisual content, including video editing.", "Took part in communication campaigns and promotional activities."]
        }
      }
    },
    education: {
      title: "Education",
      certsTitle: "Certifications & training",
      languagesTitle: "Languages",
      interestsTitle: "Interests",
      degrees: {
        licence: { period: "2022 — 2025", title: "National Bachelor's degree in Business Computing — Business Intelligence", school: "ISGIS · Sfax" },
        engineering: { period: "2025 — 2027 · ongoing", title: "Engineering cycle — Artificial Intelligence & Data Science", school: "IIT · Sfax" },
        bac: { period: "2021", title: "Baccalaureate in Economics & Management", school: "Taieb El Mhiri High School · Sfax" }
      },
      certs: ["Tripartite Innovation Lab — Design Thinking, Lean Startup, Lean Canvas & Pitching", "Microsoft Office 365 certification", "Video editing training — Adobe Premiere Pro"],
      languages: { ar: "Arabic", fr: "French", en: "English" },
      levels: { native: "Native language", fluent: "Fluent" },
      interests: ["Entrepreneurship", "Digital content creation"]
    },
    contact: {
      label: "Contact",
      title: "Let's talk about your next project.",
      subtitle: "Do you have a software project? Let's discuss your needs and build a tailored solution together.",
      infoTitle: "Let's stay in touch",
      infoText: "Available to discuss your project, your needs or a collaboration.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappText: "Chat on WhatsApp",
      whatsappMessage: "Hello Alaa, I would like to discuss a project.",
      locationLabel: "Location",
      cvTitle: "My CV (PDF)",
      cvText: "Background, skills and experience in one document, ready to share.",
      qrText: "Scan to open the portfolio",
      qrAlt: "QR code linking to Alaa Dhouib's portfolio",
      formTitle: "Tell me about your needs",
      formText: "A few lines are enough to start the conversation."
    },
    form: {
      name: "Full name",
      namePlaceholder: "Your name",
      email: "Email address",
      emailPlaceholder: "you@company.com",
      subject: "Subject",
      subjectPlaceholder: "Website, ERP, business application…",
      message: "Message",
      messagePlaceholder: "Describe your project, goals and constraints…",
      submit: "Send message",
      sending: "Preparing your message…",
      privacy: "Your information is only used to reply to your request.",
      required: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
      shortMessage: "Your message must contain at least 10 characters.",
      success: "Your message is ready. Your email client will open to complete the send.",
      successEndpoint: "Message sent. Thank you — I will get back to you as soon as possible.",
      error: "Sending failed. You can email me directly at dhouib.alaa@gmail.com.",
      copied: "Email address copied to the clipboard.",
      copyError: "Copy failed — please write to dhouib.alaa@gmail.com.",
      demoPrefix: "Demo request — ",
      projectPrefix: "Project — ",
      generalSubject: "New software project"
    },
    footer: {
      tagline: "Software Developer · Full Stack Developer · Software Solutions",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      source: "Portfolio source code"
    },
    dialog: {
      caseStudy: "Case study",
      contact: "Discuss this project"
    }
  });
})();
