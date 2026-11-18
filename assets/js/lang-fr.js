/* Français — langue principale */
(function () {
  "use strict";
  window.I18N.register("fr", {
    meta: {
      title: "Alaa Dhouib — Développeur Informatique | Full Stack & Solutions Logicielles",
      description: "Portfolio d'Alaa Dhouib, développeur informatique à Sfax : sites web, e-commerce, applications de gestion, ERP, plateformes de réservation, bases de données et Business Intelligence."
    },
    a11y: {
      skip: "Aller au contenu",
      mainNav: "Navigation principale",
      sectionNav: "Sections du portfolio",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      theme: "Basculer entre le thème clair et sombre",
      lang: "Changer de langue",
      photoAlt: "Alaa Dhouib, développeur informatique à Sfax",
      brandHome: "Alaa Dhouib — Accueil",
      moreFeatures: "Voir toutes les fonctionnalités",
      external: "S'ouvre dans un nouvel onglet"
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      services: "Services",
      experience: "Expérience",
      contact: "Contact"
    },
    actions: {
      cv: "CV",
      downloadCv: "Télécharger mon CV",
      discoverProjects: "Découvrir mes projets",
      contactMe: "Me contacter",
      viewProject: "Découvrir le projet",
      privateDemo: "Démo privée",
      discuss: "Discuter du projet",
      close: "Fermer",
      backTop: "Retour en haut",
      copyEmail: "Copier l'adresse email",
      copied: "Adresse email copiée.",
      whatsapp: "WhatsApp",
      github: "GitHub",
      email: "Email",
      code: "Code source"
    },
    hero: {
      firstName: "Alaa",
      lastName: "Dhouib",
      available: "Disponible pour missions & collaborations",
      role: "Développeur Informatique · Full Stack Developer",
      lead1: "Je conçois et développe des solutions numériques pour les entreprises : sites web, applications de gestion, plateformes de réservation, ERP et tableaux de bord décisionnels.",
      lead2: "Mon objectif : transformer les besoins métiers en solutions informatiques efficaces, modernes et adaptées à chaque activité.",
      downloadCv: "Télécharger mon CV PDF",
      location: "Sfax, Tunisie",
      remote: "Missions sur site & à distance",
      stackNote: "Web, gestion & Business Intelligence",
      fact1: { title: "Web & Full Stack", text: "Sites, interfaces et applications" },
      fact2: { title: "ERP & gestion", text: "Digitalisation des processus métiers" },
      fact3: { title: "Data & BI", text: "Data Warehouse et tableaux de bord" }
    },
    about: {
      label: "À propos",
      title: "Je transforme les besoins métiers en solutions concrètes.",
      p1: "Développeur informatique basé à Sfax, je combine une formation en Informatique de Gestion et Business Intelligence avec une pratique concrète du développement web et logiciel. Cette double culture me permet de comprendre les processus d'une entreprise avant de concevoir les outils qui les accompagnent.",
      p2: "J'ai conçu, développé et administré la plateforme e-commerce d'une société de vente en gros d'accessoires GSM et informatiques. De l'analyse du besoin à la maintenance, en passant par la gestion des données et l'assistance aux utilisateurs, cette expérience m'a appris à livrer des solutions fiables et réellement utilisables.",
      p3: "Aujourd'hui, je développe des applications de gestion, des ERP, des plateformes de réservation et des solutions décisionnelles. J'attache une grande importance à la clarté de l'interface, à la qualité des données et à la simplicité d'usage.",
      quote: "Un bon logiciel ne se contente pas de fonctionner : il fait gagner du temps à ceux qui l'utilisent.",
      approachLabel: "Ma façon de travailler",
      approach: ["Écoute du besoin", "Rigueur", "Résolution de problèmes", "Autonomie", "Communication", "Gestion de projet"],
      profile: {
        role: "Développeur Informatique",
        location: "Localisation",
        education: "Formation",
        educationValue: "Informatique de Gestion & BI",
        focus: "Spécialités",
        languages: "Langues",
        availability: "Ouvert aux opportunités",
        availabilityText: "Missions freelance, collaborations et postes en développement logiciel."
      },
      pillars: {
        analysis: { title: "Analyse & conception", text: "Comprendre le besoin, modéliser les données et définir une solution adaptée." },
        fullstack: { title: "Développement full stack", text: "Interfaces, back-end, bases de données et intégration des fonctionnalités." },
        business: { title: "Solutions métiers", text: "ERP, gestion commerciale, réservation et digitalisation des processus." },
        data: { title: "Data & Business Intelligence", text: "Structurer la donnée et la transformer en tableaux de bord utiles." }
      }
    },
    skills: {
      label: "Expertise technique",
      title: "Des compétences techniques au service des projets métiers.",
      subtitle: "Des technologies choisies pour concevoir, développer et maintenir des solutions complètes — sans niveaux artificiels.",
      web: { title: "Développement Web", desc: "Interfaces modernes et applications web complètes, du front-end au back-end.", tags: ["PHP", "Laravel", "HTML5", "CSS3", "React", "Angular"] },
      db: { title: "Bases de données", desc: "Conception, modélisation et administration de bases relationnelles.", tags: ["SQL", "MySQL", "Modélisation relationnelle", "phpMyAdmin", "Administration de bases de données"] },
      software: { title: "Développement logiciel", desc: "De l'analyse du besoin à la maintenance, avec une logique métier solide.", tags: ["Analyse des besoins", "Conception d'applications", "Logique métier", "Développement de fonctionnalités", "Maintenance & évolution"] },
      erp: { title: "ERP & solutions métiers", desc: "Des outils de gestion pensés pour les processus réels des entreprises.", tags: ["Logiciels de gestion personnalisés", "Gestion commerciale", "Gestion des stocks", "Gestion des ventes", "Gestion des produits", "Digitalisation"] },
      bi: { title: "Business Intelligence", desc: "Structuration des données, ETL et restitution décisionnelle.", tags: ["Data Warehouse", "Modélisation dimensionnelle", "ETL", "SQL Server", "SSIS", "Power BI"] },
      tools: { title: "Outils & méthodes", desc: "Un environnement de travail organisé, collaboratif et documenté.", tags: ["Git & GitHub", "Visual Studio Code", "Microsoft Office 365", "Gestion de projet", "Documentation technique"] },
      note: "Les compétences sont présentées par domaine, sans pourcentages : ce qui compte, c'est la capacité à concevoir et livrer une solution complète."
    },
    projects: {
      label: "Portfolio",
      title: "Quatre projets, quatre problèmes métiers résolus.",
      subtitle: "Des réalisations concrètes en e-commerce, réservation, ERP et Business Intelligence. Chaque projet est présenté avec son contexte, son statut réel et les fonctionnalités développées.",
      mockup: "Aperçu illustratif",
      bookingToast: "Réservation confirmée",
      problemLabel: "Problématique",
      featuresLabel: "Fonctionnalités clés",
      stackLabel: "Technologies",
      moreLabel: "Voir toutes les fonctionnalités",
      note: "Les projets sans démonstration publique sont disponibles sur demande. Aucun lien de démonstration fictif n'est affiché.",
      ctaTitle: "Un projet similaire ?",
      ctaText: "Parlons de votre besoin et de la solution adaptée.",
      items: {
        ecommerce: {
          category: "Développement Web · E-commerce",
          status: "En production",
          title: "Plateforme e-commerce — Gadgets & accessoires informatiques",
          client: "Société BSM · Sfax",
          summary: "Une plateforme e-commerce pour présenter et commercialiser gadgets, accessoires informatiques et produits électroniques.",
          problem: "Structurer un catalogue large, faciliter la consultation des produits et centraliser la gestion commerciale en ligne.",
          note: "Site en production, administré au quotidien. Démonstration privée sur demande.",
          features: ["Catalogue de produits", "Catégories et organisation du catalogue", "Fiches produits avec images, descriptions et prix", "Gestion du contenu commercial", "Interface d'administration", "Suivi des commandes"],
          tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
        },
        booking: {
          category: "Développement Web · Réservation",
          status: "Réalisé · démo privée",
          title: "Plateforme de réservation en ligne",
          client: "Projet web · Sfax",
          summary: "Une plateforme qui digitalise la prise de réservation : services, disponibilités, demandes et suivi centralisé.",
          problem: "Remplacer les échanges manuels par un parcours de réservation clair, organisé et traçable.",
          note: "Projet réalisé — démonstration privée sur demande.",
          features: ["Consultation des services disponibles", "Présentation des informations et disponibilités", "Formulaire de réservation en ligne", "Gestion des demandes de réservation", "Suivi des réservations", "Gestion des informations clients"],
          tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
        },
        erp: {
          category: "Logiciel · ERP · Gestion commerciale",
          status: "En développement",
          title: "ERP pour boutiques GSM & accessoires",
          client: "Solution métier · Sfax",
          summary: "Un ERP pour centraliser produits, stocks, achats, ventes et marges des boutiques de téléphonie.",
          problem: "Des données dispersées entre fichiers et registres rendent le suivi des stocks, des ventes et des marges difficile.",
          note: "Projet en développement : toutes les fonctionnalités du périmètre ne sont pas encore opérationnelles.",
          features: ["Gestion des produits et des catégories", "Gestion du stock et des mouvements", "Gestion des achats et des fournisseurs", "Gestion des ventes et des clients", "Gestion des prix et des marges", "Tableau de bord et statistiques", "Utilisateurs et droits d'accès", "Historique des opérations"],
          tech: ["PHP", "MySQL", "Modélisation relationnelle", "Interface d'administration"]
        },
        bi: {
          category: "Data Engineering · Business Intelligence",
          status: "Projet réalisé",
          title: "Data Warehouse & BI — WideWorldImporters",
          client: "Projet décisionnel",
          summary: "Un entrepôt de données construit à partir de WideWorldImporters pour l'analyse et le reporting.",
          problem: "Une base opérationnelle ne permet pas une analyse fiable et rapide : il faut un modèle dimensionnel et des indicateurs structurés.",
          note: "Projet décisionnel réalisé : analyse, modélisation, ETL et restitution Power BI.",
          features: ["Analyse de la base de données source", "Conception du modèle dimensionnel", "Identification des tables de faits et dimensions", "Processus ETL avec SQL Server Integration Services", "Data Warehouse sous SQL Server", "Tableaux de bord décisionnels Power BI"],
          tech: ["SQL Server", "SQL", "SSIS", "Power BI", "Modélisation dimensionnelle"]
        }
      }
    },
    services: {
      label: "Services",
      title: "Des solutions informatiques adaptées à votre activité.",
      subtitle: "De l'idée à la mise en production, je vous accompagne sur l'ensemble du cycle de vie de votre projet.",
      ctaLabel: "Un besoin spécifique ?",
      ctaTitle: "Vous avez une idée ou un besoin spécifique ?",
      ctaText: "Je peux vous accompagner dans la conception et le développement d'une solution informatique adaptée à votre activité.",
      ctaButton: "Discutons de votre projet",
      items: {
        web: { title: "Sites web professionnels", text: "Sites vitrines, corporates et interfaces sur mesure, rapides et responsives." },
        ecommerce: { title: "Plateformes e-commerce", text: "Catalogues, paniers, commandes et administration pour vendre en ligne." },
        software: { title: "Logiciels de gestion", text: "Applications métiers pour structurer vos opérations quotidiennes." },
        erp: { title: "Solutions ERP", text: "Un ERP adapté à vos processus : ventes, stocks, achats et clients." },
        booking: { title: "Réservation en ligne", text: "Parcours de réservation, disponibilités et suivi centralisé des demandes." },
        database: { title: "Bases de données", text: "Conception, modélisation, optimisation et administration de vos données." },
        bi: { title: "Business Intelligence", text: "Data Warehouse, ETL et tableaux de bord décisionnels." },
        maintenance: { title: "Maintenance & évolution", text: "Correction, amélioration continue et accompagnement des utilisateurs." }
      }
    },
    experience: {
      label: "Parcours",
      title: "Une expérience concrète, du besoin à la production.",
      subtitle: "Développement, administration technique, relation utilisateur et coordination de projets : un parcours orienté terrain.",
      jobs: {
        bsm: {
          type: "Expérience professionnelle",
          place: "Sfax, Tunisie",
          role: "Responsable technique & Développeur du site e-commerce",
          org: "Société BSM · Vente en gros d'accessoires GSM et informatiques",
          bullets: ["Analyse des besoins de l'entreprise et conception d'une solution e-commerce adaptée à son activité.", "Développement de la plateforme : interfaces, fonctionnalités et gestion des données.", "Administration technique : hébergement, base de données, mises à jour et maintenance.", "Gestion du catalogue produits et suivi des commandes.", "Diagnostic et résolution des incidents ; assistance aux utilisateurs et aux clients.", "Suivi des performances et des aspects liés à la sécurité du site."]
        },
        ider: {
          type: "Expérience associative",
          place: "Sfax, Tunisie",
          role: "Responsable du département Marketing Digital",
          org: "Ider Club — ISGIS Sfax",
          bullets: ["Coordination de l'équipe et suivi des projets du département.", "Participation à l'élaboration des stratégies de communication digitale.", "Gestion et animation des réseaux sociaux du club.", "Création de contenus graphiques et audiovisuels, dont des montages vidéo.", "Participation aux campagnes de communication et aux activités promotionnelles."]
        }
      }
    },
    education: {
      title: "Formation",
      certsTitle: "Certifications & formations",
      languagesTitle: "Langues",
      interestsTitle: "Centres d'intérêt",
      degrees: {
        licence: { period: "2022 — 2025", title: "Licence nationale en Informatique de Gestion — Business Intelligence", school: "ISGIS · Sfax" },
        engineering: { period: "2025 — 2027 · en cours", title: "Cycle ingénieur — Intelligence Artificielle & Data Science", school: "IIT · Sfax" },
        bac: { period: "2021", title: "Baccalauréat Économie & Gestion", school: "Lycée Taieb El Mhiri · Sfax" }
      },
      certs: ["Laboratoire Tripartite d'Innovation — Design Thinking, Lean Startup, Lean Canvas & Pitching", "Certification Microsoft Office 365", "Formation en montage vidéo — Adobe Premiere Pro"],
      languages: { ar: "Arabe", fr: "Français", en: "Anglais" },
      levels: { native: "Langue maternelle", fluent: "Courant" },
      interests: ["Entrepreneuriat", "Création de contenu digital"]
    },
    contact: {
      label: "Contact",
      title: "Parlons de votre prochain projet.",
      subtitle: "Vous avez un projet informatique ? Discutons de votre besoin et construisons ensemble une solution adaptée.",
      infoTitle: "Restons en contact",
      infoText: "Disponible pour échanger sur votre projet, votre besoin ou une collaboration.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      whatsappText: "Discuter sur WhatsApp",
      whatsappMessage: "Bonjour Alaa, je souhaite discuter d'un projet.",
      locationLabel: "Localisation",
      cvTitle: "Mon CV en PDF",
      cvText: "Parcours, compétences et expériences en un document prêt à partager.",
      qrText: "Scanner pour ouvrir le portfolio",
      qrAlt: "QR code vers le portfolio d'Alaa Dhouib",
      formTitle: "Décrivez votre besoin",
      formText: "Quelques lignes suffisent pour démarrer la discussion."
    },
    form: {
      name: "Nom complet",
      namePlaceholder: "Votre nom",
      email: "Adresse email",
      emailPlaceholder: "vous@entreprise.com",
      subject: "Sujet",
      subjectPlaceholder: "Site web, ERP, application métier…",
      message: "Message",
      messagePlaceholder: "Décrivez votre projet, vos objectifs et vos contraintes…",
      submit: "Envoyer le message",
      sending: "Préparation du message…",
      privacy: "Vos informations sont utilisées uniquement pour répondre à votre demande.",
      required: "Ce champ est requis.",
      invalidEmail: "Saisissez une adresse email valide.",
      shortMessage: "Votre message doit contenir au moins 10 caractères.",
      success: "Votre message est prêt. Votre logiciel de messagerie va s'ouvrir pour finaliser l'envoi.",
      successEndpoint: "Message envoyé. Merci — je vous réponds dès que possible.",
      error: "L'envoi a échoué. Vous pouvez m'écrire directement à dhouib.alaa@gmail.com.",
      copied: "Adresse email copiée dans le presse-papiers.",
      copyError: "Copie impossible — écrivez à dhouib.alaa@gmail.com.",
      demoPrefix: "Démonstration — ",
      projectPrefix: "Projet — ",
      generalSubject: "Nouveau projet informatique"
    },
    footer: {
      tagline: "Développeur Informatique · Full Stack Developer · Solutions Logicielles",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      source: "Code source du portfolio"
    },
    dialog: {
      caseStudy: "Étude de cas",
      contact: "Discuter de ce projet"
    }
  });
})();
