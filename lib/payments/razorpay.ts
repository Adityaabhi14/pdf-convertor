import Razorpay from "razorpay";
import { AppError } from "@/lib/utils/errors";

export function getRazorpayClient() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new AppError("Razorpay credentials are missing", 500, "RAZORPAY_CONFIG_MISSING");
  }

  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

export async function createSubscriptionOrder(planId: string, amountUsd: number) {
  const razorpay = getRazorpayClient();
  const amountInPaise = Math.round(amountUsd * 83.5 * 100);

  return razorpay.orders.create({
    amount: amountInPaise,
    currency: "INR",
    receipt: `plan-${planId}-${Date.now()}`,
    notes: { planId, source: "omniformat-web" }
  });
}
