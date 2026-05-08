import type { FiliereInfo } from '@/types';
import { et } from 'date-fns/locale/et';  

export const FILIERES_DATA: Record<string, FiliereInfo> = {
  Fullstack: {
    nom: 'Fullstack',
    description: 'Le développeur fullstack maîtrise à la fois le front-end  et le back-end. Il conçoit et déploie des applications web complètes, de l\'interface utilisateur jusqu\'à l\'infrastructure serveur. C\'est le profil le plus polyvalent du monde du développement, capable de travailler seul sur un produit entier ou de s\'intégrer dans une équipe pluridisciplinaire.',
    metiers: ['Développeur Web Fullstack', 'Lead Developer', 'Architecte Frontend', 'DevOps Engineer'],
    salaire: 'Le salaire moyen d\'un développeur fullstack senior aux États-Unis est de 142 000 $/an. En Europe occidentale, la fourchette se situe entre 55 000 et 90 000 €/an selon les pays. En Afrique du Nord et au Moyen-Orient, les profils expérimentés gagnent entre 15 000 et 40 000 $/an, avec une forte prime pour ceux qui travaillent à distance pour des clients européens ou américains',
    icon: 'Code2',
    color: '#3b82f6',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
  },
  Cyber: {
    nom: 'Cyber',
    description: 'La cybersécurité regroupe l\'ensemble des pratiques visant à protéger les systèmes informatiques, les réseaux et les données contre les attaques malveillantes. Le spécialiste en cybersécurité pense comme un attaquant pour mieux défendre — il analyse les vulnérabilités, simule des intrusions, surveille les incidents en temps réel et met en place des politiques de sécurité. Dans un monde où les cyberattaques coûtent des milliards chaque année, ce profil est l\'un des plus recherchés et des mieux protégés contre l\'automatisation.',
    metiers: ['Analyste SOC', 'Pentester', 'Auditeur Sécurité', 'Consultant Cybersécurité'],
    salaire: 'Le salaire moyen d\'un analyste cybersécurité mid-level aux États-Unis est de 118 000 $/an en 2025. La moyenne mondiale pour un pentesteur tourne autour de 75 000 $/an, avec des écarts importants selon les régions. En Europe occidentale, les spécialistes confirmés gagnent entre 60 000 et 120 000 €/an. La pénurie mondiale de talents maintient les salaires à la hausse.',
    icon: 'Shield',
    color: '#ef4444',
    bgGradient: 'from-red-500/20 to-orange-500/20',
  },
  'Big Data': {
    nom: 'Big Data',
    description: 'Le Big Data concerne la collecte, le stockage, le traitement et l\'analyse de volumes massifs de données. L\'ingénieur data construit les pipelines qui alimentent les systèmes décisionnels, tandis que l\'analyste extrait des insights actionnables pour guider les stratégies d\'entreprise. C\'est une filière à l\'intersection de l\'informatique, des mathématiques et du monde des affaires — indispensable dans les secteurs de la finance, de la santé, du e-commerce et des télécommunications.',
    metiers: ['Data Engineer', 'Big Data Architect', 'Data Analyst', 'BI Developer'],
    salaire: 'Le salaire médian d\'un data engineer est d\'environ 125 000 $/an aux États-Unis. En Europe, les data engineers seniors gagnent entre 65 000 et 95 000 €/an. La demande est en forte croissance dans les marchés émergents, notamment au Maroc, en Afrique du Sud et aux Émirats arabes unis. Les profils spécialisés en cloud data (AWS, Azure, GCP) bénéficient d\'une prime significative.',
    icon: 'Database',
    color: '#10b981',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
  },
  IA: {
    nom: 'IA',
    description: 'L\'IA est la discipline qui consiste à concevoir des systèmes capables d\'apprendre, de raisonner et de prendre des décisions de manière autonome. Le spécialiste en IA développe des modèles de machine learning et de deep learning, les entraîne sur de grandes quantités de données et les déploie en production. C\'est la filière la plus en tension du marché mondial en 2025, avec une demande qui dépasse largement l\'offre de talents disponibles.',
    metiers: ['ML Engineer', 'Data Scientist', 'AI Researcher', 'MLOps Engineer'],
    salaire: 'En 2026, le salaire moyen d\'un Machine Learning Engineer aux États-Unis est de 183 000 $/an. Les salaires des ingénieurs IA ont atteint en moyenne 206 000 $/an en 2025, avec une hausse de 50 000 $ par rapport aux années précédentes. En Europe occidentale, les profils mid-level gagnent entre 70 000 et 120 000 €/an.',
    icon: 'Brain',
    color: '#8b5cf6',
    bgGradient: 'from-violet-500/20 to-purple-500/20',
  },
  Robotique: {
    nom: 'Robotique',
    description: 'La robotique combine mécanique, électronique et informatique pour concevoir des systèmes autonomes ou semi-autonomes capables d\'interagir avec le monde physique. L\'ingénieur roboticien travaille sur des robots industriels, médicaux, de service ou de défense. Il programme des systèmes embarqués, conçoit des algorithmes de contrôle et intègre des capteurs pour permettre à la machine de percevoir et d\'agir sur son environnement. Filière en forte expansion avec l\'essor de l\'automatisation industrielle et de la chirurgie robotisée.',
    metiers: ['Robotics Engineer', 'IoT Developer', 'Automation Specialist', 'Embedded Systems Engineer'],
    salaire: 'Le salaire médian total d\'un ingénieur robotique est de 140 000 $/an. Aux États-Unis, la moyenne atteint 148 000 $/an toutes compensations incluses. En Europe, les spécialistes travaillant dans l\'automobile ou l\'aéronautique gagnent entre 55 000 et 100 000 €/an.',
    icon: 'Bot',
    color: '#f59e0b',
    bgGradient: 'from-amber-500/20 to-yellow-500/20',
  },
};

export const MBTI_OPTIONS = [
  'INTJ', 'INTP', 'ISTJ', 'ISTP', 'INFJ', 'INFP',
  'ENTJ', 'ENTP', 'ESTJ', 'ESTP', 'ENFJ', 'ENFP',
  'ISFJ', 'ISFP', 'ESFJ', 'ESFP',
];

export const QUESTIONS = {
  programmation: {
    id: 'Q3',
    label: 'Programmation',
    question: 'Comment évalues-tu tes compétences en programmation globale ?',
    min: 1, max: 5,
    labels: ['Débutant', 'Avancé'],
  },
  maths: [
    { id: 'analyse', label: 'Analyse Mathématique', question: 'Niveau en analyse (calcul différentiel, intégral, etc.)' },
    { id: 'algebre', label: 'Algèbre Linéaire', question: 'Niveau en algèbre (matrices, espaces vectoriels, etc.)' },
    { id: 'proba_stats', label: 'Probabilités & Statistiques', question: 'Niveau en probabilités et statistiques' },
    { id: 'analyse_num', label: 'Analyse Numérique', question: 'Niveau en analyse numérique et méthodes numériques' },
  ],
  extra: [
    { id: 'bdd', label: 'Bases de Données', question: 'Niveau en conception et gestion de bases de données' },
    { id: 'reseaux', label: 'Réseaux', question: 'Niveau en réseaux informatiques et protocoles' },
    { id: 'electronique', label: 'Électronique', question: 'Niveau en électronique et systèmes embarqués' },
  ],
  comportement: [
    { id: 'Q5', label: 'Sécurité', question: 'Tu t\'intéresses à la sécurité informatique et la protection des données ?' },
    { id: 'Q6', label: 'Interfaces', question: 'Tu aimes concevoir des interfaces utilisateur attractives et intuitives ?' },
    { id: 'Q7', label: 'Données', question: 'Tu es fasciné par l\'analyse et le traitement de grandes quantités de données ?' },
    { id: 'Q8_comp', label: 'Intelligence Artificielle', question: 'L\'intelligence artificielle et le machine learning te passionnent ?' },
    { id: 'Q9', label: 'Hardware', question: 'Tu préfères travailler sur du matériel physique plutôt que du logiciel pur ?' },
    { id: 'Q10', label: 'Problèmes complexes', question: 'Tu apprécies résoudre des problèmes mathématiques et algorithmiques complexes ?' },
    { id: 'Q11', label: 'Défis techniques', question: 'Tu aimes les défis techniques et la recherche de vulnérabilités ?' },
  ],
  choix: [
    {
      id: 'Q12',
      label: 'Préférence A',
      question: 'Quel type de projet te motive le plus ?',
      options: [
        { value: 'A', label: 'Créer une application web complète avec une belle interface' },
        { value: 'B', label: 'Sécuriser un réseau et trouver des failles' },
        { value: 'C', label: 'Analyser des millions de données pour en extraire des insights' },
        { value: 'D', label: 'Développer un modèle prédictif intelligent' },
        { value: 'E', label: 'Construire un robot autonome' },
      ],
    },
    {
      id: 'Q13',
      label: 'Préférence B',
      question: 'Dans quel environnement tu t\'épanouis le plus ?',
      options: [
        { value: 'A', label: 'Startup tech agile avec livraisons fréquentes' },
        { value: 'B', label: 'Entreprise avec enjeux sécurité critiques' },
        { value: 'C', label: 'Data-driven company avec culture analytics' },
        { value: 'D', label: 'Lab R&D avec recherche fondamentale' },
        { value: 'E', label: 'Industrie avec systèmes physiques et IoT' },
      ],
    },
  ],
};
