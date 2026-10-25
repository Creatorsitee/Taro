const updates = [
  { title: "Jelajahi katalog lebih cepat", text: "Gunakan pencarian dan filter untuk menemukan tontonan berikutnya." },
  { title: "Riwayat tontonan tetap praktis", text: "Lanjutkan episode terakhir langsung dari menu Continue Watching." },
  { title: "Semua fitur terbuka", text: "Taro sekarang dapat digunakan tanpa login dan tanpa biaya." },
]

export default function NewsPage() {
  return (
    <main className="main-responsive relative top-[86px] mx-auto flex w-full max-w-[96rem] flex-col gap-8 pb-32 pt-8">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-[#9b8cff]">Taro updates</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">News & updates</h1>
        <p className="mt-2 text-sm text-white/60">Kabar terbaru dan panduan singkat untuk menikmati Taro.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {updates.map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-lg font-medium text-white">{item.title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p></article>)}
      </div>
    </main>
  )
}
