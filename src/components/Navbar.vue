<template>
  <nav>
    <div class="navbar-container">
      <!-- Logo dan Nama Situs -->
      <div class="logo">
        <img :src="logo" alt="Logo" class="logo-img" />
        <span class="site-name">Kulineran</span>
      </div>

      <!-- Menu Navbar -->
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Daftar Menu</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <!-- Kolom Pencarian dan Ikon -->
      <div class="search-icons">
        <input type="text" placeholder="Search" class="search-input" />
        <i class="fas fa-search search-icon"></i> <!-- Ikon Pencarian -->
      </div>

      <!-- Ikon Keranjang, Login dan Pengaturan -->
      <div class="icons">
        <i class="fas fa-shopping-cart"></i> <!-- Keranjang -->
        
        <!-- Ikon User -->
        <div class="user-icon-container" @click="toggleDropdown">
          <i class="fas fa-user"></i>
          <!-- Dropdown Menu -->
          <ul v-if="showDropdown" class="dropdown-menu">
            <li @click="openModal('signIn')">Sign In</li>
            <li @click="openModal('signUp')">Sign Up</li>
            <li @click="logout">Logout</li>
          </ul>
        </div>

        <i class="fas fa-cog"></i> <!-- Pengaturan -->
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-backdrop">
      <div class="modal">
        <h2>{{ modalType === 'signIn' ? 'Sign In' : 'Sign Up' }}</h2>
        <form @submit.prevent="submitForm">
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit">{{ modalType === 'signIn' ? 'Login' : 'Register' }}</button>
        </form>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logo: require('@/assets/logokl.png'), // Path ke file gambar logo
      showDropdown: false, // Untuk menampilkan dropdown
      showModal: false, // Untuk menampilkan modal
      modalType: '', // Tipe modal: 'signIn' atau 'signUp'
      email: '',
      password: '',
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    openModal(type) {
      this.modalType = type;
      this.showModal = true;
      this.showDropdown = false; // Tutup dropdown saat modal dibuka
    },
    closeModal() {
      this.showModal = false;
    },
    submitForm() {
      if (this.modalType === 'signIn') {
        alert(`Sign In dengan email: ${this.email}`);
      } else {
        alert(`Sign Up dengan email: ${this.email}`);
      }
      this.closeModal();
    },
    logout() {
      alert('Logout berhasil!');
    },
  },
};
</script>

  <style>
  /* Styling Navbar dengan Gradasi dan Gambar */
  nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #944b0f, #f1a61f); /* Gradasi warna */
  padding: 10px 20px; /* Mengurangi padding agar navbar lebih ramping */
  z-index: 1000;
  height: 80px; /* Menyesuaikan tinggi navbar */
}

  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-img {
    height: 80px; /* Menyesuaikan tinggi logo */
    margin-right: 10px; /* Jarak antara logo dan nama situs */
  }
  
  .site-name {
    color: white;
    font-size: 50px;
    font-family: "Lobster", serif;
    font-weight: none;
  }
  
  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family:"Lobster", serif;
    font-size: 20px;
  }
  
  .menu li {
    margin: 0 15px;
  }
  
  .menu li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    border: none; /* Menghilangkan border */
  }
  
  .menu li a:hover {
    text-decoration: underline;
  }
  
  /* Kolom Pencarian dan Ikon Pencarian */
  .search-icons {
    display: flex;
    align-items: center;
    margin-right: 20px; /* Menambahkan jarak antara pencarian dan ikon lainnya */
  }
  
  .search-input {
    padding: 10px 60px;
    border-radius: 5px;
    border: none;
    width: 180px;
    background-color: white;
  }
  
  .search-icon {
    color: white;
    font-size: 25px;
    margin-left: 20px;
    cursor: pointer;
  }
  
  .icons {
  display: flex; /* Flexbox untuk tata letak */
  justify-content: flex-end; /* Semua ikon ke kanan */
  align-items: center; /* Vertikal rata tengah */
}
  /* Ikon Keranjang, Login dan Pengaturan*/
  .icons i {
    color: white;
    font-size: 25px;
    margin-left: 20px;
    cursor: pointer;
  }
  
  .icons i:hover {
    opacity: 0.8;
  }

  /* Dropdown Menu */
.user-icon-container {
  position: relative;
  display: inline-block;
}
.dropdown-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background: rgb(255, 255, 255);
  color: black;
  list-style: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
}
.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background-color: #a1a1a1;
}

/* Modal Styling */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
.modal h2 {
  margin-bottom: 20px;
}
.modal form {
  display: flex;
  flex-direction: column;
}
.modal input {
  margin: 10px 0;
  padding: 10px;
}
.modal button {
  margin-top: 10px;
  padding: 10px;
  background: #944b0f;
  color: white;
  border: none;
  border-radius: 5px;
}

  </style>
  