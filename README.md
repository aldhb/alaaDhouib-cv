# Portfolio — Alaa Dhouib

Portfolio statique de **Alaa Dhouib**, développeur informatique à Sfax.
Site en trois langues (français, anglais, arabe avec RTL), sans framework ni étape de build : HTML, CSS et JavaScript natifs.

**En ligne :** [aldhb.github.io/alaaDhouib-cv](https://aldhb.github.io/alaaDhouib-cv/)

---

## Aperçu

- Design premium clair, thème sombre optionnel, entièrement responsive.
- Hero avec photo, trois appels à l'action et liens GitHub / email.
- Sections : À propos, Compétences, 4 projets détaillés, Services, Expérience & formation, Contact.
- Fiches projet en fenêtre modale (étude de cas, fonctionnalités, technologies, statut).
- Formulaire de contact avec validation, protection anti-spam et envoi par email ou backend.
- FR / EN / AR avec détection de la langue, persistance et mise en page RTL.
- Accessibilité : lien d'évitement, navigation clavier, focus visible, `prefers-reduced-motion`, styles d'impression.

## Structure

```
.
├── index.html                 # Page unique (contenu, métadonnées, JSON-LD)
├── cv.pdf                     # CV téléchargeable
├── assets/
│   ├── css/styles.css         # Design system, responsive, RTL, thème sombre, impression
│   ├── js/
│   │   ├── i18n.js            # Moteur de traduction
│   │   ├── lang-fr.js         # Dictionnaire français
│   │   ├── lang-en.js         # Dictionnaire anglais
│   │   ├── lang-ar.js         # Dictionnaire arabe
│   │   └── main.js            # Thème, navigation, modale, formulaire
│   └── img/
│       ├── alaa-dhouib.jpg    # Portrait optimisé
│       ├── og-cover.jpg       # Image de partage 1200 × 630
│       ├── portfolio-qr.png   # QR code du portfolio
│       └── favicon.svg
└── photo.jpg, qrcode-cv.png   # Fichiers sources d'origine (non utilisés par la page)
```

## Prévisualisation locale

Aucune dépendance n'est nécessaire. Depuis le dossier du projet :

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Puis ouvrir <http://127.0.0.1:4173/>.

> Un simple double-clic sur `index.html` fonctionne aussi, mais un serveur local est préférable pour tester le chargement des polices et les liens.

## Formulaire de contact

Par défaut, le formulaire **ouvre le logiciel de messagerie** du visiteur avec un email prérempli vers `dhouib.alaa@gmail.com`. Aucun serveur n'est requis.

Pour recevoir les messages directement, sans passer par le client mail, utilisez un service compatible Formspree (ou équivalent) :

1. Créez un formulaire sur [formspree.io](https://formspree.io/) et récupérez son URL (`https://formspree.io/f/xxxxxxxx`).
2. Ouvrez `index.html` et renseignez l'attribut `data-endpoint` du formulaire :

```html
<form id="contact-form" class="contact-form" novalidate
      data-endpoint="https://formspree.io/f/xxxxxxxx">
```

Le formulaire envoie alors un `POST` multipart avec les champs `name`, `email`, `subject`, `message` (et `company`, le piège anti-spam). En cas de succès, le formulaire est réinitialisé et un message de confirmation s'affiche ; en cas d'erreur, un message invite à réessayer.

- Le champ `#cf-company` est un honeypot : le laisser vide et masqué.
- Les messages de validation, de succès et d'erreur sont traduits dans les trois langues.
- Pour revenir au mode `mailto:`, laissez `data-endpoint=""`.

## Langues

Les traductions sont séparées par langue dans `assets/js/lang-*.js`. Chaque fichier appelle `I18N.register(...)` et reprend la même arborescence de clés.

- Ajouter une clé dans **les trois fichiers** pour éviter le repli silencieux vers le français.
- Les éléments traduits utilisent `data-i18n`, `data-i18n-aria-label`, `data-i18n-placeholder`, `data-i18n-alt` ou `data-list` (listes dynamiques).
- La langue est mémorisée dans `localStorage` et peut être forcée par l'URL : `?lang=fr`, `?lang=en`, `?lang=ar`.
- L'arabe active automatiquement `dir="rtl"`. Les styles utilisent des propriétés logiques (`margin-inline`, `inset-inline`) pour rester symétriques.

## Projets

Les quatre cartes sont alimentées par les dictionnaires (`projects.items.ecommerce`, `booking`, `erp`, `bi`) et la fenêtre modale est remplie à partir des mêmes données.

Les liens de démonstration et de code source sont volontairement absents : aucun projet ne dispose aujourd'hui d'une démo publique ou d'un dépôt public. Les statuts affichés sont donc ceux communiqués :

| Projet | Statut |
| --- | --- |
| Plateforme e-commerce — Société BSM | En production |
| Plateforme de réservation | Réalisé · démo privée |
| ERP pour boutiques GSM & accessoires | En développement |
| Data Warehouse & BI — WideWorldImporters | Projet réalisé |

Lorsqu'une démo ou un dépôt public sera disponible, ajoutez un lien dans `.project-actions` de la carte concernée et, si utile, dans `.dialog-actions` de `#project-dialog`. Utilisez les mêmes classes (`btn btn-ghost btn-sm`) pour conserver l'alignement.

## Ajouter LinkedIn

LinkedIn n'est pas renseigné, car aucun profil public n'a été fourni. Pour l'ajouter :

1. Ajoutez une icône dans le sprite SVG en haut de `index.html`, par exemple `i-linkedin`.
2. Ajoutez le lien dans le hero (`.hero-meta`), dans les cartes de contact (`.contact-cards`) et/ou dans le pied de page (`.footer-socials`).

Exemple de lien :

```html
<a href="https://www.linkedin.com/in/VOTRE-PROFIL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <svg class="icon" aria-hidden="true"><use href="#i-linkedin"></use></svg>
</a>
```

Pensez à mettre à jour `sameAs` dans le JSON-LD (`index.html`) et le texte du README.

## CV, photo et QR code

- Le bouton « Télécharger mon CV » pointe vers `cv.pdf` avec l'attribut `download`.
- Pour remplacer la photo, écrasez `assets/img/alaa-dhouib.jpg` en conservant un cadrage carré (environ 1000 × 1000 px, optimisé).
- Le QR code du portfolio pointe vers le site déployé. S'il change de domaine, régénérez `assets/img/portfolio-qr.png`.
- `photo.jpg` et `qrcode-cv.png` sont les originaux fournis ; ils ne sont pas chargés par la page.

## Déploiement — GitHub Pages

Le site est publié depuis la branche `main` du dépôt [aldhb/alaaDhouib-cv](https://github.com/aldhb/alaaDhouib-cv).

1. Poussez les fichiers à la racine du dépôt.
2. Dans **Settings → Pages**, sélectionnez la branche `main` et le dossier `/ (root)`.
3. Le site est servi à l'adresse `https://aldhb.github.io/alaaDhouib-cv/`.

Toutes les ressources sont référencées en chemins relatifs ; le site fonctionne donc aussi dans un sous-dossier. Si le domaine change, mettez à jour :

- `<link rel="canonical">` et les liens `hreflang` ;
- les balises Open Graph / Twitter (`og:url`, `og:image`, `twitter:image`) ;
- `url` et `image` du JSON-LD ;
- le QR code et, si besoin, `README.md`.

## Notes techniques

- **Aucune dépendance JavaScript**, aucune compilation. Les polices (Inter, Sora, Tajawal) sont chargées depuis Google Fonts.
- **Thème** : clair par défaut, sombre mémorisé dans `localStorage.theme`.
- **Animations** : apparition au défilement via `IntersectionObserver`, désactivée si `prefers-reduced-motion`.
- **Impression** : les sections masquées par les animations sont rendues visibles, la navigation et les boutons sont retirés.
- **Référencement** : titre et description mis à jour selon la langue, données structurées `Person`, image de partage 1200 × 630.
- **Numéros de téléphone** : encadrés par `dir="ltr"` pour un affichage correct en arabe.

## Vérifications effectuées

- 4 projets, 8 services, 6 cartes de compétences, 1 seul `h1`.
- Aucun débordement horizontal de 1440 px à 360 px, dans les trois langues.
- Bascule FR / EN / AR, attribut `dir="rtl"`, persistance et paramètre `?lang=`.
- Menu mobile, modale projet, validation du formulaire, thème sombre.
- Envoi simulé vers un endpoint (succès + réinitialisation) et repli `mailto:`.
- `cv.pdf`, le QR code et la photo répondent en HTTP 200 ; aucune erreur console.
