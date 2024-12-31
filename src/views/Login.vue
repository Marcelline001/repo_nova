<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Masukkan email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { ref } from "vue";
  
  export default {
    name: "Login",
    setup() {
      const email = ref("");
      const password = ref("");
      const auth = getAuth();
  
      const login = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
          console.log("Logged in:", userCredential.user);
          alert("Login berhasil!");
        } catch (error) {
          console.error("Error logging in:", error.message);
          alert("Gagal login: " + error.message);
        }
      };
  
      return {
        email,
        password,
        login,
      };
    },
  };
  </script>
  
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .login-container h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  