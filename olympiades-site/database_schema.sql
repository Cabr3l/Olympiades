-- =====================================================
-- Script de création de la base de données Olympiades
-- Basé sur le diagramme ERD fourni
-- =====================================================

-- Création de la base de données
CREATE DATABASE IF NOT EXISTS olympiades_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE olympiades_db;

-- =====================================================
-- Table: Utilisateur
-- =====================================================
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
    Actif BOOLEAN DEFAULT TRUE,
    
    -- Index pour optimiser les recherches
    INDEX idx_email (Email),
    INDEX idx_niveau_domaine (Niveau_etudes, Domaine_etudes),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Table: Epreuve
-- =====================================================
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
    Actif BOOLEAN DEFAULT TRUE,
    
    -- Index pour optimiser les recherches
    INDEX idx_theme (Theme_aborde),
    INDEX idx_difficulte (Difficulte),
    INDEX idx_type (Type_epreuve),
    INDEX idx_date (Date_epreuve),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Table: Exercice
-- =====================================================
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
    
    -- Clé étrangère
    FOREIGN KEY (Epreuve_id) REFERENCES Epreuve(Id) ON DELETE CASCADE,
    
    -- Index pour optimiser les recherches
    INDEX idx_epreuve (Epreuve_id),
    INDEX idx_ordre (Ordre),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Table: QCM (Questions à Choix Multiples)
-- =====================================================
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
    
    -- Clé étrangère
    FOREIGN KEY (Exercice_id) REFERENCES Exercice(Id) ON DELETE CASCADE,
    
    -- Index pour optimiser les recherches
    INDEX idx_exercice (Exercice_id),
    INDEX idx_ordre (Ordre),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Table: QRO (Questions à Réponse Ouverte)
-- =====================================================
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
    
    -- Clé étrangère
    FOREIGN KEY (Exercice_id) REFERENCES Exercice(Id) ON DELETE CASCADE,
    
    -- Index pour optimiser les recherches
    INDEX idx_exercice (Exercice_id),
    INDEX idx_ordre (Ordre),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Table: Traitee (Traitement des épreuves par les utilisateurs)
-- =====================================================
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
    
    -- Clés étrangères
    FOREIGN KEY (Utilisateur_id) REFERENCES Utilisateur(Id) ON DELETE CASCADE,
    FOREIGN KEY (Epreuve_id) REFERENCES Epreuve(Id) ON DELETE CASCADE,
    
    -- Contrainte unique pour éviter qu'un utilisateur traite la même épreuve plusieurs fois
    UNIQUE KEY unique_user_test (Utilisateur_id, Epreuve_id),
    
    -- Index pour optimiser les recherches
    INDEX idx_utilisateur (Utilisateur_id),
    INDEX idx_epreuve (Epreuve_id),
    INDEX idx_date (Date_traitement),
    INDEX idx_statut (Statut),
    INDEX idx_note (Note),
    INDEX idx_pourcentage (Pourcentage)
);

-- =====================================================
-- Table: Reponses_QCM (Réponses des utilisateurs aux QCM)
-- =====================================================
CREATE TABLE Reponses_QCM (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Traitee_id INT NOT NULL,
    QCM_id INT NOT NULL,
    Reponse_utilisateur ENUM('A', 'B', 'C', 'D', 'E'),
    Est_correcte BOOLEAN GENERATED ALWAYS AS (Reponse_utilisateur = (SELECT Reponse_correcte FROM QCM WHERE Id = QCM_id)) STORED,
    Points_obtenus DECIMAL(5,2) GENERATED ALWAYS AS (CASE WHEN Reponse_utilisateur = (SELECT Reponse_correcte FROM QCM WHERE Id = QCM_id) THEN (SELECT Points FROM QCM WHERE Id = QCM_id) ELSE 0 END) STORED,
    Date_reponse TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Clés étrangères
    FOREIGN KEY (Traitee_id) REFERENCES Traitee(Id) ON DELETE CASCADE,
    FOREIGN KEY (QCM_id) REFERENCES QCM(Id) ON DELETE CASCADE,
    
    -- Contrainte unique pour éviter les doublons
    UNIQUE KEY unique_traitee_qcm (Traitee_id, QCM_id),
    
    -- Index pour optimiser les recherches
    INDEX idx_traitee (Traitee_id),
    INDEX idx_qcm (QCM_id),
    INDEX idx_correcte (Est_correcte)
);

-- =====================================================
-- Table: Reponses_QRO (Réponses des utilisateurs aux QRO)
-- =====================================================
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
    
    -- Clés étrangères
    FOREIGN KEY (Traitee_id) REFERENCES Traitee(Id) ON DELETE CASCADE,
    FOREIGN KEY (QRO_id) REFERENCES QRO(Id) ON DELETE CASCADE,
    FOREIGN KEY (Corrige_par) REFERENCES Utilisateur(Id) ON DELETE SET NULL,
    
    -- Contrainte unique pour éviter les doublons
    UNIQUE KEY unique_traitee_qro (Traitee_id, QRO_id),
    
    -- Index pour optimiser les recherches
    INDEX idx_traitee (Traitee_id),
    INDEX idx_qro (QRO_id),
    INDEX idx_corrige_par (Corrige_par),
    INDEX idx_date_correction (Date_correction)
);

-- =====================================================
-- Table: Administrateurs (Extension pour la gestion)
-- =====================================================
CREATE TABLE Administrateurs (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Utilisateur_id INT NOT NULL,
    Role ENUM('Super Admin', 'Admin', 'Correcteur') NOT NULL,
    Permissions JSON,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Actif BOOLEAN DEFAULT TRUE,
    
    -- Clé étrangère
    FOREIGN KEY (Utilisateur_id) REFERENCES Utilisateur(Id) ON DELETE CASCADE,
    
    -- Index pour optimiser les recherches
    INDEX idx_utilisateur (Utilisateur_id),
    INDEX idx_role (Role),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Table: Sessions (Gestion des sessions utilisateurs)
-- =====================================================
CREATE TABLE Sessions (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Utilisateur_id INT NOT NULL,
    Token VARCHAR(255) UNIQUE NOT NULL,
    Date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Date_expiration TIMESTAMP NOT NULL,
    IP_address VARCHAR(45),
    User_agent TEXT,
    Actif BOOLEAN DEFAULT TRUE,
    
    -- Clé étrangère
    FOREIGN KEY (Utilisateur_id) REFERENCES Utilisateur(Id) ON DELETE CASCADE,
    
    -- Index pour optimiser les recherches
    INDEX idx_utilisateur (Utilisateur_id),
    INDEX idx_token (Token),
    INDEX idx_expiration (Date_expiration),
    INDEX idx_actif (Actif)
);

-- =====================================================
-- Vues utiles pour les requêtes fréquentes
-- =====================================================

-- Vue: Statistiques des utilisateurs par niveau et domaine
CREATE VIEW v_stats_utilisateurs AS
SELECT 
    Niveau_etudes,
    Domaine_etudes,
    COUNT(*) as Nombre_utilisateurs,
    COUNT(CASE WHEN Actif = TRUE THEN 1 END) as Utilisateurs_actifs
FROM Utilisateur
GROUP BY Niveau_etudes, Domaine_etudes;

-- Vue: Statistiques des épreuves
CREATE VIEW v_stats_epreuves AS
SELECT 
    Theme_aborde,
    Type_epreuve,
    Difficulte,
    COUNT(*) as Nombre_epreuves,
    AVG(Temps) as Temps_moyen
FROM Epreuve
WHERE Actif = TRUE
GROUP BY Theme_aborde, Type_epreuve, Difficulte;

-- Vue: Résultats des utilisateurs
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

-- =====================================================
-- Triggers pour la cohérence des données
-- =====================================================

-- Trigger: Mise à jour automatique de la note dans Traitee
DELIMITER //
CREATE TRIGGER tr_update_note_traitee
AFTER INSERT ON Reponses_QCM
FOR EACH ROW
BEGIN
    UPDATE Traitee 
    SET Note = (
        SELECT COALESCE(SUM(rq.Points_obtenus), 0) + 
               COALESCE((SELECT SUM(rqr.Points_obtenus) FROM Reponses_QRO rqr WHERE rqr.Traitee_id = NEW.Traitee_id), 0)
        FROM Reponses_QCM rq 
        WHERE rq.Traitee_id = NEW.Traitee_id
    )
    WHERE Id = NEW.Traitee_id;
END//

CREATE TRIGGER tr_update_note_traitee_qro
AFTER INSERT ON Reponses_QRO
FOR EACH ROW
BEGIN
    UPDATE Traitee 
    SET Note = (
        SELECT COALESCE(SUM(rq.Points_obtenus), 0) + 
               COALESCE((SELECT SUM(rqr.Points_obtenus) FROM Reponses_QRO rqr WHERE rqr.Traitee_id = NEW.Traitee_id), 0)
        FROM Reponses_QCM rq 
        WHERE rq.Traitee_id = NEW.Traitee_id
    )
    WHERE Id = NEW.Traitee_id;
END//
DELIMITER ;

-- =====================================================
-- Procédures stockées utiles
-- =====================================================

-- Procédure: Calculer les statistiques d'une épreuve
DELIMITER //
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
END//
DELIMITER ;

-- =====================================================
-- Données de test (optionnel)
-- =====================================================

-- Insertion d'un utilisateur de test
INSERT INTO Utilisateur (Nom, Prenom, Email, Telephone, Niveau_etudes, Domaine_etudes, Domaine_application) VALUES
('Dupont', 'Jean', 'jean.dupont@email.com', '+237123456789', 'L1', 'Maths', 'Maths et Physique'),
('Martin', 'Marie', 'marie.martin@email.com', '+237987654321', 'L2', 'Physique', 'Physique');

-- Insertion d'une épreuve de test
INSERT INTO Epreuve (Theme_aborde, Description, Date_epreuve, Difficulte, Temps, Type_epreuve) VALUES
('maths', 'Épreuve d\'algèbre linéaire pour L1', '2025-01-15', 'Moyen', 120, 'Entrainement'),
('physique', 'Épreuve de mécanique pour L2', '2025-01-20', 'Difficile', 150, 'Evaluation');

-- =====================================================
-- Fin du script
-- =====================================================

-- Affichage des tables créées
SHOW TABLES;

-- Affichage de la structure de la base de données
SELECT 
    TABLE_NAME as 'Table',
    TABLE_ROWS as 'Lignes',
    DATA_LENGTH as 'Taille_Data',
    INDEX_LENGTH as 'Taille_Index'
FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = 'olympiades_db'
ORDER BY TABLE_NAME;
