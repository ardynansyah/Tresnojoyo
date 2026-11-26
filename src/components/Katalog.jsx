import { varianSemangka, getWaLink } from '../data/lapakData'

export default function Katalog() {
  return (
    <section id="katalog" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section Rata Kiri Tegas Tanpa Warna Neon */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Pilihan Varietas Unggulan
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
            Katalog Semangka Pilihan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            Pasokan rutin siap kirim dalam kuantitas tonase truk maupun partai eceran dengan jaminan sortir manis dan segar.
          </p>
        </div>

        {/* Grid 3 Kolom Varian: Latar Bersih Tanpa Banner Dekoratif */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {varianSemangka.map((varian) => (
            <div
              key={varian.id}
              className="bg-[#F3F8F4] rounded-3xl p-6 flex flex-col justify-between border border-emerald-950/5 hover:-translate-y-0.5 hover:border-emerald-950/15 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Bingkai Foto Rasio 4:3 Bersih */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl mb-5 bg-white border border-emerald-950/5">
                  <img
                    src={varian.gambar}
                    alt={varian.nama}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Nama Varian (Figtree Bold & Gelap Solid) */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-emerald-950">
                  {varian.nama}
                </h3>

                {/* Spesifikasi Grade & Bobot (Teks Gelap Solid, Rapi & Presisi) */}
                <p className="text-sm font-semibold text-neutral-800 mt-1.5 tabular-nums">
                  {varian.spesifikasi}
                </p>

                {/* Deskripsi Singkat */}
                <p className="text-neutral-700 text-base mt-2.5 leading-relaxed">
                  {varian.deskripsi}
                </p>

                {/* Keterangan Kecocokan Usaha */}
                <div className="mt-5 pt-3.5 border-t border-emerald-950/10">
                  <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-1">
                    Cocok Untuk:
                  </p>
                  <p className="text-sm text-neutral-700 leading-normal">
                    {varian.kecocokanUsaha.join(' • ')}
                  </p>
                </div>
              </div>

              {/* Tombol Pill Penuh (Tanpa Ikon) */}
              <a
                href={getWaLink(
                  `Halo Pak, saya mau tanya ketersediaan stok & harga untuk ${varian.nama} hari ini.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full min-h-[48px] inline-flex items-center justify-center rounded-full bg-[#00AA13] hover:bg-[#009210] text-white font-bold py-3.5 text-center transition-colors shadow-sm"
              >
                Tanya Stok Varian Ini
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
