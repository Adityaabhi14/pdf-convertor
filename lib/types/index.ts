export type ConversionMode = "compress" | "convert" | "ocr" | "merge" | "split" | "watermark";

export type PipelineRequest = {
  mode: ConversionMode;
  outputFormat: string;
  quality: number;
  language: string;
};

export type FileInsight = {
  pages?: number;
  words?: number;
  tables?: number;
  tone?: string;
  summary?: string;
  riskFlags?: string[];
};

export type AIAnswer = {
  answer: string;
  confidence: number;
  citations: string[];
};
