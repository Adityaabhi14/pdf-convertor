import { NextResponse } from "next/server";
import { createSubscriptionOrder } from "@/lib/payments/razorpay";
import { AppError, toErrorResponse } from "@/lib/utils/errors";
import { PRICING_TIERS } from "@/lib/config/pricing";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { tierId?: string };
    const tier = PRICING_TIERS.find((entry) => entry.id === body.tierId);

    if (!tier || tier.monthlyUsd <= 0) {
      throw new AppError("Invalid paid tier selected", 400, "INVALID_TIER");
    }

    const order = await createSubscriptionOrder(tier.id, tier.monthlyUsd);
    return NextResponse.json({ ok: true, order, publicKey: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "" });
  } catch (error) {
    const fail = toErrorResponse(error);
    return NextResponse.json(fail.body, { status: fail.status });
  }
}
