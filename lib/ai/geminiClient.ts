import { GoogleGenerativeAI } from "@google/generative-ai";
import { getEnv } from "@/lib/config/env";
import { AppError } from "@/lib/utils/errors";

export async function promptGemini(prompt: string) {
  const apiKey = getEnv("GEMINI_API_KEY", false);
  if (!apiKey) {
    throw new AppError("Gemini API key not configured", 400, "NO_GEMINI_API_KEY");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  if (!text) {
    throw new AppError("Gemini returned empty output", 502, "EMPTY_AI_RESPONSE");
  }

  return text;
}
