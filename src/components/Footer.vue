<template>
    <footer class="footer">
      <div class="footer-section payment-methods">
        <h3>Payment Methods</h3>
        <ul>
            <li><i class="fas fa-money-bill-wave"></i> Cash</li>
            <li><i class="fas fa-university"></i> Transfer</li>
            <li><i class="fas fa-credit-card"></i> Credit Card</li>
            <li><i class="fas fa-qrcode"></i> QRIS</li>
            <li><i class="fas fa-wallet"></i> E-Wallet</li>
        </ul>
      </div>
  
      <div class="footer-section contact-info">
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Jl. Makan Bersama No.123, Kota Kuliner</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <p>+62 812 3456 7890</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <p>support@kuliner-app.com</p>
        </div>
      </div>
  
      <div class="footer-section about">
        <h3>About</h3>
        <p>App Kuliner: Mempermudah pemesanan makanan kapan saja dan di mana saja.</p>
        <div class="social-icons">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-youtube"></i>
          <i class="fas fa-blog"></i>
        </div>
      </div>
  
      <div class="copyright">
        <p>© 2024, Marcellina . Demas . Pemrograman Berbasis Framework</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style>
  /* Tambahkan semua CSS untuk footer di sini */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;
    background-color: #351807;
    color: #fff;
    flex-wrap: wrap;
  }
  
  .footer-section {
    flex: 1;
    margin: 0 20px;
    min-width: 200px;
  }
  
  .footer-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #f4b400;
  }
  
  .payment-methods ul li {
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.payment-methods ul li i {
  margin-right: 15px;
  font-size: 20px; /* Sesuaikan ukuran ikon */
  color: #f4b400; /* Ubah warna ikon jika diperlukan */
}
  
  .contact-info .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    padding: 10px 0; /* Jarak dalam elemen */
  }
  
  .contact-info .contact-item i {
    margin-right: 10px;
    color: #f4b400;
  }
  
  .about p {
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  .social-icons i {
    font-size: 20px;
    margin-right: 10px;
    color: #fae3a5;
    cursor: pointer;
  }
  
  .social-icons i:hover {
    color: #fff;
  }
  
  .copyright {
    text-align: center;
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid #555;
    padding-top: 0px;
    font-size: 16px;
    color: #ccc;
  }
  </style>
  