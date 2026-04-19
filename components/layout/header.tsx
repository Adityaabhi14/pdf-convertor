import { BrainCircuit, DatabaseZap, FileCog, Gem, LogIn } from "lucide-react";

type Props = { onOpenPricing: () => void; onGoogleLogin: () => void };

export function Header({ onOpenPricing, onGoogleLogin }: Props) {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-brand-400/50 bg-brand-500/20 p-2 text-brand-100 shadow-glow">
          <FileCog className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-semibold">OmniFormat AI Studio</p>
          <p className="text-xs text-slate-400">iLovePDF + SmallPDF + AI Ops</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge hidden gap-1 md:inline-flex"><DatabaseZap className="h-3.5 w-3.5" /> GPDatabase Sync</span>
        <span className="badge hidden gap-1 md:inline-flex"><BrainCircuit className="h-3.5 w-3.5" /> Gemini-powered</span>
        <button onClick={onOpenPricing} className="inline-flex items-center gap-1 rounded-lg border border-amber-400/40 bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-100">
          <Gem className="h-3.5 w-3.5" /> Premium
        </button>
        <button onClick={onGoogleLogin} className="inline-flex items-center gap-1 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-semibold">
          <LogIn className="h-3.5 w-3.5" /> Google Login
        </button>
      </div>
    </header>
  );
}
