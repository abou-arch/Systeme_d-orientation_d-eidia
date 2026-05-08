import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useOrientation } from '@/hooks/useOrientation';
import { QUESTIONS, MBTI_OPTIONS } from '@/lib/data';
import { ChevronRight, ChevronLeft, Check, User, Hash, Sparkles, AlertCircle } from 'lucide-react';

const STEPS = [
  { id: 'info', label: 'Identité' },
  { id: 'programmation', label: 'Programmation' },
  { id: 'maths', label: 'Mathématiques' },
  { id: 'extra', label: 'Compétences' },
  { id: 'comportement', label: 'Personnalité' },
  { id: 'choix', label: 'Préférences' },
];

export default function Questionnaire() {
  const navigate = useNavigate();
  const { reponses, updateReponse, nomComplet, setNomComplet, matricule, setMatricule, sauvegarder } = useOrientation();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const currentStep = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const validateStep = () => {
    const errs: string[] = [];
    switch (currentStep.id) {
      case 'info':
        if (!nomComplet.trim()) errs.push('Nom complet requis');
        if (!matricule.trim()) errs.push('Matricule requis');
        break;
      case 'programmation':
        if ((reponses.Q3 ?? 0) < 1) errs.push('Veuillez évaluer vos compétences en programmation');
        break;
      case 'maths':
        QUESTIONS.maths.forEach(m => {
          if (((reponses[m.id] as number) ?? 0) < 1) errs.push(`Veuillez evaluer: ${m.label}`);
        });
        break;
      case 'extra':
        QUESTIONS.extra.forEach(m => {
          if (((reponses[m.id] as number) ?? 0) < 1) errs.push(`Veuillez evaluer: ${m.label}`);
        });
        break;
      case 'comportement':
        QUESTIONS.comportement.forEach(m => {
          if (((reponses[m.id] as number) ?? 0) < 1) errs.push(`Veuillez repondre a: ${m.label}`);
        });
        break;
      case 'choix':
        QUESTIONS.choix.forEach(m => {
          if (!reponses[m.id]) errs.push(`Veuillez faire un choix pour: ${m.label}`);
        });
        break;
    }
    setErrors(errs);
    return errs.length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    if (step < STEPS.length - 1) {
      setStep(s => s + 1);
    } else {
      setShowSummary(true);
    }
  };

  const prev = () => {
    if (step > 0) setStep(s => s - 1);
  };

  const submit = () => {
    if (!nomComplet.trim() || !matricule.trim()) return;
    const existing = JSON.parse(localStorage.getItem('orientation_soumissions') || '[]');
    const exists = existing.some((s: any) => s.matricule === matricule.toUpperCase());
    if (exists) {
      setErrors(['Ce matricule a déjà été utilisé. Consulte tes résultats.']);
      return;
    }
    sauvegarder(nomComplet, matricule);
    navigate(`/resultat?matricule=${matricule.toUpperCase()}`);
  };

  const renderStep = () => {
    switch (currentStep.id) {
      case 'info':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-indigo-500" />
                Nom complet
              </Label>
              <Input
                id="nom"
                value={nomComplet}
                onChange={e => setNomComplet(e.target.value)}
                placeholder="Jean Dupont"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="matricule" className="text-sm font-medium flex items-center gap-2">
                <Hash className="h-4 w-4 text-indigo-500" />
                Matricule
              </Label>
              <Input
                id="matricule"
                value={matricule}
                onChange={e => setMatricule(e.target.value)}
                placeholder="ABC123"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-violet-500" />
                Type MBTI (optionnel)
              </Label>
              <Select value={reponses.MBTI || ''} onValueChange={v => updateReponse('MBTI', v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Sélectionne ton type de personnalité" />
                </SelectTrigger>
                <SelectContent>
                  {MBTI_OPTIONS.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Le type MBTI aide à affiner l'orientation. <a href="https://www.16personalities.com/fr" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Faire le test 16personalities</a></p>
            </div>
          </div>
        );

      case 'programmation':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{QUESTIONS.programmation.question}</h3>
              <p className="text-sm text-slate-600 mb-6">Évalue ton niveau global en programmation (1 = débutant, 5 = expert)</p>
              <div className="space-y-4">
                <Slider
                  value={[reponses.Q3 || 3]}
                  onValueChange={v => updateReponse('Q3', v[0])}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-500">Débutant</span>
                  <span className="text-indigo-600 text-lg font-bold">{reponses.Q3 || 3}/5</span>
                  <span className="text-slate-500">Expert</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'maths':
        return (
          <div className="space-y-6">
            <p className="text-sm text-slate-600">Évalue ton niveau dans chaque matière (1 = faible, 5 = excellent)</p>
            {QUESTIONS.maths.map((m) => (
              <div key={m.id} className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-800">{m.label}</span>
                  <span className="text-lg font-bold text-indigo-600">{reponses[m.id] || 3}/5</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{m.question}</p>
                <Slider
                  value={[reponses[m.id] as number || 3]}
                  onValueChange={v => updateReponse(m.id, v[0])}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Faible</span>
                  <span>Excellent</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'extra':
        return (
          <div className="space-y-6">
            <p className="text-sm text-slate-600">Évalue tes compétences techniques complémentaires</p>
            {QUESTIONS.extra.map((m) => (
              <div key={m.id} className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-800">{m.label}</span>
                  <span className="text-lg font-bold text-indigo-600">{reponses[m.id] as number || 3}/5</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{m.question}</p>
                <Slider
                  value={[reponses[m.id] as number || 3]}
                  onValueChange={v => updateReponse(m.id, v[0])}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Faible</span>
                  <span>Excellent</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'comportement':
        return (
          <div className="space-y-6">
            <p className="text-sm text-slate-600">Indique à quel point chaque affirmation te correspond (1 = pas du tout, 5 = tout à fait)</p>
            {QUESTIONS.comportement.map((m) => (
              <div key={m.id} className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm">
                <p className="font-medium text-slate-800 mb-4">{m.question}</p>
                <div className="space-y-4">
                  <Slider
                    value={[reponses[m.id] as number || 3]}
                    onValueChange={v => updateReponse(m.id, v[0])}
                    min={1}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Pas du tout (1)</span>
                    <span className="text-indigo-600 font-bold">{reponses[m.id] as number || 3}</span>
                    <span>Tout à fait (5)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'choix':
        return (
          <div className="space-y-8">
            {QUESTIONS.choix.map((q) => (
              <div key={q.id} className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm">
                <p className="font-medium text-slate-800 mb-4">{q.question}</p>
                <RadioGroup
                  value={reponses[q.id] as string || ''}
                  onValueChange={v => updateReponse(q.id, v)}
                  className="space-y-2"
                >
                  {q.options.map(opt => (
                    <div key={opt.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                      <RadioGroupItem value={opt.value} id={`${q.id}-${opt.value}`} />
                      <Label htmlFor={`${q.id}-${opt.value}`} className="cursor-pointer text-sm text-slate-700">
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  if (showSummary) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full"
        >
          <Card className="border-slate-200/60 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mx-auto mb-6">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Questionnaire terminé !</h2>
              <p className="text-slate-600 mb-6">Voici un récapitulatif avant de voir tes résultats.</p>
              <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Nom</span>
                  <span className="font-medium text-slate-900">{nomComplet}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Matricule</span>
                  <span className="font-medium text-slate-900">{matricule.toUpperCase()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Type MBTI</span>
                  <span className="font-medium text-slate-900">{reponses.MBTI || 'Non renseigné'}</span>
                </div>
              </div>
              <Button onClick={submit} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg">
                Voir mes résultats
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" onClick={() => setShowSummary(false)} className="mt-2 w-full">
                Revoir mes réponses
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Étape {step + 1} sur {STEPS.length}</span>
            <span className="text-sm font-bold text-indigo-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-3">
            {STEPS.map((s, i) => (
              <div
                key={s.id}
                className={`text-xs font-medium transition-colors ${
                  i <= step ? 'text-indigo-600' : 'text-slate-300'
                }`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-slate-200/60 shadow-lg mb-6">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-1">{currentStep.label}</h2>
                <p className="text-sm text-slate-500 mb-6">
                  {currentStep.id === 'info' && 'Commençons par quelques informations.'}
                  {currentStep.id === 'programmation' && 'Évalue ton niveau en programmation.'}
                  {currentStep.id === 'maths' && 'Les mathématiques sont fondamentales en IT.'}
                  {currentStep.id === 'extra' && 'Compétences techniques complémentaires.'}
                  {currentStep.id === 'comportement' && 'Comprendre ta personnalite nous aide a t orienter.'}
                  {currentStep.id === 'choix' && 'Tes préférences finales.'}
                </p>
                {renderStep()}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4" />
              <span className="font-semibold">Veuillez corriger les erreurs suivantes :</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {errors.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prev}
            disabled={step === 0}
            className="border-slate-300"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>
          <Button
            onClick={next}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg"
          >
            {step === STEPS.length - 1 ? 'Terminer' : 'Suivant'}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
