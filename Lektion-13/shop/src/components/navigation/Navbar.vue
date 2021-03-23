<template>
  <div>
    <!-- Navbar -->
    <nav class="d-flex justify-content-space-between navbar navbar-expand-lg navbar-light bg-primary ">
      <!-- Container wrapper -->
      <div class="container">
        <div class="d-flex">
        <!-- Navbar brand -->
        <router-link class="navbar-brand" to="/">
        <i class="fab fa-shopware"></i>  Shopware.se
        </router-link>
        <router-link class="navbar-brand" to="/products">
        Products
        </router-link>
        <router-link class="navbar-brand" to="/about">
        About Us
        </router-link>
        </div>
      
      <div>
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
              <router-link class="nav-link" to="/"><i class="fas fa-user"></i></router-link>
            </li>
            

        <ul class="navbar-nav">
                <!-- Navbar dropdown -->
          <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart"></i>
                <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
              </a>
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-end badge-notification shopping-cart" aria-labelledby="navbarDropdown">
              <shopping-cart />
              </ul>
            </li>
            
          
          </ul>
        </ul>
        </div>
        </div>
        </div>
        <!-- Collapsible wrapper -->

      </nav>
  </div>
  <!-- Container wrapper -->

<!-- Navbar -->
  
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from '../shoppingcart/ShoppingCart'
export default {
  components: {
  ShoppingCart
},
  computed: {
    ...mapGetters(['cartItemCount'])
  }
}
</script>

<style scoped>
.shopping-cart {
  min-width: 450px;
}

</style>