import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, ShieldCheck, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  isAdmin: boolean;
  onLogout: () => void;
}

export default function Navbar({ isAdmin, onLogout }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/questionnaire', label: 'Questionnaire' },
    { to: '/resultat', label: 'Résultats' },
    ...(isAdmin ? [{ to: '/admin', label: 'Admin' }] : []),
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
            <Compass className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Orientation Pro
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.to)
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 rounded-lg bg-indigo-50 -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {isAdmin ? (
            <Button variant="ghost" size="sm" onClick={onLogout} className="text-slate-600">
              <LogOut className="h-4 w-4 mr-1" />
              Déconnexion
            </Button>
          ) : (
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="text-slate-600">
                <ShieldCheck className="h-4 w-4 mr-1" />
                Admin
              </Button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    isActive(link.to)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAdmin ? (
                <button onClick={() => { onLogout(); setMobileOpen(false); }} className="px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg text-left">
                  Déconnexion
                </button>
              ) : (
                <Link to="/admin" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
                  Admin
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
