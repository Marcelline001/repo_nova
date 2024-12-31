<template>
    <div class="about-container">
      <!-- Section: Tentang Kami -->
      <section class="about-section" id="about-us">
        <div class="content">
          <h2>Tentang Kami</h2>
          <p>Selamat datang di <strong>Kulineran</strong>, solusi terbaik untuk memenuhi kebutuhan kuliner Anda dengan cara yang mudah, cepat, dan praktis. Kami hadir untuk memberikan pengalaman baru dalam memesan makanan dengan satu klik, menjembatani antara pecinta kuliner dan berbagai pilihan hidangan lezat dari berbagai restoran.</p>
        </div>
      </section>
  
      <!-- Section: Visi & Misi -->
      <section class="about-section" id="vision-mission">
        <div class="content">
          <h2>Visi Kami</h2>
          <p>Menjadi platform pemesanan makanan terdepan yang menghubungkan pelanggan dengan berbagai pilihan kuliner lokal dan internasional, memberikan pengalaman tanpa batas dalam menikmati makanan favorit kapan saja dan di mana saja.</p>
          <h2>Misi Kami</h2>
          <ul>
            <li><p>Mempermudah akses ke beragam pilihan makanan berkualitas tinggi.</p></li>
            <li><p>Memberikan pengalaman pemesanan yang cepat, aman, dan menyenangkan.</p></li>
            <li><p>Mendukung usaha kuliner lokal untuk berkembang melalui kemudahan akses kepada pelanggan.</p></li>
          </ul>
        </div>
      </section>
  
      <!-- Section: Mengapa Memilih Kami -->
      <section class="about-section" id="why-choose-us">
        <div class="content">
          <h2>Mengapa Memilih Kami?</h2>
          <div class="feature">
            <h3>Kemudahan Penggunaan</h3>
            <p>Antarmuka kami yang sederhana dan ramah pengguna membuat pemesanan makanan lebih mudah dari sebelumnya.</p>
          </div>
          <div class="feature">
            <h3>Pembayaran Fleksibel</h3>
            <p>Pilih metode pembayaran yang paling nyaman, mulai dari uang tunai hingga berbagai jenis dompet digital dan kartu kredit.</p>
          </div>
          <div class="feature">
            <h3>Beragam Pilihan Makanan</h3>
            <p>Temukan pilihan makanan dari berbagai kategori yang dapat memuaskan berbagai selera, baik itu lokal maupun internasional.</p>
          </div>
        </div>
      </section>
  
      <!-- Section: Komitmen Kami -->
      <section class="about-section" id="commitment">
        <div class="content">
          <h2>Komitmen Kami</h2>
          <p>Kami berkomitmen untuk memberikan pengalaman kuliner terbaik melalui layanan yang cepat, kualitas makanan yang terjaga, dan dukungan pelanggan yang siap membantu kapan saja. Kami terus bekerja untuk memperbarui dan meningkatkan aplikasi agar lebih responsif terhadap kebutuhan pengguna dan mitra kami.</p>
        </div>
      </section>
  
      <!-- Section: Tim Kami -->
      <section class="about-section" id="team">
        <div class="content">
          <h2>Tim Kami</h2>
          <p>Di balik Aplikasi Kuliner, terdapat tim yang penuh semangat dan berdedikasi untuk menghadirkan pengalaman kuliner terbaik. Tim kami terdiri dari berbagai ahli, mulai dari pengembang aplikasi hingga tim dukungan pelanggan yang siap membantu Anda 24/7.</p>
          <!-- Add team member pictures or descriptions if necessary -->
        </div>
      </section>
  
      <!-- Section: Bergabunglah dengan Kami -->
      <section class="about-section" id="join-us">
        <div class="content">
          <h2>Bergabunglah dengan Kami</h2>
          <p>Apakah Anda seorang pecinta kuliner atau pemilik restoran, kami mengundang Anda untuk bergabung dengan Aplikasi Kuliner. Jika Anda seorang pelanggan, nikmati kemudahan memesan makanan favorit Anda kapan saja. Jika Anda seorang vendor, kami siap membantu Anda memperluas jangkauan pelanggan dan meningkatkan bisnis Anda melalui platform kami.</p>
          <button @click="joinNow" class="cta-button">Gabung Sekarang</button>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
    methods: {
      joinNow() {
        // Handle the action when the "Gabung Sekarang" button is clicked
        console.log("Join now clicked!");
        // You could add a navigation or other logic here
      }
    }
  }
  </script>
  
  <style scoped>
  .about-container {
    font-family: "Noto Serif", serif !important;
    padding: 10rem;
  }
  
  .about-section {
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .about-section h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .feature {
    margin-bottom: 1rem;
  }
  
  .feature h3 {
    font-size: 1.25rem;
    color: #5a5a5a;
  }

  p {
  font-size: 20px; /* Ukuran default */
  line-height: 1.6; /* Jarak antar baris yang nyaman */
  color: #333; /* Warna teks */
}

  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #f79c42;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #d87b2a;
  }
  
  @media (max-width: 768px) {
    .about-container {
      padding: 1rem;
    }
  
    .about-section {
      padding: 1rem;
    }
  
    .cta-button {
      width: 100%;
    }
  }
  </style>
  