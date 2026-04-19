import { NextResponse } from "next/server";
import { analyzeDocument } from "@/lib/services/documentService";
import { toErrorResponse } from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const insight = await analyzeDocument(body.content ?? "");
    return NextResponse.json({ ok: true, insight });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
