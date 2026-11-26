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
              className="min-h-[44px] inline-flex items-center py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            >
              Katalog
            </a>
            <a
              href="#galeri"
              className="min-h-[44px] inline-flex items-center py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            >
              Galeri
            </a>
            <a
              href="#lokasi"
              className="min-h-[44px] inline-flex items-center py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            >
              Lokasi
            </a>
          </div>

          {/* Tombol Pill Telepon Ringkas (Area Sentuh Minimal 44px) */}
          <a
            href={getTelLink()}
            className="min-h-[44px] inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 hover:border-white hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-2 transition-all shadow-sm shrink-0"
          >
            Telepon
          </a>
        </nav>
      </div>
    </header>
  )
}
