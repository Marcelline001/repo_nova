<template>
    <div class="menu-container">
      <h1>Daftar Menu</h1>
      <div class="categories">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
      <!-- Label Kategori -->
      <div class="category-label">
        <h2>{{ selectedCategory }}</h2>
        <hr />
      </div>
      <div class="menu-grid">
        <div 
          v-for="item in filteredMenuItems" 
          :key="item.id" 
          class="menu-item"
        >
          <img :src="item.image" :alt="item.name" class="menu-image" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p class="menu-price">Harga: {{ item.price }}</p>
          <button class="add-to-cart">Tambahkan ke Keranjang</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Menu",
    data() {
      return {
        selectedCategory: "Semua",
        categories: ["Semua", "Makanan", "Minuman", "Gorengan", "Bakaran"],
        menuItems: [
          {
            id: 1,
            name: "Nasi Goreng",
            description: "Nasi goreng dengan bumbu khas dan tambahan ayam.",
            price: "Rp 25.000",
            image: "https://via.placeholder.com/150",
            category: "Makanan",
          },
          {
            id: 2,
            name: "Es Teh Manis",
            description: "Minuman dingin segar untuk melepas dahaga.",
            price: "Rp 5.000",
            image: "https://via.placeholder.com/150",
            category: "Minuman",
          },
          {
            id: 3,
            name: "Sate Ayam",
            description: "Sate ayam dengan bumbu kacang yang kaya rasa.",
            price: "Rp 30.000",
            image: "https://via.placeholder.com/150",
            category: "Bakaran",
          },
          {
            id: 4,
            name: "Tempe Mendoan",
            description: "Tempe goreng tipis dengan rasa gurih.",
            price: "Rp 10.000",
            image: "https://via.placeholder.com/150",
            category: "Gorengan",
          },
        ],
      };
    },
    computed: {
      filteredMenuItems() {
        if (this.selectedCategory === "Semua") {
          return this.menuItems;
        }
        return this.menuItems.filter(
          (item) => item.category === this.selectedCategory
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .menu-container {
    margin-top: 80px;
    padding: 2rem;
  }
  
  .menu-container h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }
  
  .categories {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .categories button {
    background-color: #ad5c0a;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .categories button.active,
  .categories button:hover {
    background-color: #f1961e;
  }
  
  /* Label Kategori */
  .category-label {
    text-align: left;
    margin-bottom: 1rem;
  }
  
  .category-label h2 {
    font-size: 1.5rem;
    color: #964b00;
  }
  
  .category-label hr {
    border: none;
    border-top: 2px solid #ccc;
    margin: 0.5rem 0;
  }
  
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .menu-item {
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .menu-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .menu-price {
    color: #61370d;
    font-weight: bold;
  }
  
  .add-to-cart {
    background-color: #e47200;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-to-cart:hover {
    background-color: #d8a67a;
  }
  
  @media (max-width: 768px) {
    .menu-container {
      padding: 1rem;
    }
  
    .menu-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  