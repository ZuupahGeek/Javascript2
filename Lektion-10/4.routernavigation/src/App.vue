<template>
  <div>
    <Navbar />
    <router-view/>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import AppFooter from './components/navigation/Footer'


export default {
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style>

</style>
