<template>
  <div>
    <hero />

    <div class="container mt-5">
      <div class="row">
        <div class="col-6">
          <sign-in />
        </div>
        <div class="col-6">
          <register />
        </div>
         
       
      </div>
      
    </div>
    

  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Register from './components/Register.vue'
import SignIn from './components/signIn.vue'

export default {
  name: 'App',
  components: {
    Hero,
    SignIn,
    Register,
   
    
  }
}
</script>

<style>

</style>
