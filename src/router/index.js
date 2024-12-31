import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'  // pastikan mengimpor HomeView
import About from '../views/About.vue';
import Menu from "../views/Menu.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,  // Menjadikan HomeView sebagai halaman utama
  },

  {
    path: '/about', // URL path untuk halaman About
    name: 'About',
    component: About
  },

  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact, // Tambahkan halaman Contact
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
