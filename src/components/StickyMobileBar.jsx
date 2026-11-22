import { getWaLink, getTelLink } from '../data/lapakData'

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-3 p-3 bg-white/95 backdrop-blur-xs border-t border-emerald-950/10 md:hidden shadow-lg">
      <a
        href={getTelLink()}
        className="min-h-[48px] flex items-center justify-center rounded-full bg-emerald-950 text-white text-sm font-semibold transition-colors active:bg-neutral-800"
      >
        Telepon
      </a>
      <a
        href={getWaLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[48px] flex items-center justify-center rounded-full bg-[#00AA13] text-white text-sm font-bold transition-colors active:bg-[#009210]"
      >
        Chat WhatsApp
      </a>
    </div>
  )
}
