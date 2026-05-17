import type { Reponses, Resultats, Filiere } from '@/types';
import { FILIERES } from '@/types';

export const POIDS_PROG: Record<Filiere, number> = {
  Fullstack: 3, Cyber: 2, 'Big Data': 2, IA: 2, Robotique: 2
};

export const POIDS_MATH: Record<string, Record<Filiere, number>> = {
  analyse:     { Fullstack: 1, Cyber: 1, 'Big Data': 2, IA: 2, Robotique: 2 },
  algebre:     { Fullstack: 1, Cyber: 1, 'Big Data': 2, IA: 3, Robotique: 2 },
  proba_stats: { Fullstack: 1, Cyber: 1, 'Big Data': 3, IA: 3, Robotique: 0 },
  analyse_num: { Fullstack: 1, Cyber: 0, 'Big Data': 1, IA: 3, Robotique: 2 },
};

export const POIDS_EXTRA: Record<string, Record<Filiere, number>> = {
  bdd:          { Fullstack: 2, Cyber: 1, 'Big Data': 3, IA: 1, Robotique: 0 },
  reseaux:      { Fullstack: 1, Cyber: 3, 'Big Data': 1, IA: 0, Robotique: 2 },
  electronique: { Fullstack: 0, Cyber: 1, 'Big Data': 0, IA: 1, Robotique: 3 },
};

export const COMPORTEMENTALES = [
  { condition: (r: Reponses) => (r.Q5 ?? 0) >= 4,
    poids: { Fullstack: 1, Cyber: 3, 'Big Data': 1, IA: 2, Robotique: 1 } },
  { condition: (r: Reponses) => (r.Q6 ?? 0) >= 4,
    poids: { Fullstack: 3, Cyber: 0, 'Big Data': 1, IA: 0, Robotique: 2 } },
  { condition: (r: Reponses) => (r.Q7 ?? 0) >= 4,
    poids: { Fullstack: 1, Cyber: 0, 'Big Data': 3, IA: 2, Robotique: 0 } },
  { condition: (r: Reponses) => (r.Q8_comp ?? 0) >= 4,
    poids: { Fullstack: 1, Cyber: 1, 'Big Data': 0, IA: 3, Robotique: 2 } },
  { condition: (r: Reponses) => (r.Q9 ?? 0) >= 4,
    poids: { Fullstack: 0, Cyber: 1, 'Big Data': 2, IA: 3, Robotique: 0 } },
  { condition: (r: Reponses) => (r.Q9 ?? 0) <= 2,
    poids: { Fullstack: 1, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 3 } },
  { condition: (r: Reponses) => (r.Q10 ?? 0) >= 4,
    poids: { Fullstack: 0, Cyber: 1, 'Big Data': 2, IA: 3, Robotique: 1 } },
  { condition: (r: Reponses) => (r.Q11 ?? 0) >= 4,
    poids: { Fullstack: 1, Cyber: 3, 'Big Data': 0, IA: 2, Robotique: 2 } },
];

export const CHOIX_Q12: Record<string, Record<Filiere, number>> = {
  A: { Fullstack: 3, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 1 },
  B: { Fullstack: 0, Cyber: 3, 'Big Data': 1, IA: 0, Robotique: 0 },
  C: { Fullstack: 1, Cyber: 0, 'Big Data': 3, IA: 1, Robotique: 0 },
  D: { Fullstack: 0, Cyber: 0, 'Big Data': 1, IA: 3, Robotique: 1 },
  E: { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 1, Robotique: 3 },
};

export const CHOIX_Q13: Record<string, Record<Filiere, number>> = {
  A: { Fullstack: 3, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 1 },
  B: { Fullstack: 0, Cyber: 3, 'Big Data': 0, IA: 0, Robotique: 0 },
  C: { Fullstack: 1, Cyber: 0, 'Big Data': 3, IA: 1, Robotique: 0 },
  D: { Fullstack: 0, Cyber: 0, 'Big Data': 1, IA: 3, Robotique: 1 },
  E: { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 1, Robotique: 3 },
};

export const MBTI_MAP: Record<string, Record<Filiere, number>> = {
  INTJ: { Fullstack: 1, Cyber: 2, 'Big Data': 3, IA: 3, Robotique: 1 },
  INTP: { Fullstack: 0, Cyber: 2, 'Big Data': 3, IA: 3, Robotique: 2 },
  ISTJ: { Fullstack: 1, Cyber: 3, 'Big Data': 2, IA: 1, Robotique: 2 },
  ISTP: { Fullstack: 1, Cyber: 2, 'Big Data': 1, IA: 1, Robotique: 3 },
  INFJ: { Fullstack: 2, Cyber: 1, 'Big Data': 2, IA: 2, Robotique: 0 },
  INFP: { Fullstack: 2, Cyber: 0, 'Big Data': 2, IA: 1, Robotique: 0 },
  ENTJ: { Fullstack: 2, Cyber: 1, 'Big Data': 3, IA: 2, Robotique: 1 },
  ENTP: { Fullstack: 2, Cyber: 2, 'Big Data': 1, IA: 3, Robotique: 1 },
  ESTJ: { Fullstack: 2, Cyber: 3, 'Big Data': 2, IA: 0, Robotique: 1 },
  ESTP: { Fullstack: 2, Cyber: 1, 'Big Data': 0, IA: 0, Robotique: 3 },
  ENFJ: { Fullstack: 3, Cyber: 0, 'Big Data': 1, IA: 1, Robotique: 0 },
  ENFP: { Fullstack: 3, Cyber: 0, 'Big Data': 1, IA: 2, Robotique: 0 },
  ISFJ: { Fullstack: 2, Cyber: 2, 'Big Data': 2, IA: 0, Robotique: 1 },
  ISFP: { Fullstack: 2, Cyber: 0, 'Big Data': 1, IA: 0, Robotique: 2 },
  ESFJ: { Fullstack: 3, Cyber: 0, 'Big Data': 1, IA: 0, Robotique: 0 },
  ESFP: { Fullstack: 3, Cyber: 0, 'Big Data': 1, IA: 0, Robotique: 2 },
};
export const MBTI_FAMILY_MAP: Record<string, Record<Filiere, number>> = {
  NT: { Fullstack: 1, Cyber: 2, 'Big Data': 3, IA: 3, Robotique: 2 },
  NF: { Fullstack: 3, Cyber: 0, 'Big Data': 2, IA: 2, Robotique: 0 },
  SJ: { Fullstack: 2, Cyber: 3, 'Big Data': 2, IA: 1, Robotique: 2 },
  SP: { Fullstack: 2, Cyber: 1, 'Big Data': 1, IA: 1, Robotique: 3 },
};
export const CHOIX_Q14: Record<string, Record<Filiere, number>> = {
  A: { Fullstack: 3, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 1 },
  B: { Fullstack: 0, Cyber: 3, 'Big Data': 0, IA: 0, Robotique: 0 },
  C: { Fullstack: 0, Cyber: 0, 'Big Data': 3, IA: 1, Robotique: 0 },
  D: { Fullstack: 0, Cyber: 0, 'Big Data': 1, IA: 3, Robotique: 0 },
  E: { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 1, Robotique: 3 },
};

export const CHOIX_Q15: Record<string, Record<Filiere, number>> = {
  A: { Fullstack: 3, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 1 },
  B: { Fullstack: 0, Cyber: 3, 'Big Data': 1, IA: 0, Robotique: 0 },
  C: { Fullstack: 1, Cyber: 0, 'Big Data': 3, IA: 1, Robotique: 0 },
  D: { Fullstack: 0, Cyber: 0, 'Big Data': 1, IA: 3, Robotique: 0 },
  E: { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 1, Robotique: 3 },
};
export const MBTI_POIDS = 1.5;

export function calculerScore(reponses: Reponses): Resultats {
  const scores: Record<Filiere, number> = { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 0 };
  const scoreMax: Record<Filiere, number> = { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 0 };

  // Programmation
  for (const f of FILIERES) {
    scores[f] += (reponses.Q3 ?? 0) * POIDS_PROG[f];
    scoreMax[f] += 5 * POIDS_PROG[f];
  }

  // Mathématiques
  for (const [matiere, poidsMap] of Object.entries(POIDS_MATH)) {
    const val = (reponses as Record<string, number | string>)[matiere] as number ?? 0;
    for (const f of FILIERES) {
      scores[f] += val * poidsMap[f];
      scoreMax[f] += 5 * poidsMap[f];
    }
  }

  // Extra
  for (const [matiere, poidsMap] of Object.entries(POIDS_EXTRA)) {
    const val = (reponses as Record<string, number | string>)[matiere] as number ?? 0;
    for (const f of FILIERES) {
      scores[f] += val * poidsMap[f];
      scoreMax[f] += 5 * poidsMap[f];
    }
  }

  // Comportementales
  for (const regle of COMPORTEMENTALES) {
    for (const f of FILIERES) {
      const poids = regle.poids[f];
      scoreMax[f] += poids;
      if (regle.condition(reponses)) {
        scores[f] += poids;
      }
    }
  }

  // Q12
  const choix12 = (reponses.Q12 ?? '').toUpperCase();
  if (choix12 in CHOIX_Q12) {
    for (const f of FILIERES) {
      scores[f] += CHOIX_Q12[choix12][f];
    }
  }
  for (const f of FILIERES) {
    scoreMax[f] += 3;
  }

  // Q13
  const choix13 = (reponses.Q13 ?? '').toUpperCase();
  if (choix13 in CHOIX_Q13) {
    for (const f of FILIERES) {
      scores[f] += CHOIX_Q13[choix13][f];
    }
  }
  for (const f of FILIERES) {
    scoreMax[f] += 3;
  }

  // MBTI
  const mbti = reponses.MBTI?.toUpperCase();
  if (mbti && mbti in MBTI_MAP) {
    for (const f of FILIERES) {
      scores[f] += MBTI_MAP[mbti][f] * MBTI_POIDS;
      scoreMax[f] += 3 * MBTI_POIDS;
    }
  }
  const mbtiFamily = reponses.MBTI_FAMILY?.toUpperCase();
if (!mbti && mbtiFamily && mbtiFamily in MBTI_FAMILY_MAP) {
  for (const f of FILIERES) {
    scores[f] += MBTI_FAMILY_MAP[mbtiFamily][f] * MBTI_POIDS;
    scoreMax[f] += 3 * MBTI_POIDS;
  }
}
// Q14
const choix14 = (reponses.Q14 ?? '').toUpperCase();
if (choix14 in CHOIX_Q14) {
  for (const f of FILIERES) {
    scores[f] += CHOIX_Q14[choix14][f];
  }
}
for (const f of FILIERES) {
  scoreMax[f] += 3;
}

// Q15
const choix15 = (reponses.Q15 ?? '').toUpperCase();
if (choix15 in CHOIX_Q15) {
  for (const f of FILIERES) {
    scores[f] += CHOIX_Q15[choix15][f];
  }
}
for (const f of FILIERES) {
  scoreMax[f] += 3;
}


  const pourcentages: Record<Filiere, number> = {
    Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 0
  };
  for (const f of FILIERES) {
    pourcentages[f] = scoreMax[f] > 0 ? Math.round((scores[f] / scoreMax[f]) * 100 * 10) / 10 : 0;
  }

  const top3 = Object.entries(pourcentages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([filiere, score]) => ({ filiere: filiere as Filiere, score }));

  return { scores, scoreMax, pourcentages, top3 };
}
