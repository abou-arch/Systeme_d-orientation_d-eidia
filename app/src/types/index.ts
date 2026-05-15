export const FILIERES = ['Fullstack', 'Cyber', 'Big Data', 'IA', 'Robotique'] as const;
export type Filiere = typeof FILIERES[number];

export interface Reponses {
  Q3?: number;
  MBTI_FAMILY?: string; 
  analyse?: number;
  algebre?: number;
  proba_stats?: number;
  analyse_num?: number;
  bdd?: number;
  reseaux?: number;
  electronique?: number;
  Q5?: number;
  Q6?: number;
  Q7?: number;
  Q8_comp?: number;
  Q9?: number;
  Q10?: number;
  Q11?: number;
  Q12?: string;
  Q13?: string;
  MBTI?: string;
  [key: string]: number | string | undefined;
}

export interface Resultats {
  scores: Record<Filiere, number>;
  scoreMax: Record<Filiere, number>;
  pourcentages: Record<Filiere, number>;
  top3: { filiere: Filiere; score: number }[];
}

export interface FiliereInfo {
  nom: Filiere;
  description: string;
  metiers: string[];
  salaire: string;
  icon: string;
  color: string;
  bgGradient: string;
}

export interface Soumission {
  id: string;
  nom_complet: string;
  matricule: string;
  date: string;
  top3: { filiere: Filiere; score: number }[];
}
