import { useEffect, useState } from 'react'
import { getWaLink, getTelLink } from '../data/lapakData'

export default function StickyMobileBar() {
  const [tampilBar, setTampilBar] = useState(false)

  useEffect(() => {
    const heroEl = document.getElementById('hero')

    if (heroEl && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setTampilBar(!entry.isIntersecting && entry.boundingClientRect.top < 0)
        },
        { threshold: 0 }
      )
      observer.observe(heroEl)
      return () => observer.disconnect()
    }

    const handleScroll = () => {
      setTampilBar(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      aria-hidden={!tampilBar}
      className={`fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-3 p-3 bg-white/95 backdrop-blur-xs border-t border-emerald-950/10 md:hidden shadow-lg transition-all duration-200 ${
        tampilBar
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={getTelLink()}
        tabIndex={tampilBar ? 0 : -1}
        className="min-h-[48px] flex items-center justify-center rounded-full bg-emerald-950 text-white text-sm font-semibold transition-colors active:bg-neutral-800"
      >
        Telepon
      </a>
      <a
        href={getWaLink()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={tampilBar ? 0 : -1}
        className="min-h-[48px] flex items-center justify-center rounded-full bg-[#00AA13] hover:bg-[#009210] text-white text-sm font-bold transition-colors active:bg-[#009210]"
      >
        Chat WhatsApp
      </a>
    </div>
  )
}
