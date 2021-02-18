<template>
  <div>
    
<appNavbar />

<appTestamonials />

<appFooter />

  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Testimonials from './components/Testamonials/Testamonials'


  export default {
    name: 'App',
    components: {
      appNavbar: Navbar,
      appFooter: Footer,
      appTestamonials: Testimonials
        
    }
  }

</script>

<style>


</style>
