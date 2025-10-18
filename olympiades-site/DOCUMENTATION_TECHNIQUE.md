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
- **Base de Données** : MariaDB 10.3+
- **SGBD** : MySQL/MariaDB avec schéma relationnel optimisé

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

### Architecture de Base de Données

Le système utilise **MariaDB** comme système de gestion de base de données relationnelle, avec un schéma optimisé pour la gestion des épreuves, utilisateurs et résultats.

#### Configuration de la Base de Données
```sql
-- Base de données
CREATE DATABASE olympiades_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

### Schéma de Base de Données Complet

#### 1. Table Utilisateur
```sql
CREATE TABLE Utilisateur (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(100) NOT NULL,
    Prenom VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Telephone VARCHAR(20),
    Niveau_etudes ENUM('L1', 'L2') NOT NULL,
    Domaine_etudes ENUM('Maths', 'Physique') NOT NULL,
    Domaine_application ENUM('Maths', 'Physique', 'Maths et Physique') NOT NULL,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE
);
```

#### 2. Table Epreuve
```sql
CREATE TABLE Epreuve (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Theme_aborde ENUM('maths', 'physique') NOT NULL,
    Description TEXT,
    Date_epreuve DATE NOT NULL,
    Difficulte ENUM('Facile', 'Moyen', 'Difficile') NOT NULL,
    Temps INT NOT NULL COMMENT 'Durée en minutes',
    Type_epreuve ENUM('Entrainement', 'Evaluation') NOT NULL,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE
);
```

#### 3. Table Exercice
```sql
CREATE TABLE Exercice (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Epreuve_id INT NOT NULL,
    Titre VARCHAR(255),
    Description TEXT,
    Ordre INT NOT NULL DEFAULT 1,
    Points INT NOT NULL DEFAULT 1,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (Epreuve_id) REFERENCES Epreuve(Id) ON DELETE CASCADE
);
```

#### 4. Table QCM (Questions à Choix Multiples)
```sql
CREATE TABLE QCM (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Exercice_id INT NOT NULL,
    Question TEXT NOT NULL,
    Option_A VARCHAR(500),
    Option_B VARCHAR(500),
    Option_C VARCHAR(500),
    Option_D VARCHAR(500),
    Option_E VARCHAR(500),
    Reponse_correcte ENUM('A', 'B', 'C', 'D', 'E') NOT NULL,
    Explication TEXT,
    Points INT NOT NULL DEFAULT 1,
    Ordre INT NOT NULL DEFAULT 1,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (Exercice_id) REFERENCES Exercice(Id) ON DELETE CASCADE
);
```

#### 5. Table QRO (Questions à Réponse Ouverte)
```sql
CREATE TABLE QRO (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Exercice_id INT NOT NULL,
    Question TEXT NOT NULL,
    Reponse_attendue TEXT,
    Points INT NOT NULL DEFAULT 1,
    Ordre INT NOT NULL DEFAULT 1,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (Exercice_id) REFERENCES Exercice(Id) ON DELETE CASCADE
);
```

#### 6. Table Traitee (Traitement des épreuves)
```sql
CREATE TABLE Traitee (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Utilisateur_id INT NOT NULL,
    Epreuve_id INT NOT NULL,
    Date_traitement DATE NOT NULL,
    Heure_traitement TIME NOT NULL,
    Note DECIMAL(5,2) DEFAULT 0.00,
    Note_max DECIMAL(5,2) NOT NULL,
    Pourcentage DECIMAL(5,2) GENERATED ALWAYS AS (CASE WHEN Note_max > 0 THEN (Note / Note_max) * 100 ELSE 0 END) STORED,
    Temps_passe INT COMMENT 'Temps passé en minutes',
    Statut ENUM('En cours', 'Termine', 'Abandonne') DEFAULT 'En cours',
    Reponses JSON COMMENT 'Stockage des réponses de l\'utilisateur',
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (Utilisateur_id) REFERENCES Utilisateur(Id) ON DELETE CASCADE,
    FOREIGN KEY (Epreuve_id) REFERENCES Epreuve(Id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_test (Utilisateur_id, Epreuve_id)
);
```

#### 7. Tables de Réponses
```sql
-- Réponses QCM
CREATE TABLE Reponses_QCM (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Traitee_id INT NOT NULL,
    QCM_id INT NOT NULL,
    Reponse_utilisateur ENUM('A', 'B', 'C', 'D', 'E'),
    Est_correcte BOOLEAN GENERATED ALWAYS AS (Reponse_utilisateur = (SELECT Reponse_correcte FROM QCM WHERE Id = QCM_id)) STORED,
    Points_obtenus DECIMAL(5,2) GENERATED ALWAYS AS (CASE WHEN Reponse_utilisateur = (SELECT Reponse_correcte FROM QCM WHERE Id = QCM_id) THEN (SELECT Points FROM QCM WHERE Id = QCM_id) ELSE 0 END) STORED,
    Date_reponse TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Traitee_id) REFERENCES Traitee(Id) ON DELETE CASCADE,
    FOREIGN KEY (QCM_id) REFERENCES QCM(Id) ON DELETE CASCADE,
    UNIQUE KEY unique_traitee_qcm (Traitee_id, QCM_id)
);

-- Réponses QRO
CREATE TABLE Reponses_QRO (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Traitee_id INT NOT NULL,
    QRO_id INT NOT NULL,
    Reponse_utilisateur TEXT,
    Points_obtenus DECIMAL(5,2) DEFAULT 0.00,
    Commentaire_correcteur TEXT,
    Date_reponse TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_correction TIMESTAMP NULL,
    Corrige_par INT NULL,
    FOREIGN KEY (Traitee_id) REFERENCES Traitee(Id) ON DELETE CASCADE,
    FOREIGN KEY (QRO_id) REFERENCES QRO(Id) ON DELETE CASCADE,
    FOREIGN KEY (Corrige_par) REFERENCES Utilisateur(Id) ON DELETE SET NULL,
    UNIQUE KEY unique_traitee_qro (Traitee_id, QRO_id)
);
```

#### 8. Tables de Gestion
```sql
-- Administrateurs
CREATE TABLE Administrateurs (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Utilisateur_id INT NOT NULL,
    Role ENUM('Super Admin', 'Admin', 'Correcteur') NOT NULL,
    Permissions JSON,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (Utilisateur_id) REFERENCES Utilisateur(Id) ON DELETE CASCADE
);

-- Sessions
CREATE TABLE Sessions (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Utilisateur_id INT NOT NULL,
    Token VARCHAR(255) UNIQUE NOT NULL,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_expiration TIMESTAMP NOT NULL,
    IP_address VARCHAR(45),
    User_agent TEXT,
    Actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (Utilisateur_id) REFERENCES Utilisateur(Id) ON DELETE CASCADE
);
```

### Relations et Intégrité des Données

#### Diagramme des Relations
```
Utilisateur (1) ←→ (N) Traitee (N) ←→ (1) Epreuve
Epreuve (1) ←→ (N) Exercice (1) ←→ (N) QCM
Epreuve (1) ←→ (N) Exercice (1) ←→ (N) QRO
Traitee (1) ←→ (N) Reponses_QCM (N) ←→ (1) QCM
Traitee (1) ←→ (N) Reponses_QRO (N) ←→ (1) QRO
```

#### Contraintes d'Intégrité
- **Clés étrangères** avec contraintes CASCADE pour la cohérence
- **Contraintes d'unicité** pour éviter les doublons
- **Champs calculés** pour les pourcentages et points
- **Triggers** pour la mise à jour automatique des notes

### Vues et Procédures Stockées

#### Vues Optimisées
```sql
-- Statistiques des utilisateurs
CREATE VIEW v_stats_utilisateurs AS
SELECT 
    Niveau_etudes,
    Domaine_etudes,
    COUNT(*) as Nombre_utilisateurs,
    COUNT(CASE WHEN Actif = TRUE THEN 1 END) as Utilisateurs_actifs
FROM Utilisateur
GROUP BY Niveau_etudes, Domaine_etudes;

-- Résultats des utilisateurs
CREATE VIEW v_resultats_utilisateurs AS
SELECT 
    u.Id as Utilisateur_id,
    u.Nom,
    u.Prenom,
    u.Email,
    u.Niveau_etudes,
    u.Domaine_etudes,
    e.Id as Epreuve_id,
    e.Theme_aborde,
    e.Type_epreuve,
    t.Note,
    t.Note_max,
    t.Pourcentage,
    t.Date_traitement,
    t.Statut
FROM Utilisateur u
JOIN Traitee t ON u.Id = t.Utilisateur_id
JOIN Epreuve e ON t.Epreuve_id = e.Id
WHERE u.Actif = TRUE AND e.Actif = TRUE;
```

#### Procédures Stockées
```sql
-- Calcul des statistiques d'une épreuve
CREATE PROCEDURE sp_stats_epreuve(IN p_epreuve_id INT)
BEGIN
    SELECT 
        e.Id,
        e.Theme_aborde,
        e.Type_epreuve,
        e.Difficulte,
        COUNT(t.Id) as Nombre_participants,
        AVG(t.Pourcentage) as Moyenne_pourcentage,
        MAX(t.Pourcentage) as Meilleur_score,
        MIN(t.Pourcentage) as Pire_score,
        COUNT(CASE WHEN t.Statut = 'Termine' THEN 1 END) as Participants_termines,
        COUNT(CASE WHEN t.Statut = 'Abandonne' THEN 1 END) as Participants_abandons
    FROM Epreuve e
    LEFT JOIN Traitee t ON e.Id = t.Epreuve_id
    WHERE e.Id = p_epreuve_id
    GROUP BY e.Id, e.Theme_aborde, e.Type_epreuve, e.Difficulte;
END;
```

### Optimisations et Index

#### Index Principaux
- **Index sur les clés étrangères** pour optimiser les jointures
- **Index composites** sur les champs de recherche fréquents
- **Index sur les champs de tri** (dates, noms, etc.)
- **Index sur les champs de filtrage** (statut, niveau, domaine)

#### Performance
- **Champs calculés** pour éviter les calculs en temps réel
- **Triggers** pour maintenir la cohérence des données
- **Contraintes d'unicité** pour éviter les doublons
- **Archivage** des données anciennes

### Détail des Entrées des Tables

#### 1. 🧑‍🎓 Table **Utilisateur**

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de l'utilisateur | Clé primaire, auto-incrémentée |
| `Nom` | `VARCHAR(100) NOT NULL` | **Nom de famille** de l'utilisateur | Obligatoire, max 100 caractères |
| `Prenom` | `VARCHAR(100) NOT NULL` | **Prénom** de l'utilisateur | Obligatoire, max 100 caractères |
| `Email` | `VARCHAR(255) UNIQUE NOT NULL` | **Adresse email** (identifiant de connexion) | Obligatoire, unique, max 255 caractères |
| `Telephone` | `VARCHAR(20)` | **Numéro de téléphone** | Optionnel, max 20 caractères |
| `Niveau_etudes` | `ENUM('L1', 'L2') NOT NULL` | **Niveau d'études** (Licence 1 ou 2) | Obligatoire, valeurs fixes |
| `Domaine_etudes` | `ENUM('Maths', 'Physique') NOT NULL` | **Domaine principal** d'études | Obligatoire, valeurs fixes |
| `Domaine_application` | `ENUM('Maths', 'Physique', 'Maths et Physique') NOT NULL` | **Domaine(s) d'application** pour les olympiades | Obligatoire, peut être les deux |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** du compte | Automatique à la création |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de dernière modification** | Mise à jour automatique |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** du compte | `TRUE` par défaut |

#### 2. 📝 Table **Epreuve**

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de l'épreuve | Clé primaire, auto-incrémentée |
| `Theme_aborde` | `ENUM('maths', 'physique') NOT NULL` | **Thème** de l'épreuve | Obligatoire, valeurs fixes |
| `Description` | `TEXT` | **Description détaillée** de l'épreuve | Optionnel, texte libre |
| `Date_epreuve` | `DATE NOT NULL` | **Date de l'épreuve** | Obligatoire, format date |
| `Difficulte` | `ENUM('Facile', 'Moyen', 'Difficile') NOT NULL` | **Niveau de difficulté** | Obligatoire, valeurs fixes |
| `Temps` | `INT NOT NULL` | **Durée en minutes** | Obligatoire, nombre entier |
| `Type_epreuve` | `ENUM('Entrainement', 'Evaluation') NOT NULL` | **Type d'épreuve** | Obligatoire, valeurs fixes |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de modification** | Mise à jour automatique |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** | `TRUE` par défaut |

#### 3. 📋 Table **Exercice**

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de l'exercice | Clé primaire, auto-incrémentée |
| `Epreuve_id` | `INT NOT NULL` | **Référence à l'épreuve** parente | Clé étrangère vers `Epreuve(Id)` |
| `Titre` | `VARCHAR(255)` | **Titre de l'exercice** | Optionnel, max 255 caractères |
| `Description` | `TEXT` | **Description de l'exercice** | Optionnel, texte libre |
| `Ordre` | `INT NOT NULL DEFAULT 1` | **Ordre d'affichage** dans l'épreuve | Obligatoire, défaut = 1 |
| `Points` | `INT NOT NULL DEFAULT 1` | **Nombre de points** de l'exercice | Obligatoire, défaut = 1 |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de modification** | Mise à jour automatique |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** | `TRUE` par défaut |

#### 4. ❓ Table **QCM** (Questions à Choix Multiples)

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de la question | Clé primaire, auto-incrémentée |
| `Exercice_id` | `INT NOT NULL` | **Référence à l'exercice** parent | Clé étrangère vers `Exercice(Id)` |
| `Question` | `TEXT NOT NULL` | **Texte de la question** | Obligatoire, texte libre |
| `Option_A` | `VARCHAR(500)` | **Option de réponse A** | Optionnel, max 500 caractères |
| `Option_B` | `VARCHAR(500)` | **Option de réponse B** | Optionnel, max 500 caractères |
| `Option_C` | `VARCHAR(500)` | **Option de réponse C** | Optionnel, max 500 caractères |
| `Option_D` | `VARCHAR(500)` | **Option de réponse D** | Optionnel, max 500 caractères |
| `Option_E` | `VARCHAR(500)` | **Option de réponse E** | Optionnel, max 500 caractères |
| `Reponse_correcte` | `ENUM('A', 'B', 'C', 'D', 'E') NOT NULL` | **Lettre de la bonne réponse** | Obligatoire, valeurs fixes |
| `Explication` | `TEXT` | **Explication de la réponse** | Optionnel, texte libre |
| `Points` | `INT NOT NULL DEFAULT 1` | **Points attribués** à la question | Obligatoire, défaut = 1 |
| `Ordre` | `INT NOT NULL DEFAULT 1` | **Ordre d'affichage** dans l'exercice | Obligatoire, défaut = 1 |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de modification** | Mise à jour automatique |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** | `TRUE` par défaut |

#### 5. ✍️ Table **QRO** (Questions à Réponse Ouverte)

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de la question | Clé primaire, auto-incrémentée |
| `Exercice_id` | `INT NOT NULL` | **Référence à l'exercice** parent | Clé étrangère vers `Exercice(Id)` |
| `Question` | `TEXT NOT NULL` | **Texte de la question** | Obligatoire, texte libre |
| `Reponse_attendue` | `TEXT` | **Réponse attendue** (pour correction) | Optionnel, texte libre |
| `Points` | `INT NOT NULL DEFAULT 1` | **Points attribués** à la question | Obligatoire, défaut = 1 |
| `Ordre` | `INT NOT NULL DEFAULT 1` | **Ordre d'affichage** dans l'exercice | Obligatoire, défaut = 1 |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de modification** | Mise à jour automatique |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** | `TRUE` par défaut |

#### 6. 📊 Table **Traitee** (Traitement des épreuves)

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** du traitement | Clé primaire, auto-incrémentée |
| `Utilisateur_id` | `INT NOT NULL` | **Référence à l'utilisateur** | Clé étrangère vers `Utilisateur(Id)` |
| `Epreuve_id` | `INT NOT NULL` | **Référence à l'épreuve** | Clé étrangère vers `Epreuve(Id)` |
| `Date_traitement` | `DATE NOT NULL` | **Date du traitement** | Obligatoire, format date |
| `Heure_traitement` | `TIME NOT NULL` | **Heure du traitement** | Obligatoire, format heure |
| `Note` | `DECIMAL(5,2) DEFAULT 0.00` | **Note obtenue** | Défaut = 0.00, max 999.99 |
| `Note_max` | `DECIMAL(5,2) NOT NULL` | **Note maximale possible** | Obligatoire, max 999.99 |
| `Pourcentage` | `DECIMAL(5,2) GENERATED ALWAYS AS (...)` | **Pourcentage calculé automatiquement** | Champ calculé : (Note/Note_max)*100 |
| `Temps_passe` | `INT` | **Temps passé en minutes** | Optionnel, nombre entier |
| `Statut` | `ENUM('En cours', 'Termine', 'Abandonne') DEFAULT 'En cours'` | **Statut du traitement** | Défaut = 'En cours' |
| `Reponses` | `JSON` | **Réponses de l'utilisateur** (stockage temporaire) | Optionnel, format JSON |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de modification** | Mise à jour automatique |

#### 7. ✅ Table **Reponses_QCM** (Réponses aux QCM)

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de la réponse | Clé primaire, auto-incrémentée |
| `Traitee_id` | `INT NOT NULL` | **Référence au traitement** | Clé étrangère vers `Traitee(Id)` |
| `QCM_id` | `INT NOT NULL` | **Référence à la question QCM** | Clé étrangère vers `QCM(Id)` |
| `Reponse_utilisateur` | `ENUM('A', 'B', 'C', 'D', 'E')` | **Réponse choisie par l'utilisateur** | Optionnel, valeurs fixes |
| `Est_correcte` | `BOOLEAN GENERATED ALWAYS AS (...)` | **Vérification automatique** si correcte | Champ calculé automatiquement |
| `Points_obtenus` | `DECIMAL(5,2) GENERATED ALWAYS AS (...)` | **Points obtenus** (calculés automatiquement) | Champ calculé automatiquement |
| `Date_reponse` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de la réponse** | Automatique |

#### 8. ✍️ Table **Reponses_QRO** (Réponses aux QRO)

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de la réponse | Clé primaire, auto-incrémentée |
| `Traitee_id` | `INT NOT NULL` | **Référence au traitement** | Clé étrangère vers `Traitee(Id)` |
| `QRO_id` | `INT NOT NULL` | **Référence à la question QRO** | Clé étrangère vers `QRO(Id)` |
| `Reponse_utilisateur` | `TEXT` | **Réponse textuelle de l'utilisateur** | Optionnel, texte libre |
| `Points_obtenus` | `DECIMAL(5,2) DEFAULT 0.00` | **Points attribués par le correcteur** | Défaut = 0.00 |
| `Commentaire_correcteur` | `TEXT` | **Commentaire du correcteur** | Optionnel, texte libre |
| `Date_reponse` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de la réponse** | Automatique |
| `Date_correction` | `TIMESTAMP NULL` | **Date de correction** | Optionnel |
| `Corrige_par` | `INT NULL` | **Référence au correcteur** | Clé étrangère vers `Utilisateur(Id)` |

#### 9. 👨‍💼 Table **Administrateurs**

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de l'admin | Clé primaire, auto-incrémentée |
| `Utilisateur_id` | `INT NOT NULL` | **Référence à l'utilisateur** | Clé étrangère vers `Utilisateur(Id)` |
| `Role` | `ENUM('Super Admin', 'Admin', 'Correcteur') NOT NULL` | **Rôle de l'administrateur** | Obligatoire, valeurs fixes |
| `Permissions` | `JSON` | **Permissions détaillées** | Optionnel, format JSON |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_modification` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | **Date de modification** | Mise à jour automatique |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** | `TRUE` par défaut |

#### 10. 🔐 Table **Sessions**

| Champ | Type | Description | Contraintes |
|-------|------|-------------|-------------|
| `Id` | `INT PRIMARY KEY AUTO_INCREMENT` | **Identifiant unique** de la session | Clé primaire, auto-incrémentée |
| `Utilisateur_id` | `INT NOT NULL` | **Référence à l'utilisateur** | Clé étrangère vers `Utilisateur(Id)` |
| `Token` | `VARCHAR(255) UNIQUE NOT NULL` | **Token de session** | Obligatoire, unique, max 255 caractères |
| `Date_creation` | `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | **Date de création** | Automatique |
| `Date_expiration` | `TIMESTAMP NOT NULL` | **Date d'expiration** | Obligatoire |
| `IP_address` | `VARCHAR(45)` | **Adresse IP** de connexion | Optionnel, max 45 caractères (IPv6) |
| `User_agent` | `TEXT` | **Navigateur utilisé** | Optionnel, texte libre |
| `Actif` | `BOOLEAN DEFAULT TRUE` | **Statut actif** | `TRUE` par défaut |

### Relations Principales

1. **Utilisateur** → **Traitee** (1:N) : Un utilisateur peut traiter plusieurs épreuves
2. **Epreuve** → **Traitee** (1:N) : Une épreuve peut être traitée par plusieurs utilisateurs
3. **Epreuve** → **Exercice** (1:N) : Une épreuve contient plusieurs exercices
4. **Exercice** → **QCM/QRO** (1:N) : Un exercice contient plusieurs questions
5. **Traitee** → **Reponses_QCM/QRO** (1:N) : Un traitement contient plusieurs réponses

### Script d'Installation

Le script complet de création de la base de données est disponible dans le fichier `database_schema.sql` à la racine du projet.

#### Commandes d'Installation
```bash
# Exécution du script
mysql -u root -p < database_schema.sql

# Vérification
mysql -u root -p -e "USE olympiades_db; SHOW TABLES;"
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

### Phase 2 : Backend et API (En Cours)
- [ ] API REST avec Node.js/Express
- [x] Base de données MariaDB (Schéma complet implémenté)
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

**Documentation mise à jour le : 20 Janvier 2025**
**Version : 1.1.0**
**Auteur : Assistant IA**
