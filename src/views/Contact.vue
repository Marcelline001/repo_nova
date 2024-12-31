<template>
  <div class="contact-container">
    <h1>Hubungi Kami</h1>

    <!-- Informasi Kontak -->
    <div class="contact-info">
      <h2>Informasi Kontak</h2>
      <ul>
        <li>
          <i class="fas fa-map-marker-alt"></i> Alamat: Jl. Makananan No. 123, Kuliner City
        </li>
        <li>
          <i class="fas fa-phone-alt"></i> Telepon: (021) 123-4567
        </li>
        <li>
          <i class="fas fa-envelope"></i> Email: info@kulinerapp.com
        </li>
      </ul>
    </div>

    <!-- Formulir Kontak -->
    <div class="contact-form">
      <h2>Kirim Pesan</h2>
      <form @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="name">Nama:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Pesan:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Kirim Pesan</button>
      </form>
    </div>

    <!-- Media Sosial -->
    <div class="social-media">
      <h2>Ikuti Kami</h2>
      <p>Terhubung dengan kami melalui media sosial:</p>
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://youtube.com" target="_blank" aria-label="YouTube">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://yourblog.com" target="_blank" aria-label="Blog">
          <i class="fas fa-blog"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      console.log("Pesan dikirim:", this.formData);
      alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi kami.");
      this.formData = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
.contact-container {
  margin-top: 80px; /* Sama dengan tinggi navbar */
  font-family: "Noto Serif", serif;
  padding: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #333;

}

h1,
h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.contact-info {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.contact-info i {
  margin-right: 1rem;
  color: #f79c42;
  font-size: 1.2rem;
}

.contact-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
}

.submit-button {
  background-color: #f79c42;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #d87b2a;
}

.social-media {
  text-align: center;
}

.social-icons a {
  margin: 0 1rem;
  font-size: 2rem;
  color: #333;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #f79c42;
}
</style>
