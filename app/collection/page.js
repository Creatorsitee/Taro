import Collection from "@/content/Home/Collection"

export default function CollectionPage() {
  return (
    <main className="main-responsive relative top-[86px] mx-auto flex w-full max-w-[96rem] flex-col gap-8 pb-32 pt-8">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-[#9b8cff]">Taro library</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Featured collections</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/60">Koleksi pilihan yang bisa kamu jelajahi gratis tanpa akun.</p>
      </div>
      <Collection />
    </main>
  )
}
