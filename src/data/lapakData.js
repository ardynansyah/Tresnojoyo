/**
 * Data Terpusat Lapak Semangka "Tresnojoyo"
 * Lokasi: Pasar Induk Kramat Jati, Jakarta Timur
 */

export const lapakInfo = {
  namaLapak: "Tresnojoyo",
  tagline: "Supplier & Agen Grosir Semangka Segar — Pasar Induk Kramat Jati",
  namaPemilik: "Bapak Sutrisno",
  nomorTelepon: "+6281290000208",
  nomorWhatsApp: "6281290000208",
  nomorTampil: "0812-9000-0208",
  pesanWaDefault: "Halo Pak, saya dapat info lapaknya dari website. Mau tanya stok & harga semangka hari ini.",
  alamatLengkap: "Los Buah Semangka, Pasar Induk Kramat Jati, Jakarta Timur",
  wilayah: "Pasar Induk Kramat Jati, Jakarta Timur",
  patokanLokasi: "Masuk area Pasar Induk Kramat Jati menuju deretan los buah semangka. Hubungi Bapak Sutrisno via Telepon/WA sebelum tiba untuk titik bongkar & nomor los.",
  jamOperasional: "Buka setiap hari, 04.00 – 21.00 WIB (Bongkar muat truk pagi & malam). Konfirmasi via Telepon/WA sebelum jalan untuk kunci stok hari ini.",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.894348625621!2d106.8687289!3d-6.2776106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b392a83e09%3A0x6b9d628f32c16130!2sPasar%20Induk%20Kramat%20Jati!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  
  // Tautan langsung ke aplikasi Google Maps untuk navigasi supir / pembeli
  googleMapsDirectUrl: "https://www.google.com/maps/search/?api=1&query=Pasar+Induk+Kramat+Jati",

  // Foto semangka beresolusi tinggi untuk background hero & navbar.
  // Ganti ke "/images/hero-semangka.jpg" saat dokumentasi foto asli lapak sudah siap.
  heroImage: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=2000&q=80"
};

export const varianSemangka = [
  {
    id: "merah-non-biji",
    nama: "Semangka Merah Non-Biji",
    spesifikasi: "Grade A / Super (Bobot 6 – 10+ kg/butir)",
    deskripsi: "Daging merah penuh, manis merata, dan tanpa biji. Tahan angkut untuk stok toko buah, potong buah hotel/katering, dan gerai jus.",
    kecocokanUsaha: [
      "Toko Buah & Swalayan",
      "Katering & Hotel",
      "Gerai Jus & Buah Potong"
    ],
    gambar: "/images/varian-merah-non-biji.svg"
  },
  {
    id: "inul-lonjong",
    nama: "Semangka Inul / Lonjong",
    spesifikasi: "Grade A & B (Bobot 2.5 – 5 kg/butir)",
    deskripsi: "Kulit tipis gelap, manis pekat, dan ukuran ringkas 2.5 – 5 kg. Cepat laku untuk kios buah eceran, pedagang keliling, dan rumah makan.",
    kecocokanUsaha: [
      "Kios Buah Eceran",
      "Pedagang Buah Keliling",
      "Rumah Makan & Warung Jus"
    ],
    gambar: "/images/varian-inul.svg"
  },
  {
    id: "semangka-kuning",
    nama: "Semangka Kuning",
    spesifikasi: "Grade Super (Bobot 4 – 8 kg/butir)",
    deskripsi: "Daging kuning cerah dengan rasa manis ringan dan banyak air. Banyak dicari penjual sop buah, es campur, dan display buah potong.",
    kecocokanUsaha: [
      "Penjual Sop Buah & Es Campur",
      "Katering & Paket Buah",
      "Toko Buah & Kafe"
    ],
    gambar: "/images/varian-kuning.svg"
  }
];

export const daftarPilar = [
  {
    id: "harga-tangan-pertama",
    kode: "01",
    judul: "Harga Tangan Pertama",
    deskripsi:
      "Pasokan langsung dari jaringan petani sentra daerah ke lapak Kramat Jati tanpa perantara.",
  },
  {
    id: "sortir-matang-pohon",
    kode: "02",
    judul: "Sortir Ketuk & Timbang Ulang",
    deskripsi:
      "Seleksi kematangan buah, cek kondisi kulit, dan timbang akurat sesuai grade pesanan.",
  },
  {
    id: "kunci-stok",
    kode: "03",
    judul: "Kunci Stok Sebelum Jalan",
    deskripsi:
      "Konfirmasi tonase, varian, dan titik bongkar via Telepon/WA sebelum armada meluncur.",
  },
];

export const fotoGaleri = [
  {
    id: "galeri-1",
    src: "/images/galeri-1.svg",
    caption:
      "Bongkar muat pasokan tonase semangka segar langsung dari armada truk petani sentra daerah.",
  },
  {
    id: "galeri-2",
    src: "/images/galeri-2.svg",
    caption:
      "Sortir kualitas ketat: seleksi kematangan suara ketuk dan penimbangan bobot akurat sebelum muat.",
  },
  {
    id: "galeri-3",
    src: "/images/galeri-3.svg",
    caption:
      "Suasana stok melimpah di deretan los buah semangka Pasar Induk Kramat Jati siap angkut.",
  },
];

/**
 * Helper untuk membuat tautan WhatsApp langsung dengan pesan ter-encode
 * @param {string} [customMessage] - Pesan opsional, jika tidak ada memakai pesanWaDefault
 * @returns {string} URL WhatsApp (https://wa.me/...)
 */
export function getWaLink(customMessage) {
  const message = customMessage || lapakInfo.pesanWaDefault;
  return `https://wa.me/${lapakInfo.nomorWhatsApp}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper untuk membuat tautan panggilan telepon langsung
 * @returns {string} URL protokol tel:
 */
export function getTelLink() {
  return `tel:${lapakInfo.nomorTelepon}`;
}
