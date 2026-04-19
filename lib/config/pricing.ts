export type PricingTier = {
  id: string;
  name: string;
  monthlyUsd: number;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyUsd: 0,
    description: "Great for occasional conversion and basic summarization.",
    features: [
      "20 conversions/day",
      "Standard OCR and PDF compression",
      "Basic AI summary (up to 3K tokens)",
      "Community support"
    ],
    cta: "Start free"
  },
  {
    id: "pro",
    name: "Pro",
    monthlyUsd: 19,
    description: "For creators and teams needing speed and smarter AI.",
    features: [
      "Unlimited conversions",
      "Advanced OCR with multi-language packs",
      "Gemini copilot with domain prompt presets",
      "Smart merge/split templates",
      "Priority email support"
    ],
    cta: "Upgrade to Pro",
    highlight: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyUsd: 99,
    description: "For businesses requiring governance, accuracy, and scale.",
    features: [
      "SLA-backed API throughput",
      "Custom GPDatabase adapters",
      "Human feedback loop + quality dashboards",
      "Audit logs + SSO + advanced controls",
      "Dedicated success engineer"
    ],
    cta: "Contact sales"
  }
];
