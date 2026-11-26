import { daftarPilar } from '../data/lapakData'

export default function Keunggulan() {
  return (
    <section className="bg-[#F3F8F4] rounded-t-[40px] sm:rounded-t-[64px] -mt-16 sm:-mt-24 relative z-10 pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strip Fakta Horizontal 3 Kolom Rata Kiri dengan Indeks & Garis Pembatas Tipis */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-emerald-950/10">
          {daftarPilar.map((pilar) => (
            <div
              key={pilar.id}
              className="py-6 md:py-0 md:px-8 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0 text-left"
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-800 tabular-nums block mb-3">
                {pilar.kode}
              </span>

              {/* Judul Tebal Bernuansa Hijau Tua (Figtree) */}
              <h3 className="font-display text-xl font-bold tracking-tight text-emerald-950">
                {pilar.judul}
              </h3>

              {/* Deskripsi Ringkas (Golos Text) */}
              <p className="text-neutral-700 text-base mt-2 leading-relaxed">
                {pilar.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
