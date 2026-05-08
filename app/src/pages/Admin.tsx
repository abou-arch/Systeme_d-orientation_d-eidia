import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { useOrientation } from '@/hooks/useOrientation';
import type { Filiere } from '@/types';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
} from 'recharts';
import {
  ShieldCheck, Trash2, Users, BarChart3, ArrowLeft,
  Code2, Shield, Database, Brain, Bot,
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

interface AdminProps {
  isAdmin: boolean;
}

export default function Admin({ isAdmin }: AdminProps) {
  const navigate = useNavigate();
  const { getAllSoumissions, supprimerSoumission, getStats } = useOrientation();
  const [soumissions, setSoumissions] = useState(getAllSoumissions());
  const stats = getStats();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, navigate]);

  const chartData = useMemo(() => {
    return (Object.keys(stats.stats) as Filiere[]).map(f => ({
      filiere: f,
      count: stats.stats[f],
      color: filiereColors[f],
    }));
  }, [stats]);

  const handleDelete = (matricule: string) => {
    supprimerSoumission(matricule);
    setSoumissions(getAllSoumissions());
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-indigo-600" />
              Tableau de bord Admin
            </h1>
            <p className="text-slate-600 mt-1">Gestion des soumissions et statistiques</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-slate-200/60 shadow-md">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                    <p className="text-xs text-slate-500">Soumissions totales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {chartData.slice(0, 3).map((d, i) => {
            const Icon = filiereIcons[d.filiere] || Code2;
            return (
              <motion.div key={d.filiere} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                <Card className="border-slate-200/60 shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${d.color}15` }}>
                        <Icon className="h-5 w-5" style={{ color: d.color }} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{d.count}</p>
                        <p className="text-xs text-slate-500">{d.filiere}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="border-slate-200/60 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-500" />
                Répartition des filières (1er choix)
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <XAxis dataKey="filiere" tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} allowDecimals={false} />
                    <Tooltip
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]} barSize={48}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-slate-200/60 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Toutes les soumissions</h3>
              {soumissions.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Aucune soumission pour le moment.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">#</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Matricule</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>1er choix</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[...soumissions].reverse().map((s, i) => (
                        <TableRow key={s.id}>
                          <TableCell className="text-slate-400">{soumissions.length - i}</TableCell>
                          <TableCell className="font-medium">{s.nom_complet}</TableCell>
                          <TableCell className="font-mono text-slate-600">{s.matricule}</TableCell>
                          <TableCell className="text-slate-600">{s.date}</TableCell>
                          <TableCell>
                            {s.top3[0] && (
                              <span
                                className="inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-full"
                                style={{
                                  backgroundColor: `${filiereColors[s.top3[0].filiere]}15`,
                                  color: filiereColors[s.top3[0].filiere],
                                }}
                              >
                                {(() => {
                                  const Icon = filiereIcons[s.top3[0].filiere] || Code2;
                                  return <Icon className="h-3.5 w-3.5" />;
                                })()}
                                {s.top3[0].filiere}
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="font-bold">
                            {s.top3[0]?.score}%
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(s.matricule)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
