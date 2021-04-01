<template>
  <div>
    <h1></h1>
   <navbar />
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from './components/navigation/Navbar'

export default{
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser
  }
}
</script>


<style>

</style>
