"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, WandSparkles } from "lucide-react";

type Props = { onGoogleLogin: () => void };

export function Hero({ onGoogleLogin }: Props) {
  return (
    <section className="panel relative overflow-hidden p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <p className="badge mb-4">AI-Native File Intelligence Platform</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Convert, analyze, summarize, and automate documents with enterprise-grade precision.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Premium workflows inspired by iLovePDF/SmallPDF with Gemini-assisted reasoning, GPDatabase tuning, and advanced OCR operations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-xl bg-brand-500 px-5 py-2.5 font-semibold text-slate-950 hover:bg-brand-400">Start converting</button>
          <button onClick={onGoogleLogin} className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 font-semibold hover:border-brand-500/60">
            Continue with Google
          </button>
        </div>
        <div className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3"><Sparkles className="mb-2 h-4 w-4 text-brand-300" /> 40+ format pipelines</div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3"><WandSparkles className="mb-2 h-4 w-4 text-brand-300" /> AI-ready summaries + Q&A</div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3"><ShieldCheck className="mb-2 h-4 w-4 text-brand-300" /> Secure processing standards</div>
        </div>
      </motion.div>
    </section>
  );
}
