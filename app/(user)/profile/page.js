import Link from "next/link"

export default function ProfilePage() {
  return (
    <main className="main-responsive relative top-[86px] mx-auto flex w-full max-w-[96rem] flex-col gap-8 pb-32 pt-8">
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-[#9b8cff]">Public profile</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Guest viewer</h1>
        <p className="mt-3 max-w-xl text-white/60">Nikmati Taro sebagai tamu. Tidak perlu membuat akun untuk menonton, mencari, atau menyimpan progres tontonan di perangkat ini.</p>
        <Link href="/catalog" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#12111a] transition hover:bg-white/80">Jelajahi katalog</Link>
      </section>
    </main>
  )
}
