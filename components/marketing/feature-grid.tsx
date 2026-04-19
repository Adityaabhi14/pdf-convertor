"use client";

import { motion } from "framer-motion";
import { Braces, Database, FileStack, Languages, ScanSearch, Workflow } from "lucide-react";

const items = [
  { title: "Batch conversions", icon: FileStack, desc: "Queue and convert thousands of files with profile templates." },
  { title: "Advanced OCR", icon: ScanSearch, desc: "Multi-language OCR with confidence and region extraction." },
  { title: "AI summarizer", icon: Workflow, desc: "Generate concise, executive, or action-oriented summaries." },
  { title: "Developer API", icon: Braces, desc: "Integrate conversion + AI into apps through secure APIs." },
  { title: "Dataset sync", icon: Database, desc: "Pull domain datasets from GPDatabase for quality tuning." },
  { title: "Localization", icon: Languages, desc: "Multilingual UX and language-aware output formatting." }
];

export function FeatureGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          className="panel p-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
        >
          <item.icon className="mb-3 h-5 w-5 text-brand-300" />
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
        </motion.article>
      ))}
    </section>
  );
}
