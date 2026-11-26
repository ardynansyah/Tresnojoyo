import { getWaLink, getTelLink } from '../data/lapakData'

export default function Hero() {
  return (
    <section id="hero" className="text-white pt-12 pb-36 sm:pt-20 sm:pb-44 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline Utama (Figtree tebal solid putih) */}
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
          Grosir Semangka Segar, Langsung dari Bos Lapak.
        </h1>

        {/* Subheadline (Putih Lembut text-neutral-200, Bahasa Dagang Pasar Induk) */}
        <p className="text-neutral-200 text-lg sm:text-xl max-w-2xl mx-auto mt-5 leading-relaxed font-normal">
          Pasokan semangka partai truk dan eceran di Pasar Induk Kramat Jati. Langsung dari petani, sortir ketuk di tempat, dan timbang akurat untuk pedagang buah, katering, hingga warung jus.
        </p>

        {/* CTA Group (Pill Bulat Penuh Tanpa Ikon) */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={getWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center rounded-full bg-[#00AA13] hover:bg-[#009210] text-white font-bold px-8 py-3.5 transition-colors shadow-sm"
          >
            Chat WhatsApp
          </a>

          <a
            href={getTelLink()}
            className="min-h-[48px] inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 hover:border-white hover:bg-white/20 text-white font-semibold px-8 py-3.5 transition-all shadow-sm"
          >
            Telepon Langsung
          </a>
        </div>

      </div>
    </section>
  )
}
