<template>
  <div>
    <Navbar />
    <div class="output container">
      <h2> {{ message }} </h2>


      <functions  class="mt-5"/>
      <computed  class="mt-5"/>





    </div>

    <appFooter msg="det här är ett meddelande"/>
    <appFooter v-bind:msg="message"/>
    <appFooter :msg="message"/>
  </div>
</template>

<script>
import Computed from './components/Computed.vue'
import appFooter from './components/Footer.vue'
import Functions from './components/Functions.vue'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  data() {
    return {
      message: 'Ett meddelande från vår data',
      obj: {
        message: 'hej'
      }
    }
  },
  components: {
    Navbar,
    appFooter,
    Functions,
    Computed
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
.output {
  min-height: 500px;
}
.mt-5 {
  margin-top: 3rem;
}
</style>
