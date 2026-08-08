# Site Web AGRI-TOGO

Site vitrine pour la coopérative agricole AGRI-TOGO, développé dans le cadre du projet pédagogique Simplon.

## Structure du projet

```
Brief/
├── index.html              # Page d'accueil
├── css/
│   └── style.css          # Feuille de style principale
├── js/
│   └── script.js          # JavaScript principal
├── images/
│   ├── logo.png           # Logo de la coopérative
│   ├── news1.jpg          # Image actualité 1
│   ├── news2.jpg          # Image actualité 2
│   ├── news3.jpg          # Image actualité 3
│   ├── news4.jpg          # Image actualité 4
│   ├── news5.jpg          # Image actualité 5
│   ├── news6.jpg          # Image actualité 6
│   ├── mais.jpg           # Image produit maïs
│   ├── manioc.jpg         # Image produit manioc
│   ├── ananas.jpg         # Image produit ananas
│   ├── baniere.jpg        # Image baniere
│   ├── gari.jpg           # Image produit gari
│   ├── farine-manioc.jpg  # Image produit farine de manioc
│   ├── jus-ananas.jpg     # Image produit jus d'ananas
│   ├── farine-mais.jpg    # Image produit farine de maïs
│   └── mais-grain.jpg     # Image produit maïs grain
├── pages/
│   ├── a-propos.html      # Page À propos
│   ├── nos-produits.html  # Page Nos produits
│   ├── actualites.html    # Page Actualités
│   └── contact.html       # Page Contact
└── README.md              # Ce fichier
└── FICHE_REPARTITION.md   # Fiche de répartition des tâches
└── Soutenance AGRI-TOGO.pptx      # Support de présentation
```

## Fonctionnalités implémentées

### Fonctionnalités essentielles (obligatoires)
- Menu de navigation responsive avec menu hamburger sur mobile
- Formulaire de contact avec validation JavaScript
- Galerie/carrousel d'images sur la page "Nos produits"
- Mise en page entièrement responsive (mobile, tablette, ordinateur)

### Fonctionnalités bonus (facultatives)
- Filtrage dynamique des produits par catégorie
- Animations au défilement (scroll reveal)
- Bouton de bascule mode sombre / mode clair
- Animation des chiffres (counter animation)
- Navigation active selon la page courante

## Pages du site

1. **Accueil** (`index.html`)
   - Bannière de présentation avec slogan
   - Chiffres clés (membres, régions, produits)
   - Aperçu des 3 dernières actualités
   - Appel à l'action vers la page Contact

2. **À propos** (`pages/a-propos.html`)
   - Histoire et mission de la coopérative
   - Valeurs (Solidarité, Qualité, Durabilité, Transparence)
   - Présentation des membres
   - Zone géographique d'action

3. **Nos produits** (`pages/nos-produits.html`)
   - Galerie de produits avec filtres par catégorie
   - Carrousel de navigation
   - 8 produits : maïs, manioc, ananas, gari, farines, jus

4. **Actualités** (`pages/actualites.html`)
   - Liste d'articles et événements
   - 6 actualités avec dates, titres, images et extraits

5. **Contact** (`pages/contact.html`)
   - Formulaire de contact avec validation
   - Coordonnées de la coopérative
   - Informations de contact

## Technologies utilisées

- **HTML5** : Structure sémantique du site
- **CSS3** : Mise en page avec Flexbox et Grid, responsive design
- **JavaScript natif** : Interactivité sans framework
- **Aucune librairie externe** : Respect des contraintes techniques

## Comment utiliser le site

### Ouvrir le site localement
1. Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur

### Tester la responsivité
- Utilisez les outils de développement de votre navigateur (F12)
- Testez différentes tailles d'écran : mobile (375px), tablette (768px), desktop (1200px)
- Vérifiez le menu hamburger sur mobile

### Tester les fonctionnalités JavaScript
1. **Menu hamburger** : Redimensionnez la fenêtre à < 768px et cliquez sur le menu
2. **Formulaire de contact** : Essayez de soumettre le formulaire avec des champs vides ou invalides
3. **Carrousel produits** : Naviguez entre les produits avec les boutons
4. **Filtrage produits** : Cliquez sur les boutons de filtre par catégorie
5. **Mode sombre** : Cliquez sur le bouton 🌙 en bas à droite

## Images

Les images actuelles sont des placeholders. Pour le projet final :
1. Téléchargez des images libres de droits depuis Unsplash, Pexels ou Freepik
2. Remplacez les fichiers dans le dossier `images/`
3. Utilisez des images cohérentes avec le thème agricole africain

## Validation du code

### HTML
- Utilisez le validateur W3C : https://validator.w3.org
- Vérifiez la sémantique HTML5

### CSS
- Vérifiez la syntaxe CSS
- Testez la compatibilité navigateur

### JavaScript
- Ouvrez la console du navigateur (F12) pour vérifier les erreurs
- Testez toutes les fonctionnalités interactives

## Personnalisation

### Couleurs
Modifiez les variables CSS dans `css/style.css` :
```css
:root {
    --primary-color: #2E7D32;
    --secondary-color: #4CAF50;
    --accent-color: #FFC107;
    /* ... */
}
```

**Développé dans le cadre du projet pédagogique Simplon - 2026**