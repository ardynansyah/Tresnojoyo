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
  alamatLengkap: "Los Buah Semangka Blok [X] No. [Y], Pasar Induk Kramat Jati, Jakarta Timur",
  patokanLokasi: "Masuk dari Pintu [X], lurus ikuti jalur utama menuju deretan lapak semangka.",
  jamOperasional: "Buka setiap hari (Pagi – Malam). Konfirmasi via Telepon/WA sebelum meluncur untuk cek ketersediaan stok hari ini.",
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
    deskripsi: "Daging buah merah pekat, tekstur renyah (crispy), kadar air melimpah, dan manis segar tanpa repot biji. Pilihan utama untuk konsumsi premium dan efisiensi olahan makanan.",
    kecocokanUsaha: [
      "Supermarket & Toko Buah Modern",
      "Katering Prasmanan & Acara Pernikahan",
      "Hotel & Restoran",
      "Pedagang Buah Potong & Juice Bar"
    ],
    gambar: "/images/varian-merah-non-biji.svg"
  },
  {
    id: "inul-lonjong",
    nama: "Semangka Inul / Lonjong",
    spesifikasi: "Grade A & B (Bobot 2.5 – 5 kg/butir)",
    deskripsi: "Bentuk lonjong lonjong khas dengan kulit gelap/bercorak eksotis. Daging renyah dengan rasa manis pekat, serta ukuran pas yang sangat mudah dipotong dan dibawa pembeli.",
    kecocokanUsaha: [
      "Pedagang Buah Keliling & Kios Eceran",
      "Warung Jus Buah Segar",
      "Rumah Makan Padang & Prasmanan",
      "Konsumsi Rumah Tangga & Hajatan"
    ],
    gambar: "/images/varian-inul.svg"
  },
  {
    id: "semangka-kuning",
    nama: "Semangka Kuning",
    spesifikasi: "Grade Super (Bobot 4 – 8 kg/butir)",
    deskripsi: "Daging buah berwarna kuning keemasan yang cantik dan eye-catching, dengan cita rasa manis madu unik dan tekstur lembut renyah. Sangat digemari untuk variasi display dan sajian spesial.",
    kecocokanUsaha: [
      "Pedagang Sop Buah, Es Campur & Minuman Segar",
      "Katering Acara Mewah & Paket Hampers Buah",
      "Toko Buah Premium & Swalayan",
      "Kafe & Mocktail Bar"
    ],
    gambar: "/images/varian-kuning.svg"
  }
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
