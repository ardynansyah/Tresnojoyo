# Panduan Desain & Sistem UI "Tresnojoyo"
Landing Page B2B Grosir Semangka — Pasar Induk Kramat Jati (Dominan Hijau, Bersih, Anti-AI Slop & Bebas Warna Glow)

---

## 1. Filosofi Desain: Anti-AI Slop & Bebas Warna Font Glow/Neon
Desain memadukan struktur visual website Gojek yang berani dan bersih dengan kesegaran spektrum warna **Hijau Semangka**:
- **Bebas Badge/Banner Dekoratif:** Dilarang menggunakan card banner berwarna merah marun gelap, pill badge dekoratif ("VARIAN TERPOPULER", "STOK RUTIN"), dan label berkotak di atas judul kartu katalog. Seluruh foto produk ditampilkan bersih di atas kartu berlatar terang (`bg-[#F3F8F4]`).
- **Bebas Warna Font Terang/Neon/Glow:** Dilarang menggunakan warna font pastel terang (seperti `text-red-300`, `text-emerald-300`, `text-green-400`) atau drop-shadow pada teks.
  - Di atas kanvas terang (`bg-white` / `bg-[#F3F8F4]`): Gunakan teks gelap solid seperti hijau tua pekat (`text-emerald-950`), hitam arang (`text-neutral-900`), dan abu-abu gelap solid (`text-neutral-700` atau `text-neutral-800`).
  - Label kecil (*eyebrow text*) di atas judul section: Gunakan hijau tua solid (`text-emerald-800`), bukan warna hijau neon.
  - Di atas kanvas gelap (Hero overlay & blok Lokasi): Gunakan putih solid (`text-white`) untuk judul dan putih lembut (`text-neutral-200` / `text-neutral-300`) untuk paragraf/label.
- **Background Foto Semangka Segar:** Hero dan Navbar disatukan dalam satu wrapper berlatar foto semangka resolusi tinggi, dilapisi overlay gradasi hijau tua semangka (`from-emerald-950/85 via-emerald-950/75 to-emerald-950/90`).
- **Transisi Lengkung Lembut:** Area atas hijau gelap ditumpuk oleh kanvas hijau lembut (`bg-[#F3F8F4]`) yang melengkung ke atas (`rounded-t-[40px] sm:rounded-t-[64px]`).

---

## 2. Palet Warna Semangka

- **Hijau Tua Semangka (`emerald-950` / `emerald-900`):**
  Warna utama untuk judul-judul besar (`text-emerald-950`), lapisan gradasi overlay hero, kontainer lokasi, dan background footer.
- **Hijau Solid untuk Eyebrow (`emerald-800`):**
  Warna label kecil di atas judul section pada kanvas terang. Bersih, berwibawa, dan kontras tajam.
- **Hijau Segar (`#00AA13` / hover `#009210`):**
  Warna khas kulit semangka segar dan tombol tindakan utama (*Primary CTA*) "Chat WhatsApp", "Tanya Stok Varian Ini", dan tombol thumb-bar di mobile.
- **Putih & Hijau Lembut (`#FFFFFF` & `bg-[#F3F8F4]`):**
  Kanvas utama bagian bawah yang melengkung menumpuk Hero. Memberikan sensasi bersih, lapang, dan segar layaknya pasar buah modern.
- **Merah Semangka (`#E11D48`):**
  Digunakan sangat hemat hanya sebagai titik aksen pada wordmark brand (`TRESNOJOYO.`).

---

## 3. Tipografi (Kombinasi Figtree & Golos Text)

Konfigurasi Tailwind CSS v4 `@theme`:
```css
@theme {
  --font-sans: "Golos Text", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Figtree", ui-sans-serif, system-ui, sans-serif;
}
```

- **Heading & Wordmark Display:** **`Figtree`** (Google Fonts: weight 700, 800)
  - Digunakan untuk wordmark brand `TRESNOJOYO.`, headline Hero, judul pilar keunggulan, judul katalog, galeri, dan lokasi.
  - Atribut & Class: `font-display font-bold` / `font-extrabold tracking-tight`.
- **Body, Tombol & Angka:** **`Golos Text`** (Google Fonts: weight 400, 500, 600)
  - Digunakan untuk subheadline, deskripsi produk, rincian alamat, menu navigasi, dan tombol pill.
  - Atribut & Class: `font-sans font-normal / font-medium / font-semibold text-neutral-700`.
- **Presisi Angka (*Tabular Numbers*):**
  - Menggunakan class `tabular-nums` untuk tampilan nomor telepon (`0812-9000-0208`) dan spesifikasi bobot semangka (`Grade A 6 – 10+ kg/butir`) agar angka tersusun rapi, tajam, dan seragam.

---

## 4. Struktur Komponen UI Lengkap

1. **`Navbar.jsx`**:
   - Background: `bg-transparent text-white` menyatu di atas foto.
   - Wordmark: `TRESNOJOYO` (`font-display font-extrabold tracking-tight`) + titik merah `#E11D48`.
   - Navigasi: Tautan teks warna `text-neutral-200 hover:text-white` (`#katalog`, `#galeri`, `#lokasi`) + tombol pill `Telepon`.

2. **`Hero.jsx`**:
   - Layout: 1 kolom rata tengah (`text-center max-w-4xl mx-auto`).
   - Headline: *"Grosir Semangka Segar, Langsung dari Bos Lapak."* (`font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white`).
   - Subheadline: `text-neutral-200 text-lg sm:text-xl max-w-2xl mx-auto mt-5`.
   - CTA Group:
     - Tombol WhatsApp: `rounded-full bg-[#00AA13] hover:bg-[#009210] text-white font-bold px-8 py-3.5` (tanpa ikon).
     - Tombol Telepon: `rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3.5` (tanpa ikon).

3. **`Keunggulan.jsx`**:
   - Container: `bg-[#F3F8F4] rounded-t-[40px] sm:rounded-t-[64px] -mt-16 sm:-mt-24 relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-28`.
   - Judul pilar: `font-display text-xl font-bold tracking-tight text-emerald-950`.
   - Deskripsi: `text-neutral-700 text-base mt-2`.

4. **`Katalog.jsx` (`#katalog`)**:
   - Container: `bg-white py-16 sm:py-24`.
   - Eyebrow: `text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2`.
   - Grid 3 kartu varian bersih (`bg-[#F3F8F4] rounded-3xl p-6`):
     - Foto produk bersih rasio `aspect-[4/3] rounded-2xl bg-white border border-emerald-950/5` tanpa badge atau placeholder text.
     - Tanpa pill badge dekoratif di atas nama.
     - Nama varian (`font-display text-xl sm:text-2xl font-bold tracking-tight text-emerald-950`).
     - Spesifikasi grade & bobot: `text-sm font-semibold text-neutral-800 mt-1.5 tabular-nums`.
     - Deskripsi: `text-neutral-700 text-base mt-2.5`.
     - Kecocokan usaha: `text-sm text-neutral-700`.
     - Tombol CTA: Pill bulat penuh `bg-[#00AA13]` bertuliskan "Tanya Stok Varian Ini".

5. **`Galeri.jsx` (`#galeri`)**:
   - Container: `bg-[#F3F8F4] py-16 sm:py-24`.
   - Eyebrow: `text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2`.
   - Judul: `font-display font-extrabold text-emerald-950 tracking-tight`.
   - Grid 3 foto operasional tanpa text overlay, dengan caption faktual di bawah foto (`text-sm font-medium text-neutral-800`).

6. **`LokasiKontak.jsx` (`#lokasi`)**:
   - Container: `bg-white py-16 sm:py-24`.
   - Kotak kartu raksasa melengkung `bg-emerald-950 text-white rounded-[32px] sm:rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-12`:
     - Label: `text-neutral-300 font-semibold uppercase tracking-widest text-xs`.
     - Judul: `font-display font-extrabold tracking-tight text-white`.
     - Detail alamat & patokan: `text-neutral-200`.
     - Nomor kontak: `text-white font-bold tabular-nums`.
     - Tombol utilitas: "Buka di Google Maps" dan "Salin Patokan Lokasi".
     - Tombol CTA: WhatsApp & Telepon.
     - Embed Google Maps interaktif.

7. **`Footer.jsx`**:
   - Background: `bg-emerald-950 text-neutral-300 border-t border-white/10 py-12`.
   - Wordmark brand `TRESNOJOYO.` (`font-display font-extrabold text-white`), alamat ringkas, nomor telepon `tabular-nums text-white`, tautan cepat, dan hak cipta.

8. **`StickyMobileBar.jsx`**:
   - Khusus mobile: `fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-3 p-3 bg-white/95 backdrop-blur-xs border-t border-emerald-950/10 md:hidden`.
   - Tombol "Telepon" dan "Chat WhatsApp".
