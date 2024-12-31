<template>
    <div>
      <h2>Daftar Menu</h2>
      <ul>
        <li v-for="(menu, index) in menus" :key="index">
          <h3>{{ menu.name }}</h3>
          <p>Harga: Rp {{ menu.price }}</p>
          <button @click="orderMenu(menu)">Pesan</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menus: [
          { name: 'Nasi Goreng', price: 20000 },
          { name: 'Mie Ayam', price: 15000 },
          { name: 'Sate Ayam', price: 25000 },
        ],
      };
    },
    methods: {
      orderMenu(menu) {
        alert(`Anda memesan ${menu.name} seharga Rp ${menu.price}`);
      },
    },
  };
  </script>
  
  <style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  