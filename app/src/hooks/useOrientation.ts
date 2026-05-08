import { useState, useCallback } from 'react';
import type { Reponses, Resultats, Soumission, Filiere } from '@/types';
import { calculerScore } from '@/lib/engine';

const STORAGE_KEY = 'orientation_soumissions';
const ADMIN_KEY = 'orientation_admin';

export function useOrientation() {
  const [reponses, setReponses] = useState<Reponses>({});
  const [resultats, setResultats] = useState<Resultats | null>(null);
  const [nomComplet, setNomComplet] = useState('');
  const [matricule, setMatricule] = useState('');

  const updateReponse = useCallback((key: string, value: number | string) => {
    setReponses(prev => ({ ...prev, [key]: value }));
  }, []);

  const calculer = useCallback((): Resultats => {
    const res = calculerScore(reponses);
    setResultats(res);
    return res;
  }, [reponses]);

  const sauvegarder = useCallback((nom: string, mat: string) => {
    const res = calculerScore(reponses);
    const soumission: Soumission = {
      id: Date.now().toString(),
      nom_complet: nom,
      matricule: mat.toUpperCase(),
      date: new Date().toLocaleDateString('fr-FR'),
      top3: res.top3,
    };
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(soumission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return soumission;
  }, [reponses]);

  const getSoumission = useCallback((mat: string) => {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Soumission[];
    return all.find(s => s.matricule === mat.toUpperCase()) || null;
  }, []);

  const getAllSoumissions = useCallback(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Soumission[];
  }, []);

  const supprimerSoumission = useCallback((mat: string) => {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Soumission[];
    const filtered = all.filter(s => s.matricule !== mat.toUpperCase());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }, []);

  const getStats = useCallback(() => {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Soumission[];
    const stats: Record<Filiere, number> = { Fullstack: 0, Cyber: 0, 'Big Data': 0, IA: 0, Robotique: 0 };
    all.forEach(s => {
      if (s.top3[0]) {
        stats[s.top3[0].filiere] = (stats[s.top3[0].filiere] || 0) + 1;
      }
    });
    return { total: all.length, stats };
  }, []);

  return {
    reponses, updateReponse, resultats, calculer,
    nomComplet, setNomComplet, matricule, setMatricule,
    sauvegarder, getSoumission, getAllSoumissions, supprimerSoumission, getStats,
  };
}

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem(ADMIN_KEY) === 'true';
  });

  const login = useCallback((password: string) => {
    if (password === 'admin123') {
      localStorage.setItem(ADMIN_KEY, 'true');
      setIsAdmin(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(ADMIN_KEY);
    setIsAdmin(false);
  }, []);

  return { isAdmin, login, logout };
}
