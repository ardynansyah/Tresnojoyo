const fotoGaleri = [
  {
    id: 'galeri-1',
    src: '/images/galeri-1.svg',
    caption: 'Bongkar muat pasokan tonase semangka segar langsung dari armada truk petani sentra daerah.',
  },
  {
    id: 'galeri-2',
    src: '/images/galeri-2.svg',
    caption: 'Sortir kualitas ketat: seleksi kematangan suara ketuk dan penimbangan bobot akurat sebelum muat.',
  },
  {
    id: 'galeri-3',
    src: '/images/galeri-3.svg',
    caption: 'Suasana stok melimpah di deretan los buah semangka Pasar Induk Kramat Jati siap angkut.',
  },
]

export default function Galeri() {
  return (
    <section id="galeri" className="bg-[#F3F8F4] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section Tanpa Warna Neon */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Dokumentasi Operasional Lapak
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
            Suasana Lapak &amp; Bongkar Muat Harian
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            Dokumentasi pasokan harian dan aktivitas bongkar muat langsung di los buah Pasar Induk Kramat Jati, Jakarta Timur.
          </p>
        </div>

        {/* Grid 3 Kolom Galeri Bersih */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {fotoGaleri.map((foto) => (
            <div key={foto.id} className="flex flex-col">
              {/* Bingkai Foto Rasio 4:3 Bersih */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xs border border-emerald-950/5">
                <img
                  src={foto.src}
                  alt={foto.caption}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Caption Faktual di Bawah Foto (Teks Gelap Solid, Tidak Menumpuk Foto) */}
              <p className="text-sm font-medium text-neutral-800 mt-3 leading-relaxed">
                {foto.caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
