<template>
  <div @click.self="$emit('close')" id="modal" class="d-flex justify-content-center align-items-center">
    <div class="card bg-white">
      <p class="text-danger">You have to complete the Todo before deleting it</p>
      <button @click="$emit('close')" class="btn btn-danger">OK</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.card {
  width: 200px;
  height: 200px;
}
</style>