"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [autoplay, setAutoplay] = useState(true)
  const [quality, setQuality] = useState("Auto")

  return (
    <main className="main-responsive relative top-[86px] mx-auto flex w-full max-w-[48rem] flex-col gap-8 pb-32 pt-8">
      <div><p className="text-sm uppercase tracking-[0.25em] text-[#9b8cff]">Preferences</p><h1 className="mt-2 text-3xl font-semibold text-white">Settings</h1><p className="mt-2 text-sm text-white/60">Atur pengalaman menontonmu. Semua preferensi tersedia tanpa login.</p></div>
      <section className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <label className="flex cursor-pointer items-center justify-between gap-4 p-5 text-white"><span><span className="block font-medium">Autoplay episode</span><span className="mt-1 block text-sm text-white/50">Putar episode berikutnya secara otomatis.</span></span><input type="checkbox" checked={autoplay} onChange={(event) => setAutoplay(event.target.checked)} className="size-5 accent-[#9b8cff]" /></label>
        <label className="flex items-center justify-between gap-4 p-5 text-white"><span><span className="block font-medium">Kualitas video</span><span className="mt-1 block text-sm text-white/50">Pilih kualitas default pemutar.</span></span><select value={quality} onChange={(event) => setQuality(event.target.value)} className="rounded-lg border border-white/10 bg-[#1a1825] px-3 py-2 text-sm"><option>Auto</option><option>1080p</option><option>720p</option></select></label>
      </section>
    </main>
  )
}
