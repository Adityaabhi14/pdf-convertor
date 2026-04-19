import { z } from "zod";

export const pipelineSchema = z.object({
  mode: z.enum(["compress", "convert", "ocr", "merge", "split", "watermark"]),
  outputFormat: z.string().min(2),
  quality: z.number().int().min(10).max(100),
  language: z.string().default("en")
});

export const askSchema = z.object({
  prompt: z.string().min(8),
  context: z.string().min(20)
});

export const trainSchema = z.object({
  datasetId: z.string().min(3),
  objective: z.enum(["accuracy", "format_consistency", "domain_adaptation"])
});
