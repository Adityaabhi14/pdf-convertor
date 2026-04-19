"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import type { ConversionMode } from "@/lib/types";

const modes: ConversionMode[] = ["compress", "convert", "ocr", "merge", "split", "watermark"];

type Props = {
  onRun: (input: { mode: ConversionMode; outputFormat: string; quality: number; language: string }) => void;
};

export function ControlPanel({ onRun }: Props) {
  const [mode, setMode] = useState<ConversionMode>("convert");
  const [outputFormat, setOutputFormat] = useState("pdf");
  const [quality, setQuality] = useState(85);
  const [language, setLanguage] = useState("en");

  return (
    <section className="panel p-5">
      <h2 className="mb-4 text-lg font-semibold">Conversion Controls</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <label className="text-sm text-slate-300">
          Mode
          <select className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2" value={mode} onChange={(e) => setMode(e.target.value as ConversionMode)}>
            {modes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm text-slate-300">
          Output format
          <input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2" value={outputFormat} onChange={(e) => setOutputFormat(e.target.value)} />
        </label>
        <label className="text-sm text-slate-300">
          Quality ({quality})
          <input className="mt-1 w-full" type="range" min={10} max={100} value={quality} onChange={(e) => setQuality(Number(e.target.value))} />
        </label>
        <label className="text-sm text-slate-300">
          OCR language
          <input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </label>
      </div>
      <button
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-brand-400"
        onClick={() => onRun({ mode, outputFormat, quality, language })}
      >
        <Sparkles className="h-4 w-4" /> Run Smart Pipeline
      </button>
    </section>
  );
}
