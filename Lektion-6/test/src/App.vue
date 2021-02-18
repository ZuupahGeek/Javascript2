<template>
  <div>
    
<appNavbar />

<hero />

<appTestamonials />

<appFooter />

  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Testamonial from './components/Testamonials/Testamonials'
import Hero from './components/Hero.vue'


  export default {
    name: 'App',
    components: {
      appNavbar: Navbar,
      appFooter: Footer,
      appTestamonials: Testamonial,
        Hero
        
    }
  }

</script>

<style>


</style>
