"use client";

import { UploadCloud } from "lucide-react";
import { useRef } from "react";

type Props = {
  onPickFile: (file: File) => void;
};

export function UploadZone({ onPickFile }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className="panel group flex min-h-56 cursor-pointer flex-col items-center justify-center border-dashed border-slate-700 p-6 text-center transition hover:border-brand-400/70 hover:bg-slate-900/80"
      onClick={() => ref.current?.click()}
    >
      <UploadCloud className="mb-3 h-9 w-9 text-brand-300 transition group-hover:scale-110" />
      <h3 className="text-lg font-semibold">Drop your file or click to upload</h3>
      <p className="mt-2 max-w-sm text-sm text-slate-400">
        Supports PDF, DOCX, PPTX, XLSX, PNG, JPG, TXT, CSV and JSON with advanced conversion pipelines.
      </p>
      <input
        ref={ref}
        className="hidden"
        type="file"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onPickFile(file);
        }}
      />
    </div>
  );
}
