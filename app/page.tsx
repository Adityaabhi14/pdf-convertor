"use client";

import { Header } from "@/components/layout/header";
import { UploadZone } from "@/components/upload/upload-zone";
import { ControlPanel } from "@/components/panels/control-panel";
import { ResultPanel } from "@/components/panels/result-panel";
import { AIAssistantPanel } from "@/components/panels/ai-assistant-panel";
import { Hero } from "@/components/marketing/hero";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { Pricing } from "@/components/marketing/pricing";
import { useStudioStore } from "@/lib/store/useStudioStore";

export default function HomePage() {
  const { selectedFileName, result, status, setFileName, setResult, setStatus } = useStudioStore();

  async function runPipeline(input: { mode: "compress" | "convert" | "ocr" | "merge" | "split" | "watermark"; outputFormat: string; quality: number; language: string }) {
    if (!selectedFileName) {
      setStatus("Please upload a file first");
      return;
    }

    setStatus("Running smart pipeline...");
    const res = await fetch("/api/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, fileName: selectedFileName, fileSize: 1024 * 1024 })
    });
    const data = await res.json();
    setResult(data);
    setStatus(data.ok ? "Completed" : "Failed");
  }

  async function onGoogleLogin() {
    const res = await fetch("/api/auth/google");
    const data = await res.json();
    if (data.authUrl) {
      window.location.href = data.authUrl;
      return;
    }
    alert(data.message ?? "Google auth is not configured yet.");
  }

  return (
    <main className="pb-14">
      <Header onOpenPricing={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} onGoogleLogin={onGoogleLogin} />
      <div className="mx-auto w-full max-w-7xl space-y-6 px-6">
        <Hero onGoogleLogin={onGoogleLogin} />
        <FeatureGrid />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            <UploadZone onPickFile={(file) => setFileName(file.name)} />
            <ControlPanel onRun={runPipeline} />
            <ResultPanel status={status} result={result} />
          </div>
          <div className="space-y-5">
            <section className="panel p-5">
              <h2 className="text-lg font-semibold">Premium Workspace</h2>
              <p className="mt-2 text-sm text-slate-400">Selected file: {selectedFileName || "None"}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-400">
                <li>AI batch automation presets</li>
                <li>Team review + comments for documents</li>
                <li>Live quality score and policy checks</li>
              </ul>
            </section>
            <AIAssistantPanel />
          </div>
        </div>
        <Pricing />
      </div>
    </main>
  );
}
