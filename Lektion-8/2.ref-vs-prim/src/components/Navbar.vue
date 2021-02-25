<template>
<nav>  
  <h1 @click="change">{{ title }}</h1>
</nav>

</template>

<script>
export default {
  props: ['title'],
  methods: {
    change() {
      this.$emit = ('changeTitle', 'Hej')
    }
  }
}
</script>

<style>
  nav {
    background: darkslateblue;
    padding: 2rem;
  }
</style>