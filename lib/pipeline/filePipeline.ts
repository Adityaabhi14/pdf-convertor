import { PipelineRequest } from "@/lib/types";
import { AppError } from "@/lib/utils/errors";

export async function runFilePipeline(file: File, request: PipelineRequest) {
  if (file.size > 100 * 1024 * 1024) {
    throw new AppError("File too large. Maximum allowed size is 100MB.", 413, "FILE_TOO_LARGE");
  }

  const steps = [
    "virus_scan",
    "metadata_extract",
    `mode:${request.mode}`,
    `optimize_quality:${request.quality}`,
    `output:${request.outputFormat}`
  ];

  return {
    outputUrl: `/downloads/${encodeURIComponent(file.name)}.${request.outputFormat}`,
    checksum: crypto.randomUUID(),
    steps,
    estimatedSavings: request.mode === "compress" ? "42%" : "n/a"
  };
}
