<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <router-link class="navbar-brand" to="/">
      <i class="fab fa-shopware"></i> shopware.se
    </router-link>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/about">About Us</router-link>
        </li>



      </ul>
      <!-- Left links -->

      <ul class="navbar-nav">
        <!-- Navbar dropdown -->
        <li class="nav-item dropdown me-4">
          <a
            class="nav-link dropdown"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart"></i>
            <span class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
            <shopping-cart />
          </ul>
        </li>

        <li class="nav-item dropdown" v-if="loggedIn">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i>
          </a>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <router-link class="nav-link" to="/user">User</router-link>
          </ul>
        </li>

        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <p class="nav-link pb-0">logout</p>
        </li>

      </ul>


    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
import ShoppingCart from '../shoppingcart/ShoppingCart.vue'
export default {
  components: {
    ShoppingCart 
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['loggedIn', 'cartItemCount'])
  } 
}
</script>

<style scoped>
  .shopping-cart {
    min-width: 450px;
  }
</style>