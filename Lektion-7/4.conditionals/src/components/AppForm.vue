<template>
  <div class="form">
    <label for="name">Name: </label>
    <input type="text" id="name">
    <button @click="error = !error">Toggle error</button>
    <button @click="success = !success">Toggle success</button>
    <p v-if="error">Någonting gick fel</p>
    <p v-else-if="success">Yahoo det gick!!</p>

    <p v-show="error">nånting gick fel!</p>
    <p v-show="success">Jippie ka-yay motherfucker!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      success: false
    }
  }
}
</script>

<style scoped>
.form {
  margin-top: 1rem;
}

</style>