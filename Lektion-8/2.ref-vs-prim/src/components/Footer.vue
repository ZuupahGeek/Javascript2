<template>
  <footer>
    <h3>copyright 2021 {{ title }}</h3>
  </footer>
</template>

<script>
export default {
 props: ['title']
}
</script>

<style>
 footer {
    background: darkslateblue;
    padding: 2rem;
  }
</style>