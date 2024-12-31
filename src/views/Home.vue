<template>
    <div class="home">
        <h1>Selamat datang di Kulineran</h1>
      <p>Temukan berbagai menu lezat untuk mencicipi.</p>
  
      <!-- Carousel Header -->
      <div class="carousel">
        <img src="@/assets/maknus.png" alt="Header Image" class="maknus-img" />
      </div>
  
      <div class="content">
        <!-- Sidebar -->
        <aside class="sidebar">
  <h3>Kategori Menu</h3>
  <ul>
    <li>
      <span>Makanan</span>
      <span>(1)</span>
    </li>
    <li>
      <span>Minuman</span>
      <span>(1)</span>
    </li>
    <li>
      <span>Gorengan</span>
      <span>(1)</span>
    </li>
    <li>
      <span>Bakaran</span>
      <span>(1)</span>
    </li>
  </ul>
  <h3>Keranjang Belanja</h3>
  <div class="cart">
    <i class="fas fa-shopping-cart"></i>
    <p>Rp 0,00</p>
    <button>Lihat Detail</button>
  </div>
  <h3>Waktu Operasional</h3>
  <ul>
    <li>
      <span>Senin</span>
      <span>(time)</span>
    </li>
    <li>
      <span>Selasa</span>
      <span>(time)</span>
    </li>
    <li>
      <span>Rabu</span>
      <span>(time)</span>
    </li>
    <li>
      <span>Kamis</span>
      <span>(time)</span>
    </li>
    <li>
      <span>Jum'at</span>
      <span>(time)</span>
    </li>
    <li>
      <span>Sabtu</span>
      <span>(time)</span>
    </li>
    <li>
      <span>Minggu</span>
      <span>(time)</span>
    </li>
  </ul>
</aside>

  
        <!-- Main Content -->
        <main class="main-content">
          <section class="favorite-menu">
            <h2>Favorite Menu</h2>
            <div class="menu-list">
              <div class="menu-item">
                <img src="@/assets/menu1.png" alt="Menu 1" />
                <h3>Rendang</h3>
                <p>Harga: Rp 22.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu2.png" alt="Menu 2" />
                <h3>Teh Botol Sosro</h3>
                <p>Harga: Rp 4.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu2.png" alt="Menu 2" />
                <h3>Teh Botol Sosro</h3>
                <p>Harga: Rp 4.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu2.png" alt="Menu 2" />
                <h3>Teh Botol Sosro</h3>
                <p>Harga: Rp 4.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu2.png" alt="Menu 2" />
                <h3>Teh Botol Sosro</h3>
                <p>Harga: Rp 4.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu2.png" alt="Menu 2" />
                <h3>Teh Botol Sosro</h3>
                <p>Harga: Rp 4.000,00</p>
                <button>Lihat Detail</button>
              </div>
            </div>
          </section>
  
          <section class="new-menu">
            <h2>Menu Terbaru</h2>
            <div class="menu-list">
              <div class="menu-item">
                <img src="@/assets/menu3.png" alt="Menu 3" />
                <h3>Fruit Salad Spesial</h3>
                <p>Harga: Rp 7.500,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu4.png" alt="Menu 4" />
                <h3>Steak Arab</h3>
                <p>Harga: Rp 12.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu4.png" alt="Menu 4" />
                <h3>Steak Arab</h3>
                <p>Harga: Rp 12.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu4.png" alt="Menu 4" />
                <h3>Steak Arab</h3>
                <p>Harga: Rp 12.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu4.png" alt="Menu 4" />
                <h3>Steak Arab</h3>
                <p>Harga: Rp 12.000,00</p>
                <button>Lihat Detail</button>
              </div>
              <div class="menu-item">
                <img src="@/assets/menu4.png" alt="Menu 4" />
                <h3>Steak Arab</h3>
                <p>Harga: Rp 12.000,00</p>
                <button>Lihat Detail</button>
              </div>
              </div>
          </section>
    <!-- Section Pemesanan -->
    <section class="order-section">
      <h2>Cara Pemesanan</h2>
      <div class="order-container">
        <!-- Dine In -->
        <div class="order-method">
          <h3><i class="fas fa-utensils"></i> Makan Di Tempat</h3>
          <ul>
            <li>1. Kunjungi halaman Daftar Menu di website kami.</li>
            <li>2. Pilih menu yang ingin dipesan.</li>
            <li>3. Pesanan Anda akan tersimpan di keranjang</li>
            <li>4. Pilih Makan di tempat, lalu isi nama dan nomor meja Anda</li>
            <li>5. Klik Pesan Sekarang dan Anda akan mendapat bukti pemesanan</li>
            <li>6. Setelah pesanan Anda tiba tunjukkan bukti pemesanan Anda.</li>
            <li>7. Pembayaran dapat dilakukan melalui metode yang tersedia.</li>
          </ul>
        </div>

        <!-- Garis Pemisah Vertikal -->
        <div class="divider"></div>

        <!-- Take Away / Delivery -->
        <div class="order-method">
          <h3><i class="fas fa-shopping-bag"></i> Take Away / Delivery</h3>
          <ul>
            <li>1. Kunjungi halaman Daftar Menu di website kami.</li>
            <li>2. Pilih opsi "Take Away" atau "Delivery".</li>
            <li>3. Masukkan alamat tujuan (untuk delivery).</li>
            <li>4. Pilih menu yang diinginkan.</li>
            <li>5. Klik Pesan Sekarang, dan Anda akan mendapat bukti pemesanan.</li>
            <li>6. Tunjukkan bukti pemesanan pada kasir / kurir saat mengambil atau menerima pesanan.</li>
            <li>7. Pembayaran dapat dilakukan melalui metode yang tersedia dan tunggu konfirmasi.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="reviews-container">
  <h2>Ulasan Pembeli</h2>
  <div class="reviews">
    <div class="review-card">
      <img src="@/assets/profile1.png" alt="Profile Picture" class="profile-pic">
      <div class="review-content">
        <h3>Nama Pembeli</h3>
        <div class="stars">
          ★★★★☆
        </div>
        <p>"Makanannya enak banget, pelayanannya cepat juga. Recommended!"</p>
      </div>
    </div>
    <div class="review-card">
      <img src="@/assets/profile2.png" alt="Profile Picture" class="profile-pic">
      <div class="review-content">
        <h3>Nama Pembeli</h3>
        <div class="stars">
          ★★★★★
        </div>
        <p>"Suka sama konsepnya, makan di tempat nyaman banget."</p>
      </div>
    </div>
  </div>
    </section>
        </main>
      </div>
    </div>
  </template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
  
  <style scoped>
  /* Carousel Header */
  .carousel {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-image: url('@/assets/lgkuliner.png'); /* Ganti dengan path gambar kamu */
    background-size: none; /* Gambar akan memenuhi seluruh area */
    background-position: right; /* Posisi gambar di tengah */
}
  
  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  
  /* Content Layout */
  .content {
    display: flex;
    margin-top: 20px;
  }
  
  .sidebar {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  font-family: Arial, sans-serif;
}

.sidebar h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd; /* Garis bawah */
  font-size: 14px;
}

.sidebar ul li:last-child {
  border-bottom: none; /* Hapus garis bawah untuk item terakhir */
}

.sidebar .cart {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar .cart i {
  font-size: 24px;
  color: #f4b400;
  margin-bottom: 10px;
}

.sidebar .cart p {
  font-size: 16px;
  margin: 5px 0;
}

.sidebar .cart button {
  background-color: #f4b400;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
}

.sidebar .cart button:hover {
  background-color: #d99f00;
}
 
  .main-content {
    width: 80%;
    padding: 10px;
  }
  
  .menu-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    transition: transform 1s ease-in-out;
  }
  
  .menu-item {
    width: 200px;
    height: 300px;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .menu-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 10px;
  }

  .menu-item:hover img {
  transform: scale(1.1); /* Zoom gambar saat hover */
}

.menu-item h3 {
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: bold;
}
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #944b0f;
    color: white;
    border: none;
    border-radius: 5px;
  }

/* Section Pemesanan */
.order-section {
  margin-top: 40px;
  text-align: center;
}

.order-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.order-container {
  display: flex;
  align-items: stretch; /* Membuat semua elemen memiliki tinggi sama */
  justify-content: center;
  gap: 20px; /* Jarak antara elemen */
}

.order-method {
  width: 45%;
  text-align: left;
}

.order-method h3 {
  font-size: 1.5rem;
  color: #944b0f;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.order-method ul {
  list-style-type: none;
  padding: 0;
}

.order-method li {
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.order-method li::before {
  content: "✔"; /* Bullet poin berupa tanda centang */
  color: #0a944b;
  font-weight: bold;
}

/* Garis Pemisah Vertikal */
.divider {
  width: 2px;
  background-color: #e0ab65;
  height: auto; /* Mengikuti tinggi elemen terpanjang */
  margin: 0 10px; /* Memberi jarak horizontal kecil */
}
/* Kontainer Ulasan */
.reviews-container {
  margin: 40px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reviews-container h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

/* Card Ulasan */
.reviews {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.review-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
}

.review-card .profile-pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.review-content h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.stars {
  color: #f4b400; /* Warna emas */
  font-size: 16px;
  margin-bottom: 10px;
}

.review-content p {
  font-size: 14px;
  color: #555;
}

</style>
