<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar'

export default {
  components: {
    Navbar
  }
}

</script>
<style>

</style>
