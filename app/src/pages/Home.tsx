import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Code2, Database, Shield, Bot, Sparkles, TrendingUp, Users } from 'lucide-react';
import { FILIERES_DATA } from '@/lib/data';

const features = [
  {
    icon: Sparkles,
    title: 'Algorithme Intelligent',
    description: 'Notre moteur analyse 15+ critères pour affiner sa recommandation selon tes compétences et ta personnalité.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description: 'Des scores normalisés et des visualisations claires pour comprendre en un coup d\'œil ton profil.',
  },
  {
    icon: Users,
    title: '5 Filières IT',
    description: 'Fullstack, Cybersécurité, Big Data, Intelligence Artificielle et Robotique — le meilleur de la tech.',
  },
];

const filiereIcons: Record<string, React.ElementType> = {
  Code2, Shield, Database, Brain, Bot,
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-transparent to-slate-50/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-6">
                <Sparkles className="h-4 w-4" />
                Orientation intelligente
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Découvre ta <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">filière idéale</span> en informatique
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Un questionnaire intelligent qui analyse tes compétences, tes préférences et ta personnalité pour te orienter vers la carrière IT qui te correspond vraiment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/questionnaire">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                    Commencer le questionnaire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/resultat">
                  <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
                    Voir mes résultats
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 shadow-2xl shadow-indigo-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="ml-auto text-xs text-slate-400 font-mono">orientation.exe</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold text-slate-700">Fullstack</span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">87%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-200/50">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-purple-500" />
                      <span className="font-semibold text-slate-700">IA</span>
                    </div>
                    <span className="text-sm font-bold text-purple-600">72%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50">
                    <div className="flex items-center gap-3">
                      <Database className="h-5 w-5 text-emerald-500" />
                      <span className="font-semibold text-slate-700">Big Data</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">65%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Compatibilité globale</div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '87%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comment ça marche ?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Un processus simple en 3 étapes pour découvrir ta voie dans l'informatique.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-slate-200/60 hover:border-indigo-200/60 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filières */}
      <section className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Les 5 filières IT</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Des parcours d'excellence pour des carrières d'avenir dans la tech.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(FILIERES_DATA).map((filiere, i) => {
              const Icon = filiereIcons[filiere.icon] || Code2;
              return (
                <motion.div
                  key={filiere.nom}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-slate-200/60 hover:shadow-xl hover:shadow-slate-500/5 transition-all group overflow-hidden h-full">
                    <div className={`h-1.5 bg-gradient-to-r ${filiere.bgGradient.replace('from-', 'from-').replace('to-', 'to-')} opacity-60`} />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${filiere.color}15` }}>
                          <Icon className="h-5 w-5" style={{ color: filiere.color }} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{filiere.nom}</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">{filiere.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {filiere.metiers.slice(0, 3).map(m => (
                          <span key={m} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                            {m}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Prêt à découvrir ta filière ?</h2>
              <p className="text-indigo-100 mb-8 max-w-xl mx-auto">5 minutes suffisent pour obtenir une recommandation personnalisée basée sur tes compétences et aspirations.</p>
              <Link to="/questionnaire">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
                  Lancer le questionnaire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
