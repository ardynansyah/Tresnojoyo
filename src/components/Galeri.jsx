import { fotoGaleri } from '../data/lapakData'

function GaleriItem({ foto, aspectClass }) {
  return (
    <figure className="flex flex-col">
      {/* Bingkai Foto Bersih Tanpa Overlay Teks */}
      <div className={`${aspectClass} w-full overflow-hidden rounded-2xl bg-white shadow-xs border border-emerald-950/5`}>
        <img
          src={foto.src}
          alt={foto.caption}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Caption Faktual di Bawah Foto (Teks Gelap Solid, Tidak Menumpuk Foto) */}
      <figcaption className="text-sm font-medium text-neutral-800 mt-3 leading-relaxed">
        {foto.caption}
      </figcaption>
    </figure>
  )
}

export default function Galeri() {
  const [fotoUtama, ...fotoPendukung] = fotoGaleri

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

        {/* Grid Asimetris: 1 Foto Utama (7 Kolom) + 2 Foto Pendukung (5 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {fotoUtama && (
            <div className="md:col-span-7">
              <GaleriItem foto={fotoUtama} aspectClass="aspect-[4/3]" />
            </div>
          )}

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8">
            {fotoPendukung.map((foto) => (
              <GaleriItem
                key={foto.id}
                foto={foto}
                aspectClass="aspect-[4/3] md:aspect-[16/9]"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
