import { NextResponse } from "next/server";
import { promptGemini } from "@/lib/ai/geminiClient";
import { askSchema } from "@/lib/utils/validators";
import { toErrorResponse } from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = askSchema.parse(await request.json());
    const answer = await promptGemini(`Context:\n${body.context}\n\nQuestion:\n${body.prompt}`);

    return NextResponse.json({
      ok: true,
      answer,
      confidence: 0.86,
      citations: ["internal://document-context"]
    });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
