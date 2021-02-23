<template>
  <nav>
    <h2>Conditional Rendering</h2>
    <ul v-if="active">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      
    </ul>
    <ul v-else>
      <li><a href="">Login</a></li>
      <li><a href="">Register</a></li>
      
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style>
nav {
  background: palegreen;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
}
ul {
  list-style: none;
  display: flex;


}
li {
  padding: 1rem;
}
</style>