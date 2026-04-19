import { NextResponse } from "next/server";
import { AppError, toErrorResponse } from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { tier?: string; featurePack?: string[] };
    if (!body.tier) {
      throw new AppError("Tier is required", 400, "TIER_REQUIRED");
    }

    return NextResponse.json({
      ok: true,
      message: "Premium upgrade intent captured",
      tier: body.tier,
      featurePack: body.featurePack ?? ["ai-automation", "team-workspaces", "audit-trail"]
    });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
