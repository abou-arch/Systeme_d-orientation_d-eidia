import { Routes, Route } from 'react-router';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Questionnaire from '@/pages/Questionnaire';
import Results from '@/pages/Results';
import AdminLogin from '@/pages/AdminLogin';
import Admin from '@/pages/Admin';
import { useAdmin } from '@/hooks/useOrientation';

function App() {
  const { isAdmin, login, logout } = useAdmin();

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar isAdmin={isAdmin} onLogout={logout} />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/resultat" element={<Results />} />
          <Route path="/admin" element={<Admin isAdmin={isAdmin} />} />
          <Route path="/admin/login" element={<AdminLogin onLogin={login} isAdmin={isAdmin} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
