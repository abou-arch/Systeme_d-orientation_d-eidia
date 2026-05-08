import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useOrientation } from '@/hooks/useOrientation';
import { FILIERES_DATA } from '@/lib/data';
import type { Soumission } from '@/types';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts';
import {
  Search, Trophy, TrendingUp, Briefcase, DollarSign, ArrowRight,
  Code2, Shield, Database, Brain, Bot, Sparkles, ChevronRight
} from 'lucide-react';

const filiereIcons: Record<string, React.ElementType> = {
  Code2, Shield, Database, Brain, Bot,
};

const filiereColors: Record<string, string> = {
  Fullstack: '#3b82f6',
  Cyber: '#ef4444',
  'Big Data': '#10b981',
  IA: '#8b5cf6',
  Robotique: '#f59e0b',
};

export default function Results() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getSoumission } = useOrientation();
  const [matInput, setMatInput] = useState('');
  const [soumission, setSoumission] = useState<Soumission | null>(null);
  const [loading, setLoading] = useState(false);

  const matriculeParam = searchParams.get('matricule');

  useEffect(() => {
    if (matriculeParam) {
      setLoading(true);
      const found = getSoumission(matriculeParam);
      setSoumission(found);
      setLoading(false);
    }
  }, [matriculeParam, getSoumission]);

  const handleSearch = () => {
    if (matInput.trim()) {
      setSearchParams({ matricule: matInput.trim().toUpperCase() });
    }
  };

  const radarData = useMemo(() => {
    if (!soumission) return [];
    return soumission.top3.map(t => ({
      filiere: t.filiere,
      score: t.score,
      fullMark: 100,
    }));
  }, [soumission]);

  const barData = useMemo(() => {
    if (!soumission) return [];
    return soumission.top3.map(t => ({
      filiere: t.filiere,
      score: t.score,
    }));
  }, [soumission]);

  if (!matriculeParam) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <Card className="border-slate-200/60 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white mx-auto mb-6">
                <Search className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Consulter mes résultats</h2>
              <p className="text-slate-600 mb-6">Entre ton matricule pour voir ton orientation personnalisée.</p>
              <div className="flex gap-2">
                <Input
                  value={matInput}
                  onChange={e => setMatInput(e.target.value)}
                  placeholder="Ton matricule (ex: ABC123)"
                  className="h-12"
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} className="h-12 bg-gradient-to-r from-indigo-600 to-violet-600">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!soumission) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <Card className="border-slate-200/60 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-6">
                <Search className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Aucun résultat trouvé</h2>
              <p className="text-slate-600 mb-6">Aucune soumission trouvée pour le matricule <strong>{matriculeParam}</strong>.</p>
              <Button onClick={() => { setSearchParams({}); setMatInput(''); }} variant="outline" className="w-full">
                Essayer un autre matricule
              </Button>
              <div className="mt-4">
                <Button onClick={() => navigate('/questionnaire')} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                  Faire le questionnaire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  const winner = soumission.top3[0];
  const winnerInfo = winner ? FILIERES_DATA[winner.filiere] : null;
  const WinnerIcon = winnerInfo ? (filiereIcons[winnerInfo.icon] || Code2) : Code2;

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Tes résultats d'orientation</h1>
              <p className="text-slate-600">Matricule : <span className="font-mono font-medium text-slate-900">{soumission.matricule}</span></p>
            </div>
            <Button onClick={() => { setSearchParams({}); setMatInput(''); }} variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Nouvelle recherche
            </Button>
          </div>
        </motion.div>

        {/* Winner Card */}
        {winner && winnerInfo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className="border-slate-200/60 shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: winnerInfo.color }}>
                    <WinnerIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-amber-500" />
                      <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Filière recommandée</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{winnerInfo.nom}</h2>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-3xl font-bold" style={{ color: winnerInfo.color }}>{winner.score}%</div>
                    <div className="text-xs text-slate-500">compatibilité</div>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{winnerInfo.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="h-4 w-4 text-slate-500" />
                      <span className="text-sm font-semibold text-slate-700">Métiers accessibles</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {winnerInfo.metiers.map(m => (
                        <span key={m} className="text-xs px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-medium">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm font-semibold text-slate-700">Salaire moyen</span>
                    </div>
                    <p className="text-lg font-bold text-emerald-600">{winnerInfo.salaire}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-slate-200/60 shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-indigo-500" />
                  Profil radar
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="filiere" tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                      <Radar
                        name="Compatibilité"
                        dataKey="score"
                        stroke="#6366f1"
                        fill="#6366f1"
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                      <Tooltip
                        contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-slate-200/60 shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-500" />
                  Top 3 des filières
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} layout="vertical" margin={{ left: 20, right: 20 }}>
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis type="category" dataKey="filiere" tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }} width={80} />
                      <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}
                        formatter={(value: number) => [`${value}%`, 'Compatibilité']}
                      />
                      <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={32}>
                        {barData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={filiereColors[entry.filiere]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Top 3 Cards */}
        <h3 className="text-xl font-bold text-slate-900 mb-4">Détail du classement</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {soumission.top3.map((item, i) => {
            const info = FILIERES_DATA[item.filiere];
            const Icon = filiereIcons[info?.icon || 'Code2'] || Code2;
            const medals = ['bg-amber-100 text-amber-700', 'bg-slate-100 text-slate-700', 'bg-orange-100 text-orange-700'];
            const medalLabels = ['1er', '2ème', '3ème'];

            return (
              <motion.div
                key={item.filiere}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Card className={`border-slate-200/60 hover:shadow-lg transition-all h-full ${i === 0 ? 'ring-2 ring-indigo-500/20' : ''}`}>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${medals[i]}`}>
                        {medalLabels[i]}
                      </span>
                      <span className="text-xl font-bold" style={{ color: filiereColors[item.filiere] }}>
                        {item.score}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${filiereColors[item.filiere]}15` }}>
                        <Icon className="h-5 w-5" style={{ color: filiereColors[item.filiere] }} />
                      </div>
                      <h4 className="font-bold text-slate-900">{item.filiere}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{info?.description.slice(0, 100)}...</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button onClick={() => navigate('/questionnaire')} className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg">
            Refaire le questionnaire
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
