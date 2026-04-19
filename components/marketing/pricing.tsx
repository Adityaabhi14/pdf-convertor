"use client";

import { useState } from "react";
import { CheckCheck, Crown } from "lucide-react";
import { PRICING_TIERS } from "@/lib/config/pricing";

export function Pricing() {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  async function startCheckout(tierId: string) {
    setLoadingTier(tierId);
    try {
      const res = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId })
      });
      const data = await res.json();
      alert(data.ok ? `Order created: ${data.order.id}` : data.message);
    } finally {
      setLoadingTier(null);
    }
  }

  return (
    <section id="pricing" className="space-y-4">
      <div className="text-center">
        <p className="badge mb-2">Pricing</p>
        <h2 className="text-3xl font-bold">Choose your productivity tier</h2>
        <p className="mt-2 text-sm text-slate-400">Flexible pricing with premium add-ons and Razorpay checkout.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {PRICING_TIERS.map((tier) => (
          <article key={tier.id} className={`panel p-5 ${tier.highlight ? "border-brand-400/60 shadow-glow" : ""}`}>
            {tier.highlight && <p className="badge mb-2 gap-1"><Crown className="h-3.5 w-3.5" /> Most Popular</p>}
            <h3 className="text-xl font-semibold">{tier.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{tier.description}</p>
            <p className="mt-4 text-3xl font-bold">${tier.monthlyUsd}<span className="text-sm text-slate-400">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-slate-300"><CheckCheck className="mt-0.5 h-4 w-4 text-brand-300" /> {feature}</li>
              ))}
            </ul>
            <button
              className="mt-5 w-full rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-slate-950 disabled:opacity-60"
              onClick={() => (tier.monthlyUsd > 0 ? startCheckout(tier.id) : window.scrollTo({ top: 0, behavior: "smooth" }))}
              disabled={loadingTier === tier.id}
            >
              {loadingTier === tier.id ? "Preparing..." : tier.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
