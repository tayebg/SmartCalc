// Données des modules intégrées (version complète)
const modulesDataIA = {
  IA: {
    1: [ // Semestre 1
      {
        ue: "UF111",
        type: "UE Fondamentale",
        credit: 12,
        coeff: 12,
        modules: [
          {
            code: "AND",
            name: "Analyse de données",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "MODSIM",
            name: "Modélisation et Simulation",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ROC",
            name: "Recherche opérationnelle et combinatoire",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF112",
        type: "UE Fondamentale",
        credit: 6,
        coeff: 6,
        modules: [
          {
            code: "AA",
            name: "Apprentissage Automatique",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          },
          {
            code: "FLI",
            name: "Fondements logiques pour l'informatique",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          },
          {
            code: "TNS",
            name: "Traitement Numérique du Signal",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM111",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "BDDA",
            name: "Bases de Données",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ASR",
            name: "Algorithmiques et Systèmes Répartis",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD111",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "OIRS",
            name: "Outils de rédaction scientifique",
            coeff: 1,
            credit: 1,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: false
          }
        ]
      },
      {
        ue: "UT111",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "SFAP",
            name: "Sémantique Formelle et analyse des programmes",
            coeff: 2,
            credit: 2,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    2: [ // Semestre 2
      {
        ue: "UF121",
        type: "UE Fondamentales",
        credit: 10,
        coeff: 10,
        modules: [
          {
            code: "TP",
            name: "Traitement de la Parole",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "TALN",
            name: "Traitement Automatique du Langage naturel",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "TI",
            name: "Théorie de l’Information ",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF122",
        type: "UE Fondamentales",
        credit: 8,
        coeff: 8,
        modules: [
          {
            code: "GA",
            name: "Géométrie Algorithmique",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "VA",
            name: "Vision Artificielle",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM121",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "TIma",
            name: "Traitement d’Images",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "M3D",
            name: "Modélisation 3D",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD121",
        type: "UE Découverte",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "ASMA",
            name: "Agents et systèmes Multi agents",
            coeff: 2,
            credit: 2,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UT121",
        type: "UE Transversales",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "RF",
            name: "Reconnaissance des Formes",
            coeff: 1,
            credit: 1,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      }
    ],
    3: [ // Semestre 3
      {
        ue: "UF131",
        type: "UE Fondamentales",
        credit: 8,
        coeff: 8,
        modules: [
          {
            code: "AMRV",
            name: "Applications multimédias et Réalité virtuelle",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "CM",
            name: "Communication Multimédia",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF132",
        type: "UE Fondamentales",
        credit: 10,
        coeff: 10,
        modules: [
          {
            code: "BI",
            name: "Bio-informatique",
            coeff: 3,
            credit: 6,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "CAMA",
            name: "Conception d’applications multimédia animées",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM131",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "IMed",
            name: "Imagerie médicale",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ISat",
            name: "Imagerie Satellitaires",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD131",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "MP",
            name: "Management des Projets",
            coeff: 1,
            credit: 1,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UT131",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "PeL",
            name: "Plate-formes e-learning",
            coeff: 2,
            credit: 2,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    4: [ // Semestre 4 (PFE)
      {
        ue: "PFE",
        type: "Projet de Fin d'Études",
        credit: 30,
        coeff: 30,
        modules: [
          {
            code: "PFE",
            name: "Projet de Fin d'Études",
            coeff: 30,
            credit: 30,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      }
    ]
  }
};

const modulesDataSID = {
  SID: {
    1: [ // Semestre 1 — SID
      {
        ue: "UF311",
        type: "UE Fondamentales",
        credit: 12,
        coeff: 12,
        modules: [
          {
            code: "AND",
            name: "Analyse de données",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "MODSIM",
            name: "Modélisation et Simulation",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ROC",
            name: "Recherche opérationnelle et combinatoire",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF312",
        type: "UE Fondamentales",
        credit: 6,
        coeff: 6,
        modules: [
          {
            code: "AA",
            name: "Apprentissage Automatique",
            coeff: 2,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          },
          {
            code: "FLI",
            name: "Fondements logiques pour l'informatique",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          },
          {
            code: "SFSI",
            name: "Spécification Formelle des SI",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM311",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "BDDA",
            name: "Bases de Données Avancées",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ASR",
            name: "Algorithmiques et Systèmes Répartis",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD311",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "OIRS",
            name: "Outils pour la rédaction scientifique",
            coeff: 1,
            credit: 1,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: false
          }
        ]
      },
      {
        ue: "UT311",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "SFAP",
            name: "Sémantique Formelle et analyse des programmes",
            coeff: 2,
            credit: 2,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    2: [ // Semestre 2 — SID
      {
        ue: "UF321",
        type: "UE Fondamentales",
        credit: 10,
        coeff: 10,
        modules: [
          {
            code: "SQDL",
            name: "Sécurité et qualité des Données et Logiciels",
            coeff: 3,
            credit: 6,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "CC",
            name: "CloudComputing",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF322",
        type: "UE Fondamentales",
        credit: 8,
        coeff: 8,
        modules: [
          {
            code: "ASMA",
            name: "Agents et systèmes Multi agents",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "IM",
            name: "Ingénierie des Modèles",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM321",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "BDMED",
            name: "Bases de données multidimensionnelles et ent de données",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "GI",
            name: "Grilles Informatiques",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD321",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "OIE",
            name: "Optimisation industriels et économiques",
            coeff: 1,
            credit: 1,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UT321",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "TJ",
            name: "Théorie des Jeux",
            coeff: 2,
            credit: 2,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    3: [ // Semestre 3 — SID
      {
        ue: "UF331",
        type: "UE Fondamentales",
        credit: 8,
        coeff: 8,
        modules: [
          {
            code: "FDMS",
            name: "Fouille de Données et Média Sociaux",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "OWS",
            name: "Ontologie et Web Services",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF332",
        type: "UE Fondamentales",
        credit: 10,
        coeff: 10,
        modules: [
          {
            code: "BDSM",
            name: "Big Data et Systèmes Multi échelles",
            coeff: 3,
            credit: 6,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "SIS",
            name: "Systèmes d'Information Spatiale",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM331",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "IRDM",
            name: "Indexation et recherche de données multimédia",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "DAWS",
            name: "Développement avec l'Approche Web Services",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD331",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "MP",
            name: "Management des Projets",
            coeff: 1,
            credit: 1,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UT331",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "PEW",
            name: "Processus d'Entreprise et Work-Flow",
            coeff: 2,
            credit: 2,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    4: [ // Semestre 4 — PFE
      {
        ue: "PFE",
        type: "Projet de Fin d'Études",
        credit: 30,
        coeff: 30,
        modules: [
          {
            code: "PFE",
            name: "Projet de Fin d'Études",
            coeff: 30,
            credit: 30,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      }
    ]
  }
};

const modulesDataRSID = {
  RSID: {
    1: [ // Semestre 1 — RSID
      {
        ue: "UF211",
        type: "UE Fondamentales",
        credit: 12,
        coeff: 12,
        modules: [
          {
            code: "AND",
            name: "Analyse de données",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "MODSIM",
            name: "Modélisation et Simulation",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ROC",
            name: "Recherche opérationnelle et combinatoire",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF212",
        type: "UE Fondamentales",
        credit: 6,
        coeff: 6,
        modules: [
          {
            code: "AA",
            name: "Apprentissage Automatique",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          },
          {
            code: "FLI",
            name: "Fondements logiques pour l'informatique",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          },
          {
            code: "TNS",
            name: "Traitement Numérique du Signal",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM211",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "BD",
            name: "Bases de Données",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ASR",
            name: "Algorithmiques et Systèmes Répartis",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD211",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "OIRS",
            name: "Outils pour la rédaction scientifique",
            coeff: 1,
            credit: 1,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: false
          }
        ]
      },
      {
        ue: "UT211",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "SFAP",
            name: "Sémantique Formelle et analyse des programmes",
            coeff: 2,
            credit: 2,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    2: [ // Semestre 2 — RSID
      {
        ue: "UF221",
        type: "UE Fondamentales",
        credit: 10,
        coeff: 10,
        modules: [
          {
            code: "TSE",
            name: "Technologie des Systèmes Embarqués",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "GC",
            name: "Grille de calcul",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "GRCP",
            name: "Gestion des Réseaux et Contrôle par Politique",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF222",
        type: "UE Fondamentales",
        credit: 8,
        coeff: 8,
        modules: [
          {
            code: "ASMA",
            name: "Agents et systèmes Multiagents",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "PAP",
            name: "Programmation et Architectures Parallèles",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM221",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "SR",
            name: "Sécurité Réseaux",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "RH",
            name: "Réseaux hertziens",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD221",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "OIE",
            name: "Optimisation industrielle et économique",
            coeff: 1,
            credit: 1,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UT221",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "FD",
            name: "Fondements de la Décision",
            coeff: 2,
            credit: 2,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    3: [ // Semestre 3 — RSID
      {
        ue: "UF231",
        type: "UE Fondamentales",
        credit: 10,
        coeff: 10,
        modules: [
          {
            code: "SFS",
            name: "Sureté de Fonctionnement de Systèmes",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "PQCM",
            name: "Protocoles et QoS communication multimédia",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "CM",
            name: "Communication multimédia",
            coeff: 1,
            credit: 2,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UF232",
        type: "UE Fondamentales",
        credit: 8,
        coeff: 8,
        modules: [
          {
            code: "MFSD",
            name: "Modèles Formels des Systèmes Distribués",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          },
          {
            code: "ASTR",
            name: "Architecture et Système Temps Réel",
            coeff: 2,
            credit: 4,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UM231",
        type: "UE Méthodologie",
        credit: 9,
        coeff: 9,
        modules: [
          {
            code: "CC",
            name: "Cloud Computing",
            coeff: 2,
            credit: 4,
            has_td: false,
            has_tp: true,
            has_cc: true,
            has_exam: true
          },
          {
            code: "SRA",
            name: "Systèmes Répartis Avancés",
            coeff: 3,
            credit: 5,
            has_td: true,
            has_tp: true,
            has_cc: true,
            has_exam: true
          }
        ]
      },
      {
        ue: "UD231",
        type: "UE Découverte",
        credit: 1,
        coeff: 1,
        modules: [
          {
            code: "MP",
            name: "Management des Projets",
            coeff: 1,
            credit: 1,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      },
      {
        ue: "UT231",
        type: "UE Transversales",
        credit: 2,
        coeff: 2,
        modules: [
          {
            code: "RA",
            name: "Réseaux avancés",
            coeff: 2,
            credit: 2,
            has_td: true,
            has_tp: false,
            has_cc: true,
            has_exam: true
          }
        ]
      }
    ],
    4: [ // Semestre 4 — PFE
      {
        ue: "PFE",
        type: "Projet de Fin d'Études",
        credit: 30,
        coeff: 30,
        modules: [
          {
            code: "PFE",
            name: "Projet de Fin d'Études",
            coeff: 30,
            credit: 30,
            has_td: false,
            has_tp: false,
            has_cc: false,
            has_exam: true
          }
        ]
      }
    ]
  }
};

// Logique de calcul intégrée
const logicIA = {
  calculateModuleAverage: (mod, grades, specialty, sem) => {
    let cc = 0, ccCount = 0;
    
    // Traiter les notes vides comme 0
    const tdGrade = grades.td !== undefined ? grades.td : (mod.has_td ? 0 : undefined);
    const tpGrade = grades.tp !== undefined ? grades.tp : (mod.has_tp ? 0 : undefined);
    const examGrade = grades.exam !== undefined ? grades.exam : (mod.has_exam ? 0 : undefined);
    
    if (tdGrade !== undefined) {
      cc += tdGrade;
      ccCount++;
    }
    if (tpGrade !== undefined) {
      cc += tpGrade;
      ccCount++;
    }
    
    if (ccCount > 0) cc = cc / ccCount;
    
    if (examGrade !== undefined && ccCount > 0) {
      return (cc + examGrade) / 2;
    } else if (examGrade !== undefined) {
      return examGrade;
    } else if (ccCount > 0) {
      return cc;
    }
    
    return NaN;
  },
  
  validateSemester: (semesterData, sem) => {
    let totalPoints = 0, totalCoeff = 0, totalCredits = 0;
    
    semesterData.forEach(ue => {
      let uePoints = 0, ueCoeff = 0, ueCredits = 0;
      
      ue.modules.forEach(mod => {
        if (!isNaN(mod.average)) {
          uePoints += mod.average * mod.coeff;
          ueCoeff += mod.coeff;
          if (mod.average >= 10) ueCredits += mod.credit;
        }
      });
      
      const ueAverage = ueCoeff ? uePoints / ueCoeff : NaN;
      if (!isNaN(ueAverage)) {
        totalPoints += ueAverage * ue.coeff;
        totalCoeff += ue.coeff;
        if (ueAverage >= 10) totalCredits += ue.credit;
        else totalCredits += ueCredits;
      }
    });
    
    const semesterAverage = totalCoeff ? totalPoints / totalCoeff : NaN;
    if (semesterAverage >= 10) totalCredits = 30;
    
    return {
      average: semesterAverage,
      credits: totalCredits
    };
  }
};

const logicSID = logicIA;
const logicRSID = logicIA;

// Variables globales
let selectedCycle = null;
let selectedSpecialty = null;
let selectedSemesters = [];
let semesterDataMap = {};
let logic = null;
let savedGrades = JSON.parse(localStorage.getItem("grades")) || {};
let history = []; // To store navigation history

// DOM Helper
const $ = (id) => document.getElementById(id);

// Function to show/hide sections
function showSection(sectionId) {
  const sections = ["cycle-selector", "specialty-selector", "semester-selector", "grade-input-section", "results-section"];
  sections.forEach(id => {
    const section = $(id);
    if (section) {
      if (id === sectionId) {
        section.classList.remove("hidden");
        section.style.display = "block";
      } else {
        section.classList.add("hidden");
        section.style.display = "none";
      }
    }
  });
  updateBackButtonVisibility();
}

// Update back button visibility
function updateBackButtonVisibility() {
  const backButton = $("back-button");
  const header = document.querySelector("header");
  
  // Show back button on all pages except the first one (cycle-selector)
  const currentSection = document.querySelector('section:not(.hidden)');
  const isFirstPage = currentSection && currentSection.id === 'cycle-selector';
  
  if (!isFirstPage && history.length > 0) {
    backButton.classList.remove("hidden");
    header.classList.add("has-back-button");
  } else {
    backButton.classList.add("hidden");
    header.classList.remove("has-back-button");
  }
}

// Calculate annual average function
function calculateAnnualAverage() {
  const otherSemesterAvg = parseFloat($("other-semester-avg").value);
  const otherSemesterCr = parseInt($("other-semester-cr").value);
  const currentSemesterAvg = parseFloat($("current-semester-avg").textContent);
  const currentSemesterCr = parseInt($("current-semester-credits").textContent);
  
  if (isNaN(otherSemesterAvg) || isNaN(otherSemesterCr)) {
    showNotification("Veuillez saisir la moyenne et les crédits de l'autre semestre", "warning");
    return;
  }
  
  if (otherSemesterAvg < 0 || otherSemesterAvg > 20) {
    showNotification("La moyenne doit être entre 0 et 20", "error");
    return;
  }
  
  if (otherSemesterCr < 0 || otherSemesterCr > 30) {
    showNotification("Les crédits doivent être entre 0 et 30", "error");
    return;
  }
  
  if (isNaN(currentSemesterAvg) || isNaN(currentSemesterCr)) {
    showNotification("Veuillez d'abord calculer la moyenne du semestre actuel", "warning");
    return;
  }
  
  // Calculate annual average
  const annualAverage = (currentSemesterAvg + otherSemesterAvg) / 2;
  const totalCredits = currentSemesterCr + otherSemesterCr;
  
  // Update display
  $("annual-average").textContent = annualAverage.toFixed(2);
  $("annual-credits").textContent = totalCredits;
  
  // Update status
  const statusElement = $("annual-status");
  if (annualAverage >= 16) {
    statusElement.textContent = "Très Bien";
    statusElement.className = "result-status text-success";
  } else if (annualAverage >= 14) {
    statusElement.textContent = "Bien";
    statusElement.className = "result-status text-success";
  } else if (annualAverage >= 12) {
    statusElement.textContent = "Assez Bien";
    statusElement.className = "result-status text-success";
  } else if (annualAverage >= 10) {
    statusElement.textContent = "Passable";
    statusElement.className = "result-status text-warning";
  } else {
    statusElement.textContent = "Échec";
    statusElement.className = "result-status text-danger";
  }
  
  showNotification("Moyenne annuelle calculée avec succès", "success");
}

// Navigate function to handle history
function navigate(sectionId, state = {}) {
  history.push({ sectionId, state });
  showSection(sectionId);
  
  // Gérer la visibilité du bouton Retour
  const backButton = document.getElementById("back-button");
  const header = document.querySelector("header");
  
  // Le bouton Retour ne doit apparaître que si on n'est pas sur la page d'accueil
  // et qu'il y a plus d'une page dans l'historique
  if (sectionId === "cycle-selector" || history.length <= 1) {
    if (backButton) backButton.classList.add("hidden");
    if (header) header.classList.remove("has-back-button");
  } else {
    if (backButton) backButton.classList.remove("hidden");
    if (header) header.classList.add("has-back-button");
  }
}

// Go back function
function goBack() {
  if (history.length > 1) {
    history.pop(); // Remove current state
    const prevState = history[history.length - 1];
    showSection(prevState.sectionId);
    
    // Hide back button if going to home page
    const backButton = document.getElementById("back-button");
    const header = document.querySelector("header");
    
    if (prevState.sectionId === "cycle-selector" || history.length <= 1) {
      if (backButton) backButton.classList.add("hidden");
      if (header) header.classList.remove("has-back-button");
    } else {
      if (backButton) backButton.classList.remove("hidden");
      if (header) header.classList.add("has-back-button");
    }
    
    // Re-apply state if necessary (e.g., re-render semester buttons)
    if (prevState.sectionId === "semester-selector") {
      createSemesterButtons();
    } else if (prevState.sectionId === "specialty-selector") {
      // If going back to specialty selector, clear semester buttons
      const semesterButtons = document.getElementById("semester-buttons");
      if (semesterButtons) {
        semesterButtons.innerHTML = "";
      }
    }
  } else {
    // If only one item in history, go to initial state (cycle-selector)
    history = []; // Clear history completely
    showSection("cycle-selector");
    
    // Hide back button when at home page
    const backButton = document.getElementById("back-button");
    const header = document.querySelector("header");
    if (backButton) backButton.classList.add("hidden");
    if (header) header.classList.remove("has-back-button");
    
    // Reset all selections when going back to home
    selectedCycle = null;
    selectedSpecialty = null;
    selectedSemesters = [];
    semesterDataMap = {};
  }
}

// Fonction d'initialisation
function initializeApp() {
  console.log('Initialisation de l\'application...');
  
  // Masquer l'écran de chargement
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000);
  }
  
  // Afficher l'application
  const app = document.getElementById('app');
  if (app) {
    setTimeout(() => {
      app.classList.remove('hidden');
      app.style.display = 'block';
    }, 1200);
  }
  
  // S'assurer que le bouton Retour est caché au démarrage
  const backButton = document.getElementById("back-button");
  const header = document.querySelector("header");
  if (backButton) backButton.classList.add("hidden");
  if (header) header.classList.remove("has-back-button");
  
  // Initialiser les événements
  setupEventListeners();
  
  // Réinitialiser l'historique et commencer à la sélection de cycle
  history = [];
  navigate("cycle-selector"); // Start at cycle selection
  
  console.log('Application initialisée avec succès');
}

// Configuration des événements
function setupEventListeners() {
  // Événements pour la sélection du cycle
  const cycleButtons = document.querySelectorAll('[data-cycle]');
  cycleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cycle = button.dataset.cycle;
      selectCycle(cycle);
      navigate("specialty-selector");
    });
  });
  
  // Événements pour la sélection de spécialité
  const specialtyButtons = document.querySelectorAll('[data-specialty]');
  specialtyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const specialty = button.dataset.specialty;
      selectSpecialty(specialty);
      navigate("semester-selector");
    });
  });
  
  // Événement pour le panneau de paramètres
  const settingsToggle = document.getElementById('settings-toggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const sidebarClose = document.getElementById('sidebar-close');
  
  if (settingsToggle && sidebar) {
    settingsToggle.addEventListener('click', () => {
      sidebar.classList.add('active');
      if (sidebarOverlay) sidebarOverlay.classList.add('active');
    });
  }
  
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('active');
      if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    });
  }
  
  if (sidebarOverlay && sidebar) {
    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    });
  }

  // Événement pour le bouton de calcul de moyenne du semestre
  const calculateSemesterBtn = document.getElementById("calculate-semester");
  if (calculateSemesterBtn) {
    calculateSemesterBtn.addEventListener("click", () => {
      if (selectedSemesters.length === 1) {
        calculateSingleSemesterResults(selectedSemesters[0]);
      } else if (selectedSemesters.length > 1) {
        calculateCombinedSemesterResults(selectedSemesters);
      }
    });
  }

  // Back button event listener
  const backButton = $("back-button");
  if (backButton) {
    backButton.addEventListener("click", () => {
    NotificationManager.show("Retour à l'étape précédente", "info", 2000);
    goBack();
  });
  }

  // Calculate annual button
  const calculateAnnualBtn = $("calculate-annual");
  if (calculateAnnualBtn) {
    calculateAnnualBtn.addEventListener("click", calculateAnnualAverage);
  }
}

// Sélection du cycle
function selectCycle(cycle) {
  selectedCycle = cycle;
  NotificationManager.show(`Cycle ${selectedCycle} sélectionné`, "success", 2000);
  
  // Sauvegarder dans localStorage
  saveSelectionData();
}

// Sélection de la spécialité
function selectSpecialty(specialty) {
  selectedSpecialty = specialty;
  NotificationManager.show(`Spécialité ${selectedSpecialty} sélectionnée`, "success", 2000);
  
  // Définir les données de modules selon la spécialité
  switch(specialty) {
    case 'IA':
      logic = logicIA;
      break;
    case 'SID':
      logic = logicSID;
      break;
    case 'RSID':
      logic = logicRSID;
      break;
    default:
      logic = logicIA;
  }
  
  // Sauvegarder dans localStorage
  saveSelectionData();
  
  createSemesterButtons();
}

// Création des boutons de semestre
function createSemesterButtons() {
  const semesterButtons = document.getElementById("semester-buttons");
  if (!semesterButtons) return;
  
  semesterButtons.innerHTML = "";
  selectedSemesters = [];

  const sems = selectedCycle === "M1" ? [1, 2] : [3, 4];

  // Create a container for fixed semester cards
  const semesterCardsContainer = document.createElement("div");
  semesterCardsContainer.className = "semester-cards-container";
  semesterCardsContainer.id = "semester-cards-fixed";

  // Boutons pour semestres individuels
  sems.forEach((sem) => {
    const card = document.createElement("div");
    card.className = "semester-card";
    card.innerHTML = `
      <i class="fas fa-book"></i>
      <span class="btn-title">Semestre ${sem}</span>
      <span class="btn-subtitle">${selectedCycle} - S${sem}</span>
    `;
    card.dataset.semester = sem;
    card.onclick = () => {
      // Remove active class from all cards
      document.querySelectorAll('.semester-card').forEach(c => c.classList.remove('active'));
      // Add active class to clicked card
      card.classList.add('active');
      
      selectedSemesters = [sem];
      loadSemester(sem);
      
      // Sauvegarder dans localStorage
      saveSelectionData();
      
      navigate("grade-input-section", { semester: sem });
    };
    semesterCardsContainer.appendChild(card);
  });

  // Combined semester button
  const combinedCard = document.createElement("div");
  combinedCard.className = "semester-card";
  const semesterLabel = selectedCycle === "M1" ? "1+2" : "3+4";
  combinedCard.innerHTML = `
    <i class="fas fa-books"></i>
    <span class="btn-title">Semestre ${semesterLabel}</span>
    <span class="btn-subtitle">${selectedCycle} - Année complète</span>
  `;
  combinedCard.dataset.semester = semesterLabel;
  combinedCard.onclick = () => {
    // Remove active class from all cards
    document.querySelectorAll('.semester-card').forEach(c => c.classList.remove('active'));
    // Add active class to clicked card
    combinedCard.classList.add('active');
    
    selectedSemesters = sems;
    loadCombinedSemesters(sems);
    
    // Sauvegarder dans localStorage
    saveSelectionData();
    
    navigate("grade-input-section", { semesters: sems });
  };
  semesterCardsContainer.appendChild(combinedCard);
  
  semesterButtons.appendChild(semesterCardsContainer);
}

// Chargement d'un semestre
function loadSemester(sem) {
  NotificationManager.show(`Semestre ${sem} chargé`, "success", 2000);
  let data;
  switch (selectedSpecialty) {
    case "IA":
      data = modulesDataIA.IA;
      break;
    case "SID":
      data = modulesDataSID.SID;
      break;
    case "RSID":
      data = modulesDataRSID.RSID;
      break;
  }

  if (!data?.[sem]) {
    console.error("Pas de données pour ce semestre");
    return;
  }

  semesterDataMap[sem] = JSON.parse(JSON.stringify(data[sem]));
  displaySingleSemesterView(sem);
}

// Chargement des semestres combinés
function loadCombinedSemesters(sems) {
  console.log(`loadCombinedSemesters called for semesters: ${sems}`);
  let data;
  switch (selectedSpecialty) {
    case "IA":
      data = modulesDataIA.IA;
      break;
    case "SID":
      data = modulesDataSID.SID;
      break;
    case "RSID":
      data = modulesDataRSID.RSID;
      break;
  }

  semesterDataMap = {};
  sems.forEach(sem => {
    if (data?.[sem]) {
      semesterDataMap[sem] = JSON.parse(JSON.stringify(data[sem]));
    } else {
      console.error(`Pas de données pour le semestre ${sem}`);
    }
  });
  displayCombinedSemesterView(sems);
}

// Create navigation cards for semester switching
function createNavigationCards(currentSem) {
  const navContainer = $("semester-cards-nav");
  if (!navContainer) return;
  
  navContainer.innerHTML = "";
  const sems = selectedCycle === "M1" ? [1, 2] : [3, 4];

  // Individual semester cards
  sems.forEach((sem) => {
    const card = document.createElement("div");
    card.className = `semester-card ${sem === currentSem ? 'active' : ''}`;
    card.innerHTML = `
      <i class="fas fa-book"></i>
      <span class="btn-title">Semestre ${sem}</span>
      <span class="btn-subtitle">${selectedCycle} - S${sem}</span>
    `;
    card.onclick = () => {
      if (sem !== currentSem) {
        selectedSemesters = [sem];
        loadSemester(sem);
        // Don't navigate, just update the current view
        displaySingleSemesterView(sem);
      }
    };
    navContainer.appendChild(card);
  });

  // Combined semester card
  const combinedCard = document.createElement("div");
  combinedCard.className = `semester-card ${selectedSemesters.length > 1 ? 'active' : ''}`;
  const semesterLabel = selectedCycle === "M1" ? "1+2" : "3+4";
  combinedCard.innerHTML = `
    <i class="fas fa-books"></i>
    <span class="btn-title">Semestre ${semesterLabel}</span>
    <span class="btn-subtitle">${selectedCycle} - Année complète</span>
  `;
  combinedCard.onclick = () => {
    selectedSemesters = sems;
    loadCombinedSemesters(sems);
    displayCombinedSemesterView(sems);
  };
  navContainer.appendChild(combinedCard);
}

// Display single semester view
function displaySingleSemesterView(sem) {
  const gradeInputSection = $("grade-input-section");
  const resultsSection = $("results-section");
  
  // Clear previous content
  gradeInputSection.innerHTML = `
    <h2><i class="fas fa-edit"></i> Saisie des Notes - Semestre ${sem}</h2>
    
    <!-- Fixed Semester Cards for Navigation -->
    <div class="semester-navigation">
      <h3><i class="fas fa-calendar-alt"></i> Navigation Rapide</h3>
      <div id="semester-cards-nav" class="semester-cards-container"></div>
    </div>
    
    <div id="current-semester-info" class="semester-info">
      <span id="current-sem-label">Semestre ${sem}</span>
    </div>
    
    <div class="table-container">
      <table id="grade-table" class="enhanced-table">
        <thead>
          <tr>
            <th><i class="fas fa-code"></i> Code</th>
            <th><i class="fas fa-book"></i> Module</th>
            <th><i class="fas fa-weight"></i> Coeff</th>
            <th><i class="fas fa-star"></i> Crédit</th>
            <th><i class="fas fa-chalkboard-teacher"></i> TD</th>
            <th><i class="fas fa-laptop-code"></i> TP</th>
            <th><i class="fas fa-file-alt"></i> Examen</th>
            <th><i class="fas fa-calculator"></i> Moyenne</th>
            <th><i class="fas fa-trophy"></i> Crédits</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    
    <div id="mobile-cards-container" class="mobile-cards-container"></div>
    
    <div class="action-buttons">
      <button id="calculate-semester" class="btn btn-primary">
        <i class="fas fa-calculator"></i>
        Calculer Moyenne
      </button>
    </div>
    
    <div class="calculation-note">
      <i class="fas fa-info-circle"></i>
      <span>Le CC est calculé automatiquement à partir de TD et/ou TP selon les règles LMD</span>
    </div>
  `;
  
  // Create navigation cards
  createNavigationCards(sem);
  
  displayGradeInput(sem);
  
  // Re-attach event listener for calculate button
  const calculateBtn = $("calculate-semester");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => calculateSingleSemesterResults(sem));
  }
}

// Display combined semester view
function displayCombinedSemesterView(sems) {
  const gradeInputSection = $("grade-input-section");
  const semesterLabel = selectedCycle === "M1" ? "1+2" : "3+4";
  
  // Clear previous content
  gradeInputSection.innerHTML = `
    <h2><i class="fas fa-edit"></i> Saisie des Notes - Semestre ${semesterLabel}</h2>
    <div id="current-semester-info" class="semester-info">
      <span id="current-sem-label">Semestres ${sems.join("+")}</span>
    </div>
  `;
  
  // Create tables for each semester
  sems.forEach((sem, index) => {
    const semesterDiv = document.createElement("div");
    semesterDiv.className = "semester-content-section";
    semesterDiv.innerHTML = `
      <h3><i class="fas fa-calendar-alt"></i> Semestre ${sem}</h3>
      <div class="table-container">
        <table id="grade-table-${sem}" class="enhanced-table">
          <thead>
            <tr>
              <th><i class="fas fa-code"></i> Code</th>
              <th><i class="fas fa-book"></i> Module</th>
              <th><i class="fas fa-weight"></i> Coeff</th>
              <th><i class="fas fa-star"></i> Crédit</th>
              <th><i class="fas fa-chalkboard-teacher"></i> TD</th>
              <th><i class="fas fa-laptop-code"></i> TP</th>
              <th><i class="fas fa-file-alt"></i> Examen</th>
              <th><i class="fas fa-calculator"></i> Moyenne</th>
              <th><i class="fas fa-trophy"></i> Crédits</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div id="mobile-cards-container-${sem}" class="mobile-cards-container"></div>
    `;
    gradeInputSection.appendChild(semesterDiv);
  });
  
  // Add action buttons
  const actionDiv = document.createElement("div");
  actionDiv.className = "action-buttons";
  actionDiv.innerHTML = `
    <button id="calculate-semester" class="btn btn-primary">
      <i class="fas fa-calculator"></i>
      Calculer Moyennes
    </button>
  `;
  gradeInputSection.appendChild(actionDiv);
  
  // Add calculation note
  const noteDiv = document.createElement("div");
  noteDiv.className = "calculation-note";
  noteDiv.innerHTML = `
    <i class="fas fa-info-circle"></i>
    <span>Le CC est calculé automatiquement à partir de TD et/ou TP selon les règles LMD</span>
  `;
  gradeInputSection.appendChild(noteDiv);
  
  // Display grade inputs for each semester
  sems.forEach(sem => {
    displayGradeInputForSemester(sem);
  });
  
  // Re-attach event listener for calculate button
  const calculateBtn = $("calculate-semester");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => calculateCombinedSemesterResults(sems));
  }
}

// Display grade input for a specific semester (used in combined view)
function displayGradeInputForSemester(sem) {
  const gradeTableBody = $(`grade-table-${sem}`).querySelector("tbody");
  const mobileCardsContainer = $(`mobile-cards-container-${sem}`);
  gradeTableBody.innerHTML = "";
  if (mobileCardsContainer) mobileCardsContainer.innerHTML = "";

  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return;

  currentSemesterData.forEach((ue) => {
    // Table row for UE
    const ueRow = gradeTableBody.insertRow();
    ueRow.classList.add("ue-row");
    ueRow.innerHTML = `
      <td colspan="9"><i class="fas fa-cube"></i> ${ue.ue} - ${ue.type} (Crédits: ${ue.credit}, Coeff: ${ue.coeff})</td>
    `;

    // Mobile UE Card
    const ueCard = document.createElement("div");
    ueCard.classList.add("ue-card");
    ueCard.innerHTML = `
      <div class="ue-header">
        <i class="fas fa-cube"></i> ${ue.ue} - ${ue.type}
      </div>
    `;
    const ueCardBody = document.createElement("div");
    ueCardBody.classList.add("ue-card-body");

    ue.modules.forEach((mod) => {
      const savedModuleGrades = savedGrades[selectedSpecialty]?.[selectedCycle]?.[sem]?.[mod.code] || {};

      // Table row for Module with proper empty cell display
      const row = gradeTableBody.insertRow();
      row.setAttribute('data-module', mod.code);
      row.innerHTML = `
        <td>${mod.code}</td>
        <td>${mod.name}</td>
        <td>${mod.coeff}</td>
        <td>${mod.credit}</td>
        <td class="td-column">${mod.has_td ? `<input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="td" value="${savedModuleGrades.td !== undefined ? savedModuleGrades.td : ''}" min="0" max="20" step="0.01">` : '<span class="no-grade">—</span>'}</td>
        <td class="tp-column">${mod.has_tp ? `<input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="tp" value="${savedModuleGrades.tp !== undefined ? savedModuleGrades.tp : ''}" min="0" max="20" step="0.01">` : '<span class="no-grade">—</span>'}</td>
        <td class="exam-column">${mod.has_exam ? `<input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="exam" value="${savedModuleGrades.exam !== undefined ? savedModuleGrades.exam : ''}" min="0" max="20" step="0.01">` : '<span class="no-grade">—</span>'}</td>
        <td class="module-average">-</td>
        <td class="module-credits">-</td>
      `;

      // Mobile Module Card with dynamic input visibility
      const moduleCard = document.createElement("div");
      moduleCard.classList.add("module-card");
      moduleCard.innerHTML = `
        <div class="module-header">
          <div class="module-info">
            <span class="module-code">${mod.code}</span>
            <div class="module-name">${mod.name}</div>
            <div class="module-meta">Coeff: ${mod.coeff} | Crédit: ${mod.credit}</div>
          </div>
          <div class="module-results">
            <div class="result-item"><label>Moyenne:</label> <span class="module-average">-</span></div>
            <div class="result-item"><label>Crédits:</label> <span class="module-credits">-</span></div>
          </div>
        </div>
        <div class="module-inputs">
          ${mod.has_td ? `<div class="input-group">
            <label class="input-label">TD</label>
            <input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="td" value="${savedModuleGrades.td !== undefined ? savedModuleGrades.td : ''}" min="0" max="20" step="0.01">
          </div>` : ''}
          ${mod.has_tp ? `<div class="input-group">
            <label class="input-label">TP</label>
            <input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="tp" value="${savedModuleGrades.tp !== undefined ? savedModuleGrades.tp : ''}" min="0" max="20" step="0.01">
          </div>` : ''}
          ${mod.has_exam ? `<div class="input-group">
            <label class="input-label">Examen</label>
            <input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="exam" value="${savedModuleGrades.exam !== undefined ? savedModuleGrades.exam : ''}" min="0" max="20" step="0.01">
          </div>` : ''}
        </div>
      `;
      ueCardBody.appendChild(moduleCard);
    });
    
    // Add UE average row after all modules
    const ueAverageRow = gradeTableBody.insertRow();
    ueAverageRow.classList.add("ue-average-row");
    ueAverageRow.innerHTML = `
      <td colspan="7"><strong>Moyenne ${ue.ue}:</strong></td>
      <td class="ue-average">-</td>
      <td class="ue-credits">-</td>
    `;
    
    ueCard.appendChild(ueCardBody);
    
    // Add UE average card for mobile
    const ueAverageCard = document.createElement("div");
    ueAverageCard.classList.add("ue-average-card");
    ueAverageCard.innerHTML = `
      <div class="ue-average-header">
        <i class="fas fa-calculator"></i> Moyenne ${ue.ue}
      </div>
      <div class="ue-average-content">
        <div class="result-item">
          <label>Moyenne UE:</label>
          <span class="ue-average">–</span>
        </div>
        <div class="result-item">
          <label>Crédits UE:</label>
          <span class="ue-credits">–</span>
        </div>
      </div>
    `;
    ueCard.appendChild(ueAverageCard);
    
    if (mobileCardsContainer) mobileCardsContainer.appendChild(ueCard);
  });

  // Add event listeners for grade inputs
  document.querySelectorAll(".grade-input").forEach((input) => {
    input.addEventListener("input", saveGrade);
  });
}
function displayGradeInput(sem) {
  const gradeTableBody = $("grade-table").querySelector("tbody");
  const mobileCardsContainer = $("mobile-cards-container");
  gradeTableBody.innerHTML = "";
  if (mobileCardsContainer) mobileCardsContainer.innerHTML = "";

  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return;

  currentSemesterData.forEach((ue) => {
    // Table row for UE
    const ueRow = gradeTableBody.insertRow();
    ueRow.classList.add("ue-row");
    ueRow.innerHTML = `
      <td colspan="9"><i class="fas fa-cube"></i> ${ue.ue} - ${ue.type} (Crédits: ${ue.credit}, Coeff: ${ue.coeff})</td>
    `;

    // Mobile UE Card
    const ueCard = document.createElement("div");
    ueCard.classList.add("ue-card");
    ueCard.innerHTML = `
      <div class="ue-header">
        <i class="fas fa-cube"></i> ${ue.ue} - ${ue.type}
      </div>
    `;
    const ueCardBody = document.createElement("div");
    ueCardBody.classList.add("ue-card-body");

    ue.modules.forEach((mod) => {
      const savedModuleGrades = savedGrades[selectedSpecialty]?.[selectedCycle]?.[sem]?.[mod.code] || {};

      // Table row for Module with proper empty cell display
      const row = gradeTableBody.insertRow();
      row.setAttribute('data-module', mod.code);
      row.innerHTML = `
        <td>${mod.code}</td>
        <td>${mod.name}</td>
        <td>${mod.coeff}</td>
        <td>${mod.credit}</td>
        <td class="td-column">${mod.has_td ? `<input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="td" value="${savedModuleGrades.td !== undefined ? savedModuleGrades.td : ''}" min="0" max="20" step="0.01">` : '<span class="no-grade">—</span>'}</td>
        <td class="tp-column">${mod.has_tp ? `<input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="tp" value="${savedModuleGrades.tp !== undefined ? savedModuleGrades.tp : ''}" min="0" max="20" step="0.01">` : '<span class="no-grade">—</span>'}</td>
        <td class="exam-column">${mod.has_exam ? `<input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="exam" value="${savedModuleGrades.exam !== undefined ? savedModuleGrades.exam : ''}" min="0" max="20" step="0.01">` : '<span class="no-grade">—</span>'}</td>
        <td class="module-average">-</td>
        <td class="module-credits">-</td>
      `;

      // Mobile Module Card with dynamic input visibility
      const moduleCard = document.createElement("div");
      moduleCard.classList.add("module-card");
      moduleCard.innerHTML = `
        <div class="module-header">
          <div class="module-info">
            <span class="module-code">${mod.code}</span>
            <div class="module-name">${mod.name}</div>
            <div class="module-meta">Coeff: ${mod.coeff} | Crédit: ${mod.credit}</div>
          </div>
          <div class="module-results">
            <div class="result-item"><label>Moyenne:</label> <span class="module-average">-</span></div>
            <div class="result-item"><label>Crédits:</label> <span class="module-credits">-</span></div>
          </div>
        </div>
        <div class="module-inputs">
          ${mod.has_td ? `<div class="input-group">
            <label class="input-label">TD</label>
            <input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="td" value="${savedModuleGrades.td !== undefined ? savedModuleGrades.td : ''}" min="0" max="20" step="0.01">
          </div>` : ''}
          ${mod.has_tp ? `<div class="input-group">
            <label class="input-label">TP</label>
            <input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="tp" value="${savedModuleGrades.tp !== undefined ? savedModuleGrades.tp : ''}" min="0" max="20" step="0.01">
          </div>` : ''}
          ${mod.has_exam ? `<div class="input-group">
            <label class="input-label">Examen</label>
            <input type="number" class="grade-input" data-sem="${sem}" data-module="${mod.code}" data-type="exam" value="${savedModuleGrades.exam !== undefined ? savedModuleGrades.exam : ''}" min="0" max="20" step="0.01">
          </div>` : ''}
        </div>
      `;
      ueCardBody.appendChild(moduleCard);
    });
    
    // Add UE average row after all modules
    const ueAverageRow = gradeTableBody.insertRow();
    ueAverageRow.classList.add("ue-average-row");
    ueAverageRow.innerHTML = `
      <td colspan="7"><strong>Moyenne ${ue.ue}:</strong></td>
      <td class="ue-average">-</td>
      <td class="ue-credits">-</td>
    `;
    
    ueCard.appendChild(ueCardBody);
    
    // Add UE average card for mobile
    const ueAverageCard = document.createElement("div");
    ueAverageCard.classList.add("ue-average-card");
    ueAverageCard.innerHTML = `
      <div class="ue-average-header">
        <i class="fas fa-calculator"></i> Moyenne ${ue.ue}
      </div>
      <div class="ue-average-content">
        <div class="result-item">
          <label>Moyenne UE:</label>
          <span class="ue-average">–</span>
        </div>
        <div class="result-item">
          <label>Crédits UE:</label>
          <span class="ue-credits">–</span>
        </div>
      </div>
    `;
    ueCard.appendChild(ueAverageCard);
    
    if (mobileCardsContainer) mobileCardsContainer.appendChild(ueCard);
  });

  // Add event listeners for grade inputs
  document.querySelectorAll(".grade-input").forEach((input) => {
    input.addEventListener("input", saveGrade);
  });
}

// Sauvegarde des notes
function saveGrade(event) {
  const input = event.target;
  const sem = input.dataset.sem;
  const moduleCode = input.dataset.module;
  const type = input.dataset.type;
  let value = parseFloat(input.value);

  // Si le champ est vide, traiter comme 0 pour le calcul
  if (input.value === '' || isNaN(value)) {
    value = 0;
  }

  // Validate input value - prevent values above 20
  if (value < 0 || value > 20) {
    input.classList.add('input-invalid');
    input.classList.remove('input-valid');
    // Force the value to be within bounds
    if (value > 20) {
      input.value = '20';
      value = 20;
      showNotification("La note maximale est 20", "warning");
    } else if (value < 0) {
      input.value = '0';
      value = 0;
      showNotification("La note minimale est 0", "warning");
    }
  } else {
    input.classList.remove('input-invalid');
    if (input.value !== '') {
      input.classList.add('input-valid');
    } else {
      input.classList.remove('input-valid');
    }
  }

  if (!savedGrades[selectedSpecialty]) savedGrades[selectedSpecialty] = {};
  if (!savedGrades[selectedSpecialty][selectedCycle]) savedGrades[selectedSpecialty][selectedCycle] = {};
  if (!savedGrades[selectedSpecialty][selectedCycle][sem]) savedGrades[selectedSpecialty][selectedCycle][sem] = {};
  if (!savedGrades[selectedSpecialty][selectedCycle][sem][moduleCode]) savedGrades[selectedSpecialty][selectedCycle][sem][moduleCode] = {};

  // Sauvegarder la note (même si c'est 0 pour un champ vide)
  if (input.value !== '') {
    savedGrades[selectedSpecialty][selectedCycle][sem][moduleCode][type] = value;
  } else {
    // Pour les champs vides, on ne sauvegarde pas dans localStorage mais on utilise 0 pour le calcul
    delete savedGrades[selectedSpecialty][selectedCycle][sem][moduleCode][type];
  }
  
  localStorage.setItem("grades", JSON.stringify(savedGrades));

  // Automatically calculate and display module average
  calculateAndDisplayModuleAverage(sem, moduleCode);

  // Also update the UE average for the corresponding UE
  const ueCode = getUECodeForModule(sem, moduleCode);
  if (ueCode) {
    calculateAndDisplayUEAverage(sem, ueCode);
  }
}

// Calculate and display module average automatically
function calculateAndDisplayModuleAverage(sem, moduleCode) {
  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return;

  // Find the module in the semester data
  let targetModule = null;
  currentSemesterData.forEach(ue => {
    ue.modules.forEach(mod => {
      if (mod.code === moduleCode) {
        targetModule = mod;
      }
    });
  });

  if (!targetModule) return;

  // Get saved grades for this module
  const grades = savedGrades[selectedSpecialty]?.[selectedCycle]?.[sem]?.[moduleCode] || {};
  
  // Calculate module average using the logic
  const moduleAverage = logic.calculateModuleAverage(targetModule, grades, selectedSpecialty, sem);
  
  // Update the module average in the data
  targetModule.average = moduleAverage;

  // Update display in both table and mobile cards
  updateModuleAverageDisplay(sem, moduleCode, moduleAverage, targetModule.credit);
}

// Update module average display in table and mobile cards
function updateModuleAverageDisplay(sem, moduleCode, average, credit) {
  // Update in table (both single and combined views)
  const tableSelectors = [`#grade-table`, `#grade-table-${sem}`];
  
  tableSelectors.forEach(selector => {
    const table = document.querySelector(selector);
    if (table) {
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const inputs = row.querySelectorAll('.grade-input');
        if (inputs.length > 0 && inputs[0].dataset.module === moduleCode) {
          const avgCell = row.querySelector('.module-average');
          const creditsCell = row.querySelector('.module-credits');
          
          if (avgCell) {
            if (!isNaN(average)) {
              avgCell.textContent = average.toFixed(2);
              avgCell.className = `module-average ${average >= 10 ? 'text-success' : 'text-danger'}`;
            } else {
              avgCell.textContent = '–';
              avgCell.className = 'module-average';
            }
          }
          
          if (creditsCell) {
            if (!isNaN(average)) {
              const earnedCredits = average >= 10 ? credit : 0;
              creditsCell.textContent = earnedCredits;
              creditsCell.className = `module-credits ${average >= 10 ? 'text-success' : 'text-danger'}`;
            } else {
              creditsCell.textContent = '–';
              creditsCell.className = 'module-credits';
            }
          }
        }
      });
    }
  });

  // Update in mobile cards
  const mobileContainers = [`#mobile-cards-container`, `#mobile-cards-container-${sem}`];
  
  mobileContainers.forEach(containerSelector => {
    const container = document.querySelector(containerSelector);
    if (container) {
      const moduleCards = container.querySelectorAll('.module-card');
      moduleCards.forEach(card => {
        const inputs = card.querySelectorAll('.grade-input');
        if (inputs.length > 0 && inputs[0].dataset.module === moduleCode) {
          const avgSpan = card.querySelector('.module-average');
          const creditsSpan = card.querySelector('.module-credits');
          
          if (avgSpan) {
            if (!isNaN(average)) {
              avgSpan.textContent = average.toFixed(2);
              avgSpan.className = `module-average ${average >= 10 ? 'text-success' : 'text-danger'}`;
            } else {
              avgSpan.textContent = '–';
              avgSpan.className = 'module-average';
            }
          }
          
          if (creditsSpan) {
            if (!isNaN(average)) {
              const earnedCredits = average >= 10 ? credit : 0;
              creditsSpan.textContent = earnedCredits;
              creditsSpan.className = `module-credits ${average >= 10 ? 'text-success' : 'text-danger'}`;
            } else {
              creditsSpan.textContent = '–';
              creditsSpan.className = 'module-credits';
            }
          }
        }
      });
    }
  });
}

// Calculate single semester results
function calculateSingleSemesterResults(sem) {
  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return;

  let semesterTotalPoints = 0;
  let semesterTotalCoeff = 0;
  let semesterEarnedCredits = 0;

  currentSemesterData.forEach(ue => {
    let uePoints = 0;
    let ueCoeff = 0;
    let ueEarnedCredits = 0;

    ue.modules.forEach(mod => {
      const grades = savedGrades[selectedSpecialty]?.[selectedCycle]?.[sem]?.[mod.code] || {};
      const moduleAverage = logic.calculateModuleAverage(mod, grades, selectedSpecialty, sem);
      mod.average = moduleAverage;

      if (!isNaN(moduleAverage)) {
        uePoints += moduleAverage * mod.coeff;
        ueCoeff += mod.coeff;
        if (moduleAverage >= 10) {
          ueEarnedCredits += mod.credit;
        }
      }
    });

    const ueAverage = ueCoeff ? uePoints / ueCoeff : NaN;
    ue.average = ueAverage;

    if (!isNaN(ueAverage)) {
      semesterTotalPoints += ueAverage * ue.coeff;
      semesterTotalCoeff += ue.coeff;
      if (ueAverage >= 10) {
        semesterEarnedCredits += ue.credit;
      } else {
        semesterEarnedCredits += ueEarnedCredits;
      }
    }
  });

  const semesterAverage = semesterTotalCoeff ? semesterTotalPoints / semesterTotalCoeff : NaN;
  // If semester average >= 10, award full 30 credits regardless of individual module performance
  const semesterCredits = semesterAverage >= 10 ? 30 : semesterEarnedCredits;

  // Update the semesterDataMap with calculated averages and credits
  semesterDataMap[sem].average = semesterAverage;
  semesterDataMap[sem].credits = semesterCredits;

  // Update grade input table with calculated averages and credits
  updateGradeInputTableWithResults();

  // Display results
  displaySingleSemesterResults(sem, semesterAverage, semesterCredits);
}

// Calculate combined semester results
function calculateCombinedSemesterResults(sems) {
  let semesterResults = [];

  sems.forEach(sem => {
    const currentSemesterData = semesterDataMap[sem];
    if (!currentSemesterData) return;

    let semesterTotalPoints = 0;
    let semesterTotalCoeff = 0;
    let semesterEarnedCredits = 0;

    currentSemesterData.forEach(ue => {
      let uePoints = 0;
      let ueCoeff = 0;
      let ueEarnedCredits = 0;

      ue.modules.forEach(mod => {
        const grades = savedGrades[selectedSpecialty]?.[selectedCycle]?.[sem]?.[mod.code] || {};
        const moduleAverage = logic.calculateModuleAverage(mod, grades, selectedSpecialty, sem);
        mod.average = moduleAverage;

        if (!isNaN(moduleAverage)) {
          uePoints += moduleAverage * mod.coeff;
          ueCoeff += mod.coeff;
          if (moduleAverage >= 10) {
            ueEarnedCredits += mod.credit;
          }
        }
      });

      const ueAverage = ueCoeff ? uePoints / ueCoeff : NaN;
      ue.average = ueAverage;

      if (!isNaN(ueAverage)) {
        semesterTotalPoints += ueAverage * ue.coeff;
        semesterTotalCoeff += ue.coeff;
        if (ueAverage >= 10) {
          semesterEarnedCredits += ue.credit;
        } else {
          semesterEarnedCredits += ueEarnedCredits;
        }
      }
    });

    const semesterAverage = semesterTotalCoeff ? semesterTotalPoints / semesterTotalCoeff : NaN;
    // If semester average >= 10, award full 30 credits regardless of individual module performance
    const semesterCredits = semesterAverage >= 10 ? 30 : semesterEarnedCredits;

    // Update the semesterDataMap with calculated averages and credits
    semesterDataMap[sem].average = semesterAverage;
    semesterDataMap[sem].credits = semesterCredits;

    semesterResults.push({
      semester: sem,
      average: semesterAverage,
      credits: semesterCredits
    });
  });

  // Update grade input tables with calculated averages and credits
  updateCombinedGradeInputTablesWithResults(sems);

  // Display combined results
  displayCombinedSemesterResults(semesterResults);
}

// Display single semester results
function displaySingleSemesterResults(sem, average, credits) {
  const resultsSection = $("results-section");
  
  resultsSection.innerHTML = `
    <h2><i class="fas fa-chart-line"></i> Résultats - Semestre ${sem}</h2>
    
    <div class="results-grid">
      <div class="result-card semester-result-card">
        <h3><i class="fas fa-calendar"></i> Résultats du Semestre ${sem}</h3>
        <div class="result-item highlight">
          <label>Moyenne du Semestre ${sem}:</label>
          <span class="${average >= 10 ? 'text-success' : 'text-danger'}">${isNaN(average) ? '-' : average.toFixed(2)}</span>
        </div>
        <div class="result-item">
          <label>Crédits:</label>
          <span class="${credits === 30 ? 'text-success' : 'text-danger'}">${credits} / 30</span>
        </div>
        <div class="result-status">
          <span class="${average >= 10 ? 'text-success' : 'text-danger'}">${average >= 10 ? '🟩 Validé' : '🟥 Non validé'}</span>
        </div>
      </div>
      
      <div class="result-card annual-result-card">
        <h3><i class="fas fa-plus-circle"></i> Calcul Moyenne Annuelle</h3>
        <div class="input-group">
          <label for="other-semester-avg">Si vous connaissez la moyenne du semestre ${sem === 1 || sem === 3 ? (sem + 1) : (sem - 1)}, entrez-la:</label>
          <input type="number" id="other-semester-avg" min="0" max="20" step="0.01" placeholder="Ex: 15.50">
        </div>
        <div class="input-group">
          <label for="other-semester-credits">Crédits du semestre ${sem === 1 || sem === 3 ? (sem + 1) : (sem - 1)} (par défaut 30):</label>
          <input type="number" id="other-semester-credits" min="0" max="30" step="1" placeholder="Ex: 30">
          <button id="calculate-annual" class="btn btn-secondary">
            <i class="fas fa-chart-line"></i>
            Calculer Moyenne Annuelle
          </button>
        </div>
        <div id="annual-results" class="hidden">
          <div class="result-item highlight">
            <label>Moyenne Annuelle:</label>
            <span id="annual-average">–</span>
          </div>
          <div class="result-item">
            <label>Crédits Totaux:</label>
            <span id="annual-credits">–</span> / 60
          </div>
          <div class="result-status">
            <span id="annual-status">–</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  showSection("results-section");
  
  // Re-attach event listener for annual calculation
  const calculateAnnualBtn = $("calculate-annual");
  if (calculateAnnualBtn) {
    calculateAnnualBtn.addEventListener("click", () => calculateAnnualFromOtherSemester(sem, average, credits));
  }
}

// Display combined semester results
function displayCombinedSemesterResults(semesterResults) {
  const resultsSection = $("results-section");
  const semesterLabel = selectedCycle === "M1" ? "1+2" : "3+4";
  
  let resultsHTML = `
    <h2><i class="fas fa-chart-line"></i> Résultats - Semestre ${semesterLabel}</h2>
    
    <div class="results-grid">
      <div class="result-card semester-result-card">
        <h3><i class="fas fa-calendar"></i> Résultats Semestriels</h3>
  `;
  
  let totalAverage = 0;
  let totalCredits = 0;
  let validSemesters = 0;
  
  semesterResults.forEach(result => {
    resultsHTML += `
      <div class="result-item">
        <label>Moyenne Semestre ${result.semester}:</label>
        <span class="${result.average >= 10 ? 'text-success' : 'text-danger'}">${isNaN(result.average) ? '-' : result.average.toFixed(2)}</span>
      </div>
      <div class="result-item">
        <label>Crédits Semestre ${result.semester}:</label>
        <span class="${result.credits === 30 ? 'text-success' : 'text-danger'}">${result.credits} / 30</span>
      </div>
    `;
    
    if (!isNaN(result.average)) {
      totalAverage += result.average;
      validSemesters++;
    }
    totalCredits += result.credits;
  });
  
  const annualAverage = validSemesters > 0 ? totalAverage / validSemesters : NaN;
  
  // If annual average >= 10, award full 60 credits regardless of individual semester performance
  if (annualAverage >= 10) {
    totalCredits = 60;
  }
  
  resultsHTML += `
      </div>
      
      <div class="result-card annual-result-card">
        <h3><i class="fas fa-trophy"></i> Résultats Annuels</h3>
        <div class="result-item highlight">
          <label>Moyenne Annuelle:</label>
          <span class="${annualAverage >= 10 ? 'text-success' : 'text-danger'}">${isNaN(annualAverage) ? '-' : annualAverage.toFixed(2)}</span>
        </div>
        <div class="result-item">
          <label>Crédits Totaux:</label>
          <span class="${totalCredits >= 60 ? 'text-success' : 'text-danger'}">${totalCredits} / 60</span>
        </div>
        <div class="result-status">
          <span class="${annualAverage >= 10 ? 'text-success' : 'text-danger'}">${annualAverage >= 10 ? '🟩 Admis' : '🟥 Ajourné'}</span>
        </div>
      </div>
    </div>
  `;
  
  resultsSection.innerHTML = resultsHTML;
  showSection("results-section");
}

// Calculate annual average from other semester input
function calculateAnnualFromOtherSemester(currentSem, currentAverage, currentCredits) {
  const otherSemesterAvgInput = $("other-semester-avg");
  const otherSemesterCreditsInput = $("other-semester-credits");
  const annualResultsDiv = $("annual-results");
  const annualAverageSpan = $("annual-average");
  const annualCreditsSpan = $("annual-credits");
  const annualStatusSpan = $("annual-status");

  const otherSemesterAverage = parseFloat(otherSemesterAvgInput.value);
  let otherSemesterCredits = parseFloat(otherSemesterCreditsInput.value);

  if (isNaN(otherSemesterCredits)) {
    otherSemesterCredits = 30; // Default to 30 if not provided
  }

  if (isNaN(currentAverage) || isNaN(otherSemesterAverage)) {
    NotificationManager.show("Veuillez saisir une moyenne valide pour l'autre semestre.", "warning", 3000);
    return;
  }

  const totalAverage = (currentAverage * currentCredits + otherSemesterAverage * otherSemesterCredits) / (currentCredits + otherSemesterCredits);
  let totalCredits = currentCredits + otherSemesterCredits;
  
  // If annual average >= 10, award full 60 credits regardless of individual semester performance
  if (totalAverage >= 10) {
    totalCredits = 60;
  }

  annualAverageSpan.textContent = totalAverage.toFixed(2);
  annualAverageSpan.className = totalAverage >= 10 ? 'text-success' : 'text-danger';
  annualCreditsSpan.textContent = totalCredits;
  annualCreditsSpan.className = totalCredits >= 60 ? 'text-success' : 'text-danger';
  annualStatusSpan.textContent = totalAverage >= 10 ? "🟩 Admis" : "🟥 Ajourné";
  annualStatusSpan.className = totalAverage >= 10 ? 'text-success' : 'text-danger';

  annualResultsDiv.classList.remove("hidden");
}

// Update grade input table with results for single semester
function updateGradeInputTableWithResults() {
  const sem = selectedSemesters[0];
  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return;

  const gradeTableBody = $("grade-table").querySelector("tbody");
  const mobileCardsContainer = $("mobile-cards-container");

  let rowIndex = 0;
  currentSemesterData.forEach((ue, ueIndex) => {
    // Skip UE header row
    rowIndex++;

    ue.modules.forEach(mod => {
      // Update module row
      const row = gradeTableBody.rows[rowIndex];
      if (row) {
        const avgCell = row.querySelector(".module-average");
        const creditsCell = row.querySelector(".module-credits");
        if (avgCell) {
          avgCell.textContent = isNaN(mod.average) ? '-' : mod.average.toFixed(2);
          avgCell.className = `module-average ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
        }
        if (creditsCell) {
          creditsCell.textContent = mod.average >= 10 ? mod.credit : 0;
          creditsCell.className = `module-credits ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
        }
      }
      rowIndex++;
    });

    // Update UE average row
    const ueRow = gradeTableBody.rows[rowIndex];
    if (ueRow) {
      const ueAvgCell = ueRow.querySelector(".ue-average");
      const ueCreditsCell = ueRow.querySelector(".ue-credits");
      if (ueAvgCell) {
        ueAvgCell.textContent = isNaN(ue.average) ? '-' : ue.average.toFixed(2);
        ueAvgCell.className = `ue-average ${ue.average >= 10 ? 'text-success' : 'text-danger'}`;
      }
      if (ueCreditsCell) {
        ueCreditsCell.textContent = ue.average >= 10 ? ue.credit : 0;
        ueCreditsCell.className = `ue-credits ${ue.average >= 10 ? 'text-success' : 'text-danger'}`;
      }
    }
    rowIndex++;

    // Update mobile cards
    if (mobileCardsContainer) {
      const ueCards = mobileCardsContainer.querySelectorAll('.ue-card');
      if (ueCards[ueIndex]) {
        const moduleCards = ueCards[ueIndex].querySelectorAll('.module-card');
        ue.modules.forEach((mod, modIndex) => {
          if (moduleCards[modIndex]) {
            const avgSpan = moduleCards[modIndex].querySelector(".module-average");
            const creditsSpan = moduleCards[modIndex].querySelector(".module-credits");
            if (avgSpan) {
              avgSpan.textContent = isNaN(mod.average) ? '-' : mod.average.toFixed(2);
              avgSpan.className = `module-average ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
            }
            if (creditsSpan) {
              creditsSpan.textContent = mod.average >= 10 ? mod.credit : 0;
              creditsSpan.className = `module-credits ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
            }
          }
        });
      }
    }
  });
}

// Update grade input tables with results for combined semesters
function updateCombinedGradeInputTablesWithResults(sems) {
  sems.forEach(sem => {
    const currentSemesterData = semesterDataMap[sem];
    if (!currentSemesterData) return;

    const gradeTableBody = $(`grade-table-${sem}`).querySelector("tbody");
    const mobileCardsContainer = $(`mobile-cards-container-${sem}`);

    let rowIndex = 0;
    currentSemesterData.forEach((ue, ueIndex) => {
      // Skip UE header row
      rowIndex++;

      ue.modules.forEach(mod => {
        // Update module row
        const row = gradeTableBody.rows[rowIndex];
        if (row) {
          const avgCell = row.querySelector(".module-average");
          const creditsCell = row.querySelector(".module-credits");
          if (avgCell) {
            avgCell.textContent = isNaN(mod.average) ? '-' : mod.average.toFixed(2);
            avgCell.className = `module-average ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
          }
          if (creditsCell) {
            creditsCell.textContent = mod.average >= 10 ? mod.credit : 0;
            creditsCell.className = `module-credits ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
          }
        }
        rowIndex++;
      });

      // Update UE average row
      const ueRow = gradeTableBody.rows[rowIndex];
      if (ueRow) {
        const ueAvgCell = ueRow.querySelector(".ue-average");
        const ueCreditsCell = ueRow.querySelector(".ue-credits");
        if (ueAvgCell) {
          ueAvgCell.textContent = isNaN(ue.average) ? '-' : ue.average.toFixed(2);
          ueAvgCell.className = `ue-average ${ue.average >= 10 ? 'text-success' : 'text-danger'}`;
        }
        if (ueCreditsCell) {
          ueCreditsCell.textContent = ue.average >= 10 ? ue.credit : 0;
          ueCreditsCell.className = `ue-credits ${ue.average >= 10 ? 'text-success' : 'text-danger'}`;
        }
      }
      rowIndex++;

      // Update mobile cards
      if (mobileCardsContainer) {
        const ueCards = mobileCardsContainer.querySelectorAll('.ue-card');
        if (ueCards[ueIndex]) {
          const moduleCards = ueCards[ueIndex].querySelectorAll('.module-card');
          ue.modules.forEach((mod, modIndex) => {
            if (moduleCards[modIndex]) {
              const avgSpan = moduleCards[modIndex].querySelector(".module-average");
              const creditsSpan = moduleCards[modIndex].querySelector(".module-credits");
              if (avgSpan) {
                avgSpan.textContent = isNaN(mod.average) ? '-' : mod.average.toFixed(2);
                avgSpan.className = `module-average ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
              }
              if (creditsSpan) {
                creditsSpan.textContent = mod.average >= 10 ? mod.credit : 0;
                creditsSpan.className = `module-credits ${mod.average >= 10 ? 'text-success' : 'text-danger'}`;
              }
            }
          });

          // Update UE average card
          const ueAverageCard = ueCards[ueIndex].querySelector('.ue-average-card');
          if (ueAverageCard) {
            const ueAvgSpan = ueAverageCard.querySelector(".ue-average");
            const ueCreditsSpan = ueAverageCard.querySelector(".ue-credits");
            if (ueAvgSpan) {
              ueAvgSpan.textContent = isNaN(ue.average) ? '-' : ue.average.toFixed(2);
              ueAvgSpan.className = `ue-average ${ue.average >= 10 ? 'text-success' : 'text-danger'}`;
            }
            if (ueCreditsSpan) {
              ueCreditsSpan.textContent = ue.average >= 10 ? ue.credit : 0;
              ueCreditsSpan.className = `ue-credits ${ue.average >= 10 ? 'text-success' : 'text-danger'}`;
            }
          }
        }
      }
    });
  });
}

// Get UE code for a module
function getUECodeForModule(sem, moduleCode) {
  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return null;

  for (const ue of currentSemesterData) {
    for (const mod of ue.modules) {
      if (mod.code === moduleCode) {
        return ue.ue;
      }
    }
  }
  return null;
}

// Calculate and display UE average automatically
function calculateAndDisplayUEAverage(sem, ueCode) {
  const currentSemesterData = semesterDataMap[sem];
  if (!currentSemesterData) return;

  const ueData = currentSemesterData.find(ue => ue.ue === ueCode);
  if (!ueData) return;

  let uePoints = 0;
  let ueCoeff = 0;
  let ueEarnedCredits = 0;

  // Calculate UE average from its modules
  ueData.modules.forEach(mod => {
    const grades = savedGrades[selectedSpecialty]?.[selectedCycle]?.[sem]?.[mod.code] || {};
    const moduleAverage = logic.calculateModuleAverage(mod, grades, selectedSpecialty, sem);
    mod.average = moduleAverage;

    if (!isNaN(moduleAverage)) {
      uePoints += moduleAverage * mod.coeff;
      ueCoeff += mod.coeff;
      if (moduleAverage >= 10) {
        ueEarnedCredits += mod.credit;
      }
    }
  });

  const ueAverage = ueCoeff ? uePoints / ueCoeff : NaN;
  ueData.average = ueAverage;

  // Update UE average display in both table and mobile cards
  updateUEAverageDisplay(sem, ueCode, ueAverage, ueData.credit, ueEarnedCredits);
}

// Update UE average display in table and mobile cards
function updateUEAverageDisplay(sem, ueCode, average, totalCredit, earnedCredits) {
  // Update in table (both single and combined views)
  const tableSelectors = [`#grade-table`, `#grade-table-${sem}`];
  
  tableSelectors.forEach(selector => {
    const table = document.querySelector(selector);
    if (table) {
      const rows = table.querySelectorAll('tbody tr.ue-average-row');
      rows.forEach(row => {
        const ueText = row.querySelector('td')?.textContent;
        if (ueText && ueText.includes(ueCode)) {
          const avgCell = row.querySelector('.ue-average');
          const creditsCell = row.querySelector('.ue-credits');
          
          if (avgCell) {
            if (!isNaN(average)) {
              avgCell.textContent = average.toFixed(2);
              avgCell.className = `ue-average ${average >= 10 ? 'text-success' : 'text-danger'}`;
            } else {
              avgCell.textContent = '–';
              avgCell.className = 'ue-average';
            }
          }
          
          if (creditsCell) {
            if (!isNaN(average)) {
              const finalCredits = average >= 10 ? totalCredit : earnedCredits;
              creditsCell.textContent = finalCredits;
              creditsCell.className = `ue-credits ${average >= 10 ? 'text-success' : 'text-danger'}`;
            } else {
              creditsCell.textContent = '–';
              creditsCell.className = 'ue-credits';
            }
          }
        }
      });
    }
  });

  // Update in mobile cards
  const mobileContainers = [`#mobile-cards-container`, `#mobile-cards-container-${sem}`];
  
  mobileContainers.forEach(containerSelector => {
    const container = document.querySelector(containerSelector);
    if (container) {
      const ueCards = container.querySelectorAll('.ue-card');
      ueCards.forEach(card => {
        const ueHeader = card.querySelector('.ue-header');
        if (ueHeader && ueHeader.textContent.includes(ueCode)) {
          const ueAverageCard = card.querySelector('.ue-average-card');
          if (ueAverageCard) {
            const avgSpan = ueAverageCard.querySelector('.ue-average');
            const creditsSpan = ueAverageCard.querySelector('.ue-credits');
            
            if (avgSpan) {
              if (!isNaN(average)) {
                avgSpan.textContent = average.toFixed(2);
                avgSpan.className = `ue-average ${average >= 10 ? 'text-success' : 'text-danger'}`;
              } else {
                avgSpan.textContent = '–';
                avgSpan.className = 'ue-average';
              }
            }
            
            if (creditsSpan) {
              if (!isNaN(average)) {
                const finalCredits = average >= 10 ? totalCredit : earnedCredits;
                creditsSpan.textContent = finalCredits;
                creditsSpan.className = `ue-credits ${average >= 10 ? 'text-success' : 'text-danger'}`;
              } else {
                creditsSpan.textContent = '–';
                creditsSpan.className = 'ue-credits';
              }
            }
          }
        }
      });
    }
  });
}

// Show notification function
function showNotification(message, type = 'info') {
  const notificationContainer = document.getElementById('notification-container') || createNotificationContainer();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${getNotificationIcon(type)}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  notificationContainer.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Create notification container if it doesn't exist
function createNotificationContainer() {
  const container = document.createElement('div');
  container.id = 'notification-container';
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    max-width: 400px;
  `;
  document.body.appendChild(container);
  return container;
}

// Get notification icon based on type
function getNotificationIcon(type) {
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };
  return icons[type] || icons.info;
}

// Initialisation de l'application au chargement du DOM
document.addEventListener('DOMContentLoaded', initializeApp);




class NotificationManager {
  static show(message, type = 'info', duration = 3000) {
    const container = document.getElementById('notification-container');
    if (!container) {
      console.error('Notification container not found');
      return;
    }

    const notification = document.createElement('div');
    notification.classList.add('notification', type);

    let iconClass = '';
    switch (type) {
      case 'success':
        iconClass = 'fas fa-check-circle';
        break;
      case 'error':
        iconClass = 'fas fa-times-circle';
        break;
      case 'warning':
        iconClass = 'fas fa-exclamation-triangle';
        break;
      case 'info':
      default:
        iconClass = 'fas fa-info-circle';
        break;
    }

    notification.innerHTML = `
      <i class="${iconClass}"></i>
      <div class="notification-content">
        <div class="notification-message">${message}</div>
      </div>
    `;

    container.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('slideOut');
      notification.addEventListener('animationend', () => {
        notification.remove();
      });
    }, duration);
  }
}



// Fonctions de sauvegarde et chargement des sélections
function saveSelectionData() {
  try {
    const selectionData = {
      selectedCycle: selectedCycle,
      selectedSpecialty: selectedSpecialty,
      selectedSemesters: selectedSemesters,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('calculatorData', JSON.stringify(selectionData));
    console.log('Données de sélection sauvegardées:', selectionData);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des sélections:', error);
  }
}

function loadSelectionData() {
  try {
    const savedData = localStorage.getItem('calculatorData');
    if (savedData) {
      const data = JSON.parse(savedData);
      
      // Restaurer les variables globales si elles existent
      if (data.selectedCycle) {
        selectedCycle = data.selectedCycle;
        window.selectedCycle = data.selectedCycle;
      }
      
      if (data.selectedSpecialty) {
        selectedSpecialty = data.selectedSpecialty;
        window.selectedSpecialty = data.selectedSpecialty;
      }
      
      if (data.selectedSemesters) {
        selectedSemesters = data.selectedSemesters;
        window.selectedSemesters = data.selectedSemesters;
      }
      
      console.log('Données de sélection chargées:', data);
      return data;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des sélections:', error);
  }
  return null;
}

// S'assurer que les variables sont disponibles globalement
window.selectedCycle = selectedCycle;
window.selectedSpecialty = selectedSpecialty;
window.selectedSemesters = selectedSemesters;

// Charger les données au démarrage
document.addEventListener('DOMContentLoaded', function() {
  loadSelectionData();
});