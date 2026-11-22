import { lapakInfo } from './data/lapakData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Keunggulan from './components/Keunggulan'
import Katalog from './components/Katalog'
import Galeri from './components/Galeri'
import LokasiKontak from './components/LokasiKontak'
import Footer from './components/Footer'
import StickyMobileBar from './components/StickyMobileBar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F8F4] text-neutral-950 font-sans selection:bg-[#E11D48] selection:text-white pb-24 md:pb-0">
      {/* Wrapper Atas: Latar Foto Semangka Segar dengan Overlay Gradasi Hijau Tua */}
      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${lapakInfo.heroImage})` }}
      >
        {/* Lapisan overlay gradasi hijau tua semangka */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-950/75 to-emerald-950/90 pointer-events-none" />

        {/* Konten Atas: Navbar Transparan & Hero */}
        <div className="relative z-10 flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Konten Utama */}
      <main className="relative">
        <Keunggulan />
        <Katalog />
        <Galeri />
        <LokasiKontak />
      </main>

      {/* Footer Minimalis Bersih */}
      <Footer />

      {/* Sticky Mobile Bar khusus layar HP */}
      <StickyMobileBar />
    </div>
  )
}
