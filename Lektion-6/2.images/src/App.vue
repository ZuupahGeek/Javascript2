<template>
  <div>
    <Navbar />

    <Carousels />
    <h1>{{ message }}</h1>
    <div class="mt-5">
      <card-deck />
    </div>
  </div>
</template>

<script>
import CardDeck from './components/Cards/CardDeck.vue'

import Carousels from './components/Carousels'
import Navbar from './components/Navbar'

export default {
name: 'App',
data() {
  return {
    message: 'Ett meddelande'
  }
},
components: {
  Navbar,
  Carousels,
  CardDeck,
}
  
}
</script>

<style>

</style>
