"use client";

import { CheckCircle2 } from "lucide-react";

export function ResultPanel({ status, result }: { status: string; result: unknown }) {
  return (
    <section className="panel p-5">
      <h2 className="mb-3 text-lg font-semibold">Pipeline Result</h2>
      <p className="mb-4 text-sm text-slate-400">Current status: {status}</p>
      {result ? (
        <pre className="overflow-x-auto rounded-lg bg-slate-950/80 p-3 text-xs text-brand-100">{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 p-3 text-sm text-slate-300">
          <CheckCircle2 className="h-4 w-4 text-brand-300" />
          Run a conversion, analysis, or training job to see output.
        </div>
      )}
    </section>
  );
}
