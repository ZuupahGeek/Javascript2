<template>
  <div>
    <button @click="sum++">Add</button>
    <button @click="sum--">Subtract</button>

    <div>sum: {{ sum }} </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    sum: 32
  }
}
}
</script>

<style>

</style>