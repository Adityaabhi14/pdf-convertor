import { FileInsight } from "@/lib/types";

export async function analyzeDocument(content: string): Promise<FileInsight> {
  const words = content.trim().split(/\s+/).length;
  return {
    words,
    pages: Math.max(1, Math.round(words / 420)),
    tables: (content.match(/\|/g) ?? []).length > 5 ? 1 : 0,
    tone: words > 1000 ? "formal" : "neutral",
    riskFlags: content.toLowerCase().includes("confidential") ? ["Contains confidential text"] : []
  };
}

export async function summarizeDocument(content: string): Promise<string> {
  const cleaned = content.replace(/\s+/g, " ").trim();
  return cleaned.slice(0, 400) + (cleaned.length > 400 ? "..." : "");
}
