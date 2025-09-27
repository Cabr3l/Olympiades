# 🏆 Site Web des Olympiades Mathématiques et Physique

## 📋 Description

Site web complet pour l'organisation des Olympiades Mathématiques et Physique destinées aux étudiants de Licence 1 et 2 au Cameroun. Le site propose une plateforme moderne et responsive pour l'inscription, la gestion des épreuves et le suivi des participants.

## 🎨 Design et Couleurs

- **Couleurs dominantes** : Vert, Rouge, Jaune
- **Style** : Moderne, professionnel, non surbrillant
- **Responsive** : Adapté mobile, tablette et desktop
- **Framework** : React.js avec Styled Components

## 🚀 Accès au Site

### Développement
```bash
cd olympiades-site
npm start
```
- **Local** : http://localhost:3000
- **Réseau** : http://192.168.96.68:3000

### Production
```bash
npm run build
npm install -g serve
serve -s build
```

## 🔐 Accès à la Page Admin

### URL d'accès
```
http://localhost:3000/admin
```

### Fonctionnalités Admin
- **Tableau de bord** avec statistiques clés
- **Métriques** : Participants actifs, taux de satisfaction, revenus potentiels
- **Graphiques** : Évolution des inscriptions, répartition par université
- **Export** : Données et rapports
- **Monétisation** : Analyse des revenus et performance

## 🏗️ Architecture Backend

### Structure des Dossiers
```
src/
├── components/          # Composants réutilisables
│   └── Layout/         # Header, Footer, Layout principal
├── pages/              # Pages de l'application
├── data/               # Données centralisées
│   └── siteData.js     # Configuration et contenu
├── styles/             # Thème et styles globaux
│   ├── theme.js        # Palette de couleurs et variables
│   └── GlobalStyles.js # Styles CSS globaux
└── utils/              # Utilitaires et helpers
```

### Gestion des Données

#### Fichier Central : `src/data/siteData.js`
Toutes les données du site sont centralisées dans ce fichier pour faciliter la maintenance :

```javascript
export const siteConfig = {
  title: "Olympiades Mathématiques et Physique",
  contact: { email, phone, address },
  social: { facebook, twitter, linkedin }
};

export const aboutData = {
  history: { title, content },
  values: { title, values: [...] },
  sponsors: { title, sponsors: [...] }
};

export const testData = {
  mathematics: { subjects: [...] },
  physics: { subjects: [...] }
};

export const programData = {
  currentYear: 2025,
  schedule: { "2025": { phases: [...] } }
};
```

### Système de Thème

#### Configuration : `src/styles/theme.js`
```javascript
export const theme = {
  colors: {
    primary: { green, lightGreen, darkGreen },
    secondary: { red, lightRed, darkRed },
    accent: { yellow, lightYellow, darkYellow },
    neutral: { white, gray50-900 }
  },
  spacing: { xs, sm, md, lg, xl, '2xl', '3xl' },
  breakpoints: { mobile, tablet, desktop, wide },
  shadows: { sm, md, lg, xl, '2xl' }
};
```

### Composants Styled

Tous les composants utilisent Styled Components avec le thème :
```javascript
const StyledComponent = styled.div`
  color: ${theme.colors.primary.green};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;
```

## 📱 Pages et Fonctionnalités

### 1. Page d'Accueil (`/`)
- **Hero section** avec call-to-action
- **Statistiques** des années précédentes
- **Fonctionnalités** principales
- **Design** : Gradient vert-jaune

### 2. À Propos (`/about`)
- **Histoire** des Olympiades
- **Valeurs** de l'organisation
- **Sponsors** et partenaires
- **Contact** et informations

### 3. Épreuves (`/tests`)
- **Mathématiques** et **Physique**
- **Sujets** des années précédentes
- **Simulation** d'épreuves
- **Téléchargement** des documents

### 4. Inscriptions (`/registration`)
- **Formulaire** complet d'inscription
- **Validation** des données
- **Redirection** vers l'espace participant
- **Gestion** des erreurs

### 5. Programme (`/program`)
- **Timeline** interactive 2025
- **Phases** détaillées
- **Dates** importantes
- **Statuts** des événements

### 6. Résultats (`/results`)
- **Lauréats** des années précédentes
- **Classements** par matière
- **Universités** participantes
- **Statistiques** de participation

### 7. Galerie (`/gallery`)
- **Photos** des événements
- **Moments** marquants
- **Cérémonies** et remises de prix
- **Interface** moderne

### 8. Espace Participant (`/participant`)
- **Simulation** d'épreuves
- **Tests** en ligne
- **Résultats** personnels
- **Analyse** de performance

### 9. Administration (`/admin`)
- **Tableau de bord** avancé
- **Métriques** en temps réel
- **Graphiques** interactifs
- **Export** de données

## 🔧 Configuration et Déploiement

### Variables d'Environnement
Créer un fichier `.env` :
```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ADMIN_EMAIL=admin@olympiades.cm
REACT_APP_ANALYTICS_ID=GA_TRACKING_ID
```

### Scripts Disponibles
```bash
npm start          # Développement
npm run build      # Production
npm test           # Tests
npm run eject      # Eject (irréversible)
```

### Dépendances Principales
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "styled-components": "^5.3.6",
  "lucide-react": "^0.263.1",
  "framer-motion": "^10.0.0",
  "recharts": "^2.5.0"
}
```

## 📊 Fonctionnalités Backend Avancées

### Gestion des Utilisateurs
- **Inscription** avec validation
- **Authentification** (à implémenter)
- **Profils** utilisateurs
- **Historique** des épreuves

### Système d'Épreuves
- **Création** de sujets
- **Gestion** des questions
- **Correction** automatique
- **Notation** et classement

### Analytics et Reporting
- **Métriques** de performance
- **Statistiques** d'utilisation
- **Rapports** personnalisés
- **Export** de données

### Monétisation
- **Analyse** des revenus
- **Partenariats** sponsorisés
- **Publicité** ciblée
- **Abonnements** premium

## 🛠️ Maintenance et Évolution

### Ajout de Contenu
1. Modifier `src/data/siteData.js`
2. Redémarrer le serveur de développement
3. Vérifier l'affichage

### Modification du Design
1. Ajuster `src/styles/theme.js`
2. Modifier les composants si nécessaire
3. Tester la responsivité

### Ajout de Pages
1. Créer le composant dans `src/pages/`
2. Ajouter la route dans `src/App.js`
3. Mettre à jour la navigation

## 📞 Support et Contact

- **Email** : contact@olympiades.cm
- **Téléphone** : +237 XXX XX XX XX
- **Adresse** : Université de Yaoundé I, Cameroun

## 📄 Licence

© 2025 Olympiades Mathématiques et Physique. Tous droits réservés.

---

**Développé avec ❤️ pour promouvoir l'excellence académique au Cameroun**