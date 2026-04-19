import { NextResponse } from "next/server";
import { summarizeDocument } from "@/lib/services/documentService";
import { toErrorResponse } from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const summary = await summarizeDocument(body.content ?? "");
    return NextResponse.json({ ok: true, summary });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
