<template>
  <div>
    <button @click="addToPrice(5)" class="btn">ADD</button>
    <button @click="subAsync(5)" class="btn">SUB</button>
    <div class="list">
      <product-card v-for="product in filteredProducts" :key="product.id" class="card" :product="product" />
    </div>
  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'

import ProductCard from './ProductCard'


export default {
  components: {
    ProductCard
  },
  data() {
    return {
      // Products: [
      //   { id: 1, name: 'Products 1', price: 200 },
      //   { id: 2, name: 'Products 2', price: 300 },
      //   { id: 3, name: 'Products 3', price: 559 },
      //   { id: 4, name: 'Products 4', price: 636 },
      //   { id: 5, name: 'Products 5', price: 454 },
      //   { id: 6, name: 'Products 6', price: 222 },
      //   { id: 7, name: 'Products 7', price: 525 },
      //   { id: 8, name: 'Products 8', price: 626 },
      //   { id: 9, name: 'Products 9', price: 343 },
      //   { id: 10, name: 'Products 10', price: 345},
      //   { id: 11, name: 'Products 11', price: 257 },
      //   { id: 12, name: 'Products 12', price: 324 },
      //   { id: 13, name: 'Products 13', price: 4566 },
      //   { id: 14, name: 'Products 14', price: 4788 },
      //   { id: 15, name: 'Products 15', price: 23 },
       
      // ]
    }
  },
  methods: {
    ...mapActions(['subAsync', 'addToPrice'])
  },
  computed: {
      product() {
        return this.$store.state.products
      },
      prodTax() {
        // let taxedProducts = this.$store.state.products.map(product => {
        //   return {
        //     ...product,
        //     name: product.name + ' + tax',
        //     price: Math.round(product.price * 1.2)
        //   }
        // })
        // return taxedProducts
        return this.$store.getters.taxedProducts
      },
      ...mapGetters(['taxedProducts', 'filteredProducts'])
    }
}
</script>

<style>

.card {
  background: #424242;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>