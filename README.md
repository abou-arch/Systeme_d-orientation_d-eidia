# Système d'Orientation EIDIA

> Application web d'aide à l'orientation des étudiants vers la filière la mieux adaptée à leur profil parmi cinq spécialités : Fullstack, Cybersécurité, Big Data, Intelligence Artificielle et Robotique.

🔗 **Démo en ligne** : [abou-arch.github.io/Systeme_d-orientation_d-eidia](https://abou-arch.github.io/Systeme_d-orientation_d-eidia/)

---

## ✨ Fonctionnalités

- **Questionnaire intelligent en 6 étapes** : identité, programmation, mathématiques, compétences techniques, personnalité, préférences
- **Moteur de scoring pondéré** : calcul personnalisé du score par filière sur la base de plus de 20 critères
- **Intégration MBTI optionnelle** : type précis (16 personnalités) ou grande famille (NT, NF, SJ, SP) avec descriptions intégrées
- **Résultats visuels** : Top 3 des filières recommandées avec pourcentages de compatibilité
- **Espace admin** : consultation des soumissions, statistiques globales, suppression des entrées
- **Persistance locale** : sauvegarde des soumissions via `localStorage` (matricule unique par étudiant)
- **Interface responsive** : design moderne avec animations fluides

---

## 🛠️ Stack technique

| Catégorie | Technologie |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Routing | React Router |
| Icônes | Lucide React |
| Déploiement | GitHub Pages |

---

## 🚀 Installation

### Prérequis
- Node.js 18+ et npm

### Démarrage local

```bash
# Cloner le dépôt
git clone https://github.com/abou-arch/Systeme_d-orientation_d-eidia.git
cd Systeme_d-orientation_d-eidia/app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application est accessible sur `http://localhost:3000`.

### Build et déploiement

```bash
npm run build       # Compile en production
npm run deploy      # Déploie sur GitHub Pages
```

---

## 📁 Structure du projet

```
app/
├── src/
│   ├── components/     # Composants UI réutilisables
│   ├── hooks/          # Hooks personnalisés (useOrientation, useAdmin)
│   ├── lib/
│   │   ├── data.ts     # Questions et options du questionnaire
│   │   └── engine.ts   # Moteur de calcul des scores
│   ├── pages/          # Pages principales (Home, Questionnaire, Results, Admin)
│   └── types/          # Définitions TypeScript
├── public/             # Assets statiques
└── vite.config.ts      # Configuration Vite
```

---

## 🧮 Algorithme de scoring

Pour chaque filière, le score est calculé selon la formule :

```
Score_filière = (Σ réponse × poids) / (Σ réponse_max × poids) × 100
```

Les critères pris en compte :
- Niveau auto-évalué en programmation
- Niveau en mathématiques (analyse, algèbre, probabilités, analyse numérique)
- Compétences techniques (BDD, réseaux, électronique)
- Traits comportementaux (8 affirmations)
- Préférences projet (4 questions à choix multiples)
- Personnalité MBTI (optionnel, multiplicateur ×1.5)

Le **Top 3** des filières avec le score le plus élevé est affiché à l'étudiant.

---

## 🗺️ Roadmap

- [ ] Backend avec base de données (Supabase / Firebase)
- [ ] Authentification étudiante via Google
- [ ] Export PDF des résultats
- [ ] Tableau de bord administrateur enrichi (graphiques, filtres)
- [ ] Internationalisation (FR / EN / AR)
- [ ] Tests unitaires sur le moteur de scoring

---

## 👤 Auteur

**Cherif Aboubacar Camara** — Étudiant en classe préparatoire ingénieur à l'EIDIA (Université Euro-Méditerranéenne de Fès).

- GitHub : [@abou-arch](https://github.com/abou-arch)

---

## 📄 Licence

Ce projet est sous licence **MIT** — voir le fichier [LICENSE](./LICENSE) pour les détails.
