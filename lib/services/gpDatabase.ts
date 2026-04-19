import { AppError } from "@/lib/utils/errors";

type DatasetRecord = {
  id: string;
  title: string;
  domain: string;
  rows: number;
  freshness: string;
};

const mockDatasets: DatasetRecord[] = [
  { id: "legal-v2", title: "Legal Summaries v2", domain: "legal", rows: 240000, freshness: "daily" },
  { id: "finance-qna", title: "Financial Q&A", domain: "finance", rows: 180000, freshness: "hourly" },
  { id: "ops-docs", title: "Operations Manuals", domain: "operations", rows: 90000, freshness: "weekly" }
];

export async function fetchDatasetsFromGPDatabase() {
  const endpoint = process.env.GPDB_ENDPOINT;

  if (!endpoint) {
    return { source: "mock", datasets: mockDatasets };
  }

  try {
    const res = await fetch(`${endpoint}/datasets`, {
      headers: { Authorization: `Bearer ${process.env.GPDB_API_KEY ?? ""}` },
      cache: "no-store"
    });

    if (!res.ok) {
      throw new AppError("Failed to fetch GPDatabase datasets", res.status, "GPDB_FETCH_FAILED");
    }

    const data = await res.json();
    return { source: "gpdatabase", datasets: data.datasets as DatasetRecord[] };
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError("GPDatabase connection failed", 503, "GPDB_CONNECTION_ERROR", {
      reason: error instanceof Error ? error.message : "unknown"
    });
  }
}
