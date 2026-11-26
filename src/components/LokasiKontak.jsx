import { useEffect, useRef, useState } from 'react'
import { lapakInfo, getWaLink, getTelLink } from '../data/lapakData'

export default function LokasiKontak() {
  const [sudahSalin, setSudahSalin] = useState(false)
  const salinTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (salinTimerRef.current) {
        clearTimeout(salinTimerRef.current)
      }
    }
  }, [])

  const handleSalinPatokan = async () => {
    const teksSalin = `${lapakInfo.namaLapak} (${lapakInfo.namaPemilik})\nAlamat: ${lapakInfo.alamatLengkap}\nPatokan: ${lapakInfo.patokanLokasi}\nKontak: ${lapakInfo.nomorTampil}`

    if (!navigator?.clipboard?.writeText) return

    try {
      await navigator.clipboard.writeText(teksSalin)
      setSudahSalin(true)
      if (salinTimerRef.current) {
        clearTimeout(salinTimerRef.current)
      }
      salinTimerRef.current = setTimeout(() => setSudahSalin(false), 2000)
    } catch {
      // Abaikan jika izin clipboard ditolak browser
    }
  }

  return (
    <section id="lokasi" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kontainer Utama Sudut Melengkung Besar (bg-emerald-950) */}
        <div className="bg-emerald-950 text-white rounded-[32px] sm:rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl shadow-emerald-950/10">
          
          {/* Kolom Kiri: 7 Kolom (Informasi, Tombol Utilitas & CTA) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              {/* Label Putih Lembut Solid (Tanpa Warna Hijau Neon) */}
              <span className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-2 block">
                Lokasi &amp; Pemesanan
              </span>

              {/* Judul Utama (Figtree Extrabold Putih Solid) */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Kunjungi Langsung Lapak Kami
              </h2>

              {/* Detail Alamat, Patokan, dan Jam Operasional */}
              <div className="space-y-5 text-neutral-200 mt-8">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Alamat Lengkap
                  </p>
                  <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                    {lapakInfo.alamatLengkap}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Petunjuk Arah &amp; Patokan
                  </p>
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {lapakInfo.patokanLokasi}
                  </p>
                </div>

                {/* 2 Tombol Utilitas Praktis untuk Supir & Pembeli (Area Sentuh >= 44px) */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={lapakInfo.googleMapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 border border-white/35 transition-colors shadow-xs"
                  >
                    Buka di Google Maps
                  </a>

                  <button
                    type="button"
                    onClick={handleSalinPatokan}
                    className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 border border-white/35 transition-colors cursor-pointer shadow-xs"
                  >
                    {sudahSalin ? 'Patokan Tersalin ✓' : 'Salin Patokan Lokasi'}
                  </button>
                </div>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Jam Operasional
                  </p>
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {lapakInfo.jamOperasional}
                  </p>
                </div>

                {/* Teks Nomor Kontak Langsung (Angka Tajam & Rapi dengan tabular-nums) */}
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Nomor Telepon / WhatsApp Langsung
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-white tracking-wide tabular-nums">
                    {lapakInfo.nomorTampil}{' '}
                    <span className="text-sm font-normal text-neutral-300">
                      ({lapakInfo.namaPemilik})
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 2 Tombol CTA Sejajar Tanpa Ikon */}
            <div className="mt-10 flex flex-wrap gap-4 pt-2">
              <a
                href={getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center rounded-full bg-[#00AA13] hover:bg-[#009210] text-white font-bold px-7 py-3.5 transition-colors shadow-sm text-center"
              >
                Chat WhatsApp
              </a>

              <a
                href={getTelLink()}
                className="min-h-[48px] inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 hover:border-white hover:bg-white/20 text-white font-semibold px-7 py-3.5 transition-all text-center"
              >
                Telepon Langsung
              </a>
            </div>
          </div>

          {/* Kolom Kanan: 5 Kolom (Google Maps Embed) */}
          <div className="lg:col-span-5 w-full h-80 lg:h-full min-h-[340px] bg-neutral-800">
            <iframe
              src={lapakInfo.googleMapsEmbedUrl}
              className="w-full h-full min-h-[340px] border-0"
              title="Peta Lokasi Lapak Grosir Semangka Tresnojoyo di Pasar Induk Kramat Jati"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
