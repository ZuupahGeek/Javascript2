<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">

    <!-- <div class="col">
      <div class="card h-100">
        <img src="../../assets/logo.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div> -->
    <card title="HEJ" v-bind:imgURL="imgOne" />
    <card title="Hej hej!!" body="lorem10"/>
    <card />
  </div>
</div>


</template>

<script>
import Card from './Card.vue'
export default {
  data() {
    return {
      imgOne: require('@/assets/img/pexels-charlotte-may-5946744.jpg')
    }
  },
  components: { Card },

}
</script>

<style>

</style>