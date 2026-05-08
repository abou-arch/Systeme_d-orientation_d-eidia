import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, ShieldCheck, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
  isAdmin: boolean;
}

export default function AdminLogin({ onLogin, isAdmin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  if (isAdmin) {
    navigate('/admin');
    return null;
  }

  const handleLogin = () => {
    if (onLogin(password)) {
      navigate('/admin');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm w-full"
      >
        <Card className="border-slate-200/60 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white mx-auto mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Espace Administrateur</h2>
              <p className="text-sm text-slate-500 mt-1">Accès restreint au dashboard</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(false); }}
                    placeholder="Mot de passe"
                    className="pl-10 h-12"
                    onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  />
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                >
                  <AlertCircle className="h-4 w-4" />
                  Mot de passe incorrect.
                </motion.div>
              )}

              <Button
                onClick={handleLogin}
                className="w-full h-12 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-lg"
              >
                Se connecter
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
