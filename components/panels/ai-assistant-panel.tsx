"use client";

import { useState } from "react";

export function AIAssistantPanel() {
  const [prompt, setPrompt] = useState("Summarize compliance risks and output action points.");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [premiumMode, setPremiumMode] = useState(true);

  async function askAI() {
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: premiumMode ? `${prompt}\nUse high-accuracy premium reasoning.` : prompt,
          context: "Document intelligence context goes here."
        })
      });
      const data = await res.json();
      setResponse(data.answer ?? data.message ?? "No response");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">AI Copilot (Gemini)</h2>
        <button className="badge" onClick={() => setPremiumMode((prev) => !prev)}>
          {premiumMode ? "Premium model" : "Standard model"}
        </button>
      </div>
      <textarea
        className="min-h-24 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="mt-3 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900" onClick={askAI}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>
      <div className="mt-3 rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-200">
        {response || "AI response will appear here."}
      </div>
    </section>
  );
}
