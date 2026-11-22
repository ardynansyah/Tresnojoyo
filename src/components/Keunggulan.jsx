const daftarPilar = [
  {
    id: 'harga-tangan-pertama',
    judul: 'Harga Tangan Pertama',
    deskripsi:
      'Pasokan langsung dari jaringan petani daerah ke lapak kami di Kramat Jati.',
    visual: '/images/pilar-harga.svg',
  },
  {
    id: 'sortir-matang-pohon',
    judul: 'Sortir Matang Pohon',
    deskripsi:
      'Kualitas manis dan bobot terjamin sesuai grade kebutuhan usaha Anda.',
    visual: '/images/pilar-sortir.svg',
  },
  {
    id: 'kunci-stok',
    judul: 'Kunci Stok Sebelum Jalan',
    deskripsi:
      'Konfirmasi ketersediaan barang via telepon atau WA sebelum armada meluncur.',
    visual: '/images/pilar-stok.svg',
  },
]

export default function Keunggulan() {
  return (
    <section className="bg-[#F3F8F4] rounded-t-[40px] sm:rounded-t-[64px] -mt-16 sm:-mt-24 relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Grid 3 Pilar Keunggulan: Tanpa Card Border, Tanpa Kotak Ikon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {daftarPilar.map((pilar) => (
            <div key={pilar.id} className="flex flex-col items-center">
              {/* Visual Bersih Tanpa Bingkai Kaku */}
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img
                  src={pilar.visual}
                  alt={pilar.judul}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Judul Tebal Bernuansa Hijau Tua (Figtree) */}
              <h3 className="font-display text-xl font-bold tracking-tight text-emerald-950">
                {pilar.judul}
              </h3>

              {/* Deskripsi Ringkas (Golos Text) */}
              <p className="text-neutral-700 text-base mt-2 leading-relaxed max-w-xs">
                {pilar.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
