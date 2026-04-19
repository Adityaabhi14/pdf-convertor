import { NextResponse } from "next/server";
import { runFilePipeline } from "@/lib/pipeline/filePipeline";
import { pipelineSchema } from "@/lib/utils/validators";
import { toErrorResponse } from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = pipelineSchema.parse(body);

    const file = new File(["placeholder"], body.fileName ?? "sample.pdf", {
      type: "application/pdf"
    });

    const result = await runFilePipeline(file, parsed);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
