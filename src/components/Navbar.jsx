import { lapakInfo, getTelLink } from '../data/lapakData'

export default function Navbar() {
  return (
    <header className="bg-transparent text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
        {/* Brand Wordmark (Figtree tebal + titik aksen merah semangka) */}
        <a href="#" className="flex items-baseline gap-1 group shrink-0">
          <span className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white transition-colors">
            {lapakInfo.namaLapak.toUpperCase()}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] inline-block"></span>
        </a>

        {/* Menu Navigasi & Tombol Telepon Tanpa Ikon */}
        <nav className="flex items-center gap-6 sm:gap-8">
          {/* Link Navigasi Lengkap Khusus Layar Desktop (Anti-Crowding di Mobile) */}
          <div className="hidden md:flex items-center gap-7">
            <a
              href="#katalog"
              className="text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            >
              Katalog
            </a>
            <a
              href="#galeri"
              className="text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            >
              Galeri
            </a>
            <a
              href="#lokasi"
              className="text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            >
              Lokasi
            </a>
          </div>

          {/* Tombol Pill Telepon Ringkas (Tampil di Semua Ukuran Layar) */}
          <a
            href={getTelLink()}
            className="rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 sm:px-5 sm:py-2 transition-all shadow-sm shrink-0"
          >
            Telepon
          </a>
        </nav>
      </div>
    </header>
  )
}
