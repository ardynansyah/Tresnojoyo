import { lapakInfo } from '../data/lapakData'

const tahunSekarang = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-neutral-300 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Kolom Kiri: Brand & Ringkasan Alamat */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-baseline gap-1">
              <span className="font-display font-extrabold text-white text-2xl tracking-tight">
                {lapakInfo.namaLapak.toUpperCase()}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] inline-block"></span>
            </div>
            <p className="text-sm font-medium text-neutral-300">
              {lapakInfo.tagline}
            </p>
            <p className="text-sm text-neutral-300 max-w-lg leading-relaxed">
              {lapakInfo.alamatLengkap} ({lapakInfo.namaPemilik} — <span className="tabular-nums font-semibold text-white">{lapakInfo.nomorTampil}</span>)
            </p>
          </div>

          {/* Kolom Kanan: Tautan Cepat */}
          <div className="md:col-span-5 flex flex-col md:items-end space-y-3">
            <p className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">
              Navigasi Halaman
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-neutral-300">
              <a
                href="#katalog"
                className="min-h-[44px] inline-flex items-center py-2 hover:text-white transition-colors"
              >
                Katalog
              </a>
              <a
                href="#galeri"
                className="min-h-[44px] inline-flex items-center py-2 hover:text-white transition-colors"
              >
                Galeri
              </a>
              <a
                href="#lokasi"
                className="min-h-[44px] inline-flex items-center py-2 hover:text-white transition-colors"
              >
                Lokasi
              </a>
            </div>
          </div>

        </div>

        {/* Garis Pemisah & Hak Cipta */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
          <p>
            © {tahunSekarang} {lapakInfo.namaLapak} Grosir Semangka. Hak Cipta Dilindungi.
          </p>
          <p>
            {lapakInfo.wilayah}.
          </p>
        </div>
      </div>
    </footer>
  )
}
