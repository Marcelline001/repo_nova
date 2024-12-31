<template>
  <div id="app">
    <!-- Tambahkan Navbar -->
    <Navbar />

    <!-- Tempat untuk menampilkan konten halaman -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
// Import komponen Navbar
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Tambahkan gaya global jika diperlukan */
</style>
