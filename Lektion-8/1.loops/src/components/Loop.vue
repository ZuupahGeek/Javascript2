<template>
  <div>
    <div v-if="names.length > 0" >
      <p  v-for="(name, index) in names" :key="index" >Namn nummer {{ index }} är {{ name }}</p>
    </div>
   



    <p v-else>Det finns inga namn</p>
  </div>
</template>

<script>
export default {
  props: ['names']
}
</script>

<style>

</style>