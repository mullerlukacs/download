"use client";

import { useState, useTransition } from "react";
import { createDownload } from "@/lib/actions";
import { platforms } from "@/data/site";

type Result = Awaited<ReturnType<typeof createDownload>>;

export function Downloader() {
  const [result, setResult] = useState<Result | null>(null);
  const [pending, startTransition] = useTransition();

  return <div className="card mx-auto max-w-4xl">
    <form action={(formData) => startTransition(async () => setResult(await createDownload(formData)))} className="grid gap-3 md:grid-cols-[1fr_220px_auto]">
      <input className="input" name="url" placeholder="Paste a public media URL..." required />
      <select className="input" name="platform" defaultValue="youtube">{platforms.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}</select>
      <input type="hidden" name="captchaToken" value="demo-captcha-token" />
      <button className="btn" disabled={pending}>{pending ? "Processing..." : "Analyze"}</button>
    </form>
    {result && <div className="mt-6 rounded-2xl bg-slate-900 p-5">
      {!result.ok ? <p className="text-red-300">{result.error}</p> : <div>
        <p className="text-lg font-bold">{result.data.title}</p>
        <p className="text-sm text-slate-400">Duration: {result.data.duration} · Platform: {result.data.platform}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">{result.data.formats.map((f) => <button className="rounded-xl bg-white/10 p-3 text-left hover:bg-white/20" key={`${f.quality}-${f.extension}`}><strong>{f.quality}</strong><span className="block text-sm text-slate-400">{f.extension.toUpperCase()} · {f.size}</span></button>)}</div>
      </div>}
    </div>}
  </div>;
}
