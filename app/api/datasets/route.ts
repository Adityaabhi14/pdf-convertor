import { NextResponse } from "next/server";
import { fetchDatasetsFromGPDatabase } from "@/lib/services/gpDatabase";
import { toErrorResponse } from "@/lib/utils/errors";

export async function GET() {
  try {
    const datasets = await fetchDatasetsFromGPDatabase();
    return NextResponse.json({ ok: true, ...datasets });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
