<template>
  
  <div class="container my-5 py-5 z-depth-1" @click.self="handleClick">

  
  <!--Section: Content-->
    <section class="text-center px-md-5 mx-md-5 dark-grey-text">
      
      <div class="row mb-5">
        <div class="col-md-4 mx-auto">
          <div class="view mb-4 pb-2">
            <img v-on:mouseover="mouseover" src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg" class="img-fluid" alt="smaple image">
          </div>
        </div>
      </div>
                                            <!-- @ erstätter v-on -->
      <button type="button" class="btn btn-deep-purple btn-rounded" @click="clickFunction">Design your site now</button> 

    </section>
    <!--Section: Content-->

  
</div>

</template>

<script>
export default {
  methods: {
    mouseover() {
      console.log('Du hovrade över bilden')
    },
    clickFunction() {
      console.log('du klickade på knappen')
    },
    handleClick() {
      console.log('klickade')
    }
  }
}
</script>

<style>

</style>