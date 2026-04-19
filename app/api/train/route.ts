import { NextResponse } from "next/server";
import { trainPromptStrategy } from "@/lib/ai/training";
import { trainSchema } from "@/lib/utils/validators";
import { toErrorResponse } from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = trainSchema.parse(await request.json());
    const run = await trainPromptStrategy(body.datasetId, body.objective);
    return NextResponse.json({ ok: true, run });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
