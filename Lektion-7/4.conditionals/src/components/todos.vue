<template>
  <div>
   <h2 v-if="todos.length > 0">Yaay det finns saker att göra!</h2>
   <h2 v-else>Det finns inget att göra.. Lägg till något, vettja!</h2>
  </div>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>

</style>