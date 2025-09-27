// Données centralisées du site - Facilement éditables
export const siteConfig = {
  title: "Olympiades Mathématiques et Physique",
  subtitle: "Défiez vos limites, explorez l'excellence académique",
  description: "Compétition académique d'excellence pour les étudiants de Licence 1 et 2 en Mathématiques et Physique au Cameroun",
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
};

export const aboutData = {
  history: {
    title: "Notre Histoire",
    content: "Les Olympiades Mathématiques et Physique ont été créées en 2025 pour promouvoir l'excellence académique et stimuler la passion pour les sciences exactes chez les étudiants universitaires camerounais. Cette initiative vise à créer un environnement compétitif sain qui encourage l'apprentissage et l'innovation dans les domaines des mathématiques et de la physique."
  },
  values: {
    title: "Nos Valeurs",
    values: [
      {
        title: "Excellence",
        description: "Nous encourageons la recherche de l'excellence académique et l'innovation dans l'apprentissage des sciences exactes."
      },
      {
        title: "Équité",
        description: "Tous les participants sont traités avec équité et respect, indépendamment de leur origine ou université d'appartenance."
      },
      {
        title: "Collaboration",
        description: "Nous favorisons l'esprit d'équipe et la collaboration entre les participants et les institutions partenaires."
      },
      {
        title: "Innovation",
        description: "Nous encourageons la créativité et l'innovation dans la résolution de problèmes scientifiques complexes."
      }
    ]
  },
  sponsors: {
    title: "Nos Sponsors",
    sponsors: [
      {
        name: "Ministère de l'Enseignement Supérieur",
        logo: "/images/sponsors/ministere.png",
        description: "Soutien institutionnel principal"
      },
      {
        name: "Université de Yaoundé I",
        logo: "/images/sponsors/uy1.png",
        description: "Université hôte et partenaire académique"
      },
      {
        name: "Fondation pour l'Éducation",
        logo: "/images/sponsors/fondation.png",
        description: "Soutien financier et logistique"
      }
    ]
  }
};

export const testData = {
  mathematics: {
    subjects: [
      {
        id: 1,
        title: "Algèbre Linéaire",
        topic: "algèbre",
        duration: "2h30",
        difficulty: "Licence 1",
        topics: ["Espaces vectoriels", "Matrices", "Déterminants", "Systèmes linéaires", "Valeurs propres"],
        description: "Épreuve d'algèbre linéaire couvrant les concepts fondamentaux de la théorie des espaces vectoriels."
      },
      {
        id: 2,
        title: "Analyse Réelle",
        topic: "analyse",
        duration: "3h00",
        difficulty: "Licence 2",
        topics: ["Limites", "Continuité", "Dérivées", "Intégrales", "Suites et séries", "Fonctions de plusieurs variables"],
        description: "Épreuve d'analyse réelle approfondie pour les étudiants de niveau avancé."
      },
      {
        id: 3,
        title: "Géométrie",
        topic: "géométrie",
        duration: "2h00",
        difficulty: "Licence 1",
        topics: ["Géométrie plane", "Géométrie dans l'espace", "Transformations", "Coniques"],
        description: "Épreuve de géométrie classique et moderne."
      }
    ]
  },
  physics: {
    subjects: [
      {
        id: 4,
        title: "Mécanique",
        topic: "mécanique",
        duration: "2h30",
        difficulty: "Licence 1",
        topics: ["Cinématique", "Dynamique", "Énergie", "Moment cinétique", "Mouvement harmonique"],
        description: "Épreuve de mécanique classique couvrant les lois fondamentales du mouvement."
      },
      {
        id: 5,
        title: "Électromagnétisme",
        topic: "électro",
        duration: "3h00",
        difficulty: "Licence 2",
        topics: ["Électrostatique", "Magnétostatique", "Induction", "Ondes électromagnétiques", "Circuits"],
        description: "Épreuve d'électromagnétisme pour étudiants avancés."
      },
      {
        id: 6,
        title: "Thermodynamique",
        topic: "thermodynamique",
        duration: "2h00",
        difficulty: "Licence 2",
        topics: ["Lois de la thermodynamique", "Gaz parfaits", "Machines thermiques", "Entropie"],
        description: "Épreuve de thermodynamique et physique statistique."
      }
    ]
  }
};

export const programData = {
  currentYear: 2025,
  schedule: {
    "2025": {
      phases: [
        {
          name: "Inscriptions",
          startDate: "15 Janvier 2025",
          endDate: "28 Février 2025",
          description: "Période d'inscription en ligne pour tous les étudiants éligibles des universités partenaires.",
          status: "upcoming"
        },
        {
          name: "Phase de préparation",
          startDate: "1er Mars 2025",
          endDate: "31 Mars 2025",
          description: "Mise à disposition des ressources pédagogiques, sessions de préparation et webinaires.",
          status: "upcoming"
        },
        {
          name: "Épreuves éliminatoires",
          startDate: "5 Avril 2025",
          endDate: "6 Avril 2025",
          description: "Première phase des épreuves dans les universités participantes. Sélection des meilleurs candidats.",
          status: "upcoming"
        },
        {
          name: "Épreuves finales",
          startDate: "26 Avril 2025",
          endDate: "27 Avril 2025",
          description: "Phase finale avec les meilleurs candidats de chaque université. Compétition nationale.",
          status: "upcoming"
        },
        {
          name: "Cérémonie de remise des prix",
          startDate: "10 Mai 2025",
          endDate: "10 Mai 2025",
          description: "Cérémonie officielle de remise des prix, diplômes et récompenses aux lauréats.",
          status: "upcoming"
        }
      ]
    }
  }
};

export const resultsData = {
  currentYear: 2025,
  previousYears: [
    {
      year: 2024,
      participants: 150,
      universities: 8,
      winners: [
        { name: "Jean Nguema", university: "Université de Yaoundé I", subject: "Mathématiques", rank: 1 },
        { name: "Marie Tchoumi", university: "Université de Douala", subject: "Physique", rank: 1 },
        { name: "Paul Mballa", university: "Université de Buea", subject: "Mathématiques", rank: 2 }
      ]
    }
  ]
};

export const galleryData = {
  events: [
    {
      id: 1,
      title: "Cérémonie d'ouverture 2024",
      date: "15 Mars 2024",
      images: ["/images/gallery/ouverture1.jpg", "/images/gallery/ouverture2.jpg"],
      description: "Cérémonie officielle d'ouverture des Olympiades 2024"
    },
    {
      id: 2,
      title: "Épreuves en cours",
      date: "20 Mars 2024",
      images: ["/images/gallery/epreuves1.jpg", "/images/gallery/epreuves2.jpg"],
      description: "Moments des épreuves éliminatoires"
    },
    {
      id: 3,
      title: "Remise des prix",
      date: "25 Mai 2024",
      images: ["/images/gallery/prix1.jpg", "/images/gallery/prix2.jpg"],
      description: "Cérémonie de remise des prix et diplômes"
    }
  ]
};
