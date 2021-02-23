<template>
  <div>
    <Navbar />
    <div class="container">
      <example-1 />
      <example-2 class="mt-1"/>
      <example-3 class="mt-1"/>
    </div>
  </div>
</template>


<script>
import Example1 from './components/Example1.vue'
import Example2 from './components/Example2.vue'
import Example3 from './components/Example3.vue'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
    Example1,
    Example2,
    Example3,
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
.green {
  color: green;
}
.red {
  color: red;
}
.mt-1 {
  margin-top: 2rem;
}
.btn {
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    padding: 2rem;
    cursor: pointer;
  }
  .btn-active {
    background: blue;
    color: #fff;
  }
  .btn-primary {
    background: green;
  }
</style>
