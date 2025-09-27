# 📚 Documentation Technique - Site Olympiades

## 🎯 Vue d'ensemble

Ce document détaille l'architecture technique, les flux de données et les fonctionnalités backend du site des Olympiades Mathématiques et Physique.

## 🏗️ Architecture Technique

### Stack Technologique
- **Frontend** : React 18.2.0
- **Styling** : Styled Components 5.3.6
- **Routing** : React Router DOM 6.8.0
- **Icons** : Lucide React 0.263.1
- **Animations** : Framer Motion 10.0.0
- **Charts** : Recharts 2.5.0
- **Build** : Create React App

### Structure des Données

#### 1. Configuration du Site (`siteConfig`)
```javascript
{
  title: "Olympiades Mathématiques et Physique",
  subtitle: "Défiez vos limites, explorez l'excellence académique",
  description: "Compétition académique d'excellence...",
  contact: {
    email: "contact@olympiades.cm",
    phone: "+237 XXX XX XX XX",
    address: "Université de Yaoundé I, Cameroun"
  },
  social: {
    facebook: "https://facebook.com/olympiades-cm",
    twitter: "https://twitter.com/olympiades_cm",
    linkedin: "https://linkedin.com/company/olympiades-cm"
  }
}
```

#### 2. Données des Épreuves (`testData`)
```javascript
{
  mathematics: {
    subjects: [
      {
        id: 1,
        title: "Algèbre Linéaire",
        duration: "2h30",
        difficulty: "Licence 1",
        topics: ["Espaces vectoriels", "Matrices", "Déterminants"],
        description: "Épreuve d'algèbre linéaire..."
      }
    ]
  },
  physics: {
    subjects: [
      {
        id: 4,
        title: "Mécanique",
        duration: "2h30",
        difficulty: "Licence 1",
        topics: ["Cinématique", "Dynamique", "Énergie"],
        description: "Épreuve de mécanique classique..."
      }
    ]
  }
}
```

#### 3. Programme et Planning (`programData`)
```javascript
{
  currentYear: 2025,
  schedule: {
    "2025": {
      phases: [
        {
          name: "Inscriptions",
          startDate: "15 Janvier 2025",
          endDate: "28 Février 2025",
          description: "Période d'inscription en ligne...",
          status: "upcoming"
        }
      ]
    }
  }
}
```

## 🔄 Flux de Données

### 1. Initialisation de l'Application
```
index.js → App.js → ThemeProvider → GlobalStyles → Layout → Routes
```

### 2. Navigation et Routing
```
BrowserRouter → Routes → Route → Page Component
```

### 3. Gestion des États
- **État local** : useState pour les composants
- **Props** : Passage de données entre composants
- **Context** : ThemeProvider pour le thème global

### 4. Styling et Thème
```
theme.js → StyledComponent → CSS-in-JS → Rendu
```

## 🎨 Système de Design

### Palette de Couleurs
```javascript
// Couleurs principales
primary: {
  green: '#059669',      // Vert principal
  lightGreen: '#10b981', // Vert clair
  darkGreen: '#047857'   // Vert foncé
}

// Couleurs secondaires
secondary: {
  red: '#dc2626',        // Rouge
  lightRed: '#ef4444',   // Rouge clair
  darkRed: '#b91c1c'     // Rouge foncé
}

// Couleurs d'accent
accent: {
  yellow: '#eab308',     // Jaune
  lightYellow: '#facc15', // Jaune clair
  darkYellow: '#ca8a04'  // Jaune foncé
}
```

### Système de Spacing
```javascript
spacing: {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem'     // 64px
}
```

### Breakpoints Responsive
```javascript
breakpoints: {
  mobile: '768px',   // Mobile
  tablet: '1024px',  // Tablette
  desktop: '1280px', // Desktop
  wide: '1536px'     // Large screens
}
```

## 🔐 Système d'Authentification (À Implémenter)

### Structure Proposée
```javascript
// Context d'authentification
const AuthContext = createContext();

// Hook personnalisé
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Types d'utilisateurs
const USER_TYPES = {
  STUDENT: 'student',
  ADMIN: 'admin',
  TEACHER: 'teacher'
};
```

### Gestion des Sessions
```javascript
// Stockage local
localStorage.setItem('authToken', token);
localStorage.setItem('userData', JSON.stringify(userData));

// Vérification d'authentification
const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token && !isTokenExpired(token);
};
```

## 📊 Système d'Analytics

### Métriques Trackées
```javascript
const analytics = {
  pageViews: {
    home: 0,
    about: 0,
    tests: 0,
    registration: 0,
    program: 0,
    results: 0,
    gallery: 0,
    participant: 0,
    admin: 0
  },
  userInteractions: {
    formSubmissions: 0,
    testStarts: 0,
    downloads: 0,
    socialClicks: 0
  },
  performance: {
    averageLoadTime: 0,
    bounceRate: 0,
    conversionRate: 0
  }
};
```

### Intégration Google Analytics
```javascript
// Configuration GA4
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

// Fonction de tracking
const trackEvent = (action, category, label, value) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
```

## 🗄️ Gestion des Données

### Structure de Base de Données Proposée

#### Table Users
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  university VARCHAR(255) NOT NULL,
  level ENUM('L1', 'L2') NOT NULL,
  field ENUM('Mathématiques', 'Physique', 'Les deux') NOT NULL,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Table Tests
```sql
CREATE TABLE tests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  subject ENUM('math', 'physics') NOT NULL,
  level ENUM('L1', 'L2') NOT NULL,
  duration INT NOT NULL, -- en minutes
  difficulty ENUM('Facile', 'Moyen', 'Difficile') NOT NULL,
  topics JSON,
  questions JSON,
  max_score INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Table Test_Results
```sql
CREATE TABLE test_results (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  test_id INT NOT NULL,
  score INT NOT NULL,
  max_score INT NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  answers JSON,
  time_spent INT NOT NULL, -- en minutes
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (test_id) REFERENCES tests(id)
);
```

## 🔧 API Endpoints (À Implémenter)

### Authentification
```javascript
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET  /api/auth/me
```

### Utilisateurs
```javascript
GET    /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
GET    /api/users/:id/results
```

### Épreuves
```javascript
GET    /api/tests
GET    /api/tests/:id
POST   /api/tests
PUT    /api/tests/:id
DELETE /api/tests/:id
POST   /api/tests/:id/submit
```

### Résultats
```javascript
GET    /api/results
GET    /api/results/:id
GET    /api/results/user/:userId
GET    /api/results/test/:testId
```

### Administration
```javascript
GET    /api/admin/stats
GET    /api/admin/analytics
GET    /api/admin/export
POST   /api/admin/notifications
```

## 🚀 Déploiement et Production

### Configuration de Production
```javascript
// .env.production
REACT_APP_API_URL=https://api.olympiades.cm
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
REACT_APP_ENVIRONMENT=production
```

### Build et Optimisation
```bash
# Build de production
npm run build

# Analyse du bundle
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js

# Test de performance
npm install -g lighthouse
lighthouse http://localhost:3000 --output html
```

### Déploiement sur Serveur
```bash
# Installation des dépendances
npm install --production

# Build de production
npm run build

# Serveur statique
npm install -g serve
serve -s build -l 3000

# Avec PM2 pour la production
npm install -g pm2
pm2 start "serve -s build -l 3000" --name olympiades-site
```

## 🔒 Sécurité

### Mesures de Sécurité Implémentées
- **Validation** des formulaires côté client
- **Sanitisation** des entrées utilisateur
- **HTTPS** obligatoire en production
- **CORS** configuré correctement

### Mesures à Implémenter
- **Authentification** JWT
- **Validation** côté serveur
- **Rate limiting** pour les API
- **Chiffrement** des données sensibles
- **Backup** régulier des données

## 📈 Monitoring et Maintenance

### Logs et Monitoring
```javascript
// Configuration des logs
const logger = {
  info: (message, data) => console.log(`[INFO] ${message}`, data),
  error: (message, error) => console.error(`[ERROR] ${message}`, error),
  warn: (message, data) => console.warn(`[WARN] ${message}`, data)
};
```

### Métriques de Performance
- **Core Web Vitals** : LCP, FID, CLS
- **Temps de chargement** des pages
- **Taux de conversion** des formulaires
- **Taux d'erreur** des API

### Maintenance Préventive
- **Mise à jour** régulière des dépendances
- **Tests** automatisés
- **Backup** quotidien des données
- **Monitoring** 24/7

## 🎯 Roadmap Technique

### Phase 1 : Fonctionnalités de Base ✅
- [x] Interface utilisateur
- [x] Navigation et routing
- [x] Système de thème
- [x] Responsive design

### Phase 2 : Backend et API (À Implémenter)
- [ ] API REST avec Node.js/Express
- [ ] Base de données PostgreSQL
- [ ] Authentification JWT
- [ ] Upload de fichiers

### Phase 3 : Fonctionnalités Avancées
- [ ] Système de tests en ligne
- [ ] Correction automatique
- [ ] Analytics avancées
- [ ] Notifications push

### Phase 4 : Optimisation et Scale
- [ ] Cache Redis
- [ ] CDN pour les assets
- [ ] Load balancing
- [ ] Monitoring avancé

---

**Documentation mise à jour le : 20 Septembre 2025**
**Version : 1.0.0**
**Auteur : Assistant IA**
