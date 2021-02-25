<template>
    <!-- Material form login -->
  <div class="card">

    <h5 class="card-header info-color white-text text-center py-4">
      <strong>Sign in</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">

      <!-- Form -->
      <form class="text-center" style="color: #757575;" action="#!" @submit.prevent="update">

        <!-- First Name -->
        <div class="md-form">
          <input type="text" id="name" class="form-control" v-model="user.name">
          <label for="name">Name</label>
        </div>

        <!-- Age -->
        <div class="md-form">
          <input type="number" id="age" class="form-control" v-model="user.age">
          <label for="age">Age</label>
        </div>

        <!-- Email -->
        <div class="md-form">
          <input type="email" id="email" class="form-control" v-model="user.email">
          <label for="email">E-mail</label>
        </div>

        <div class="d-flex justify-content-around">
          <div>
            <!-- Remember me -->
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="materialLoginFormRemember">
              <label class="form-check-label" for="materialLoginFormRemember">Remember me</label>
            </div>
          </div>
          <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
          </div>
        </div>

        <!-- Sign in button -->
        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

        <!-- Register -->
        <p>Not a member?
          <a href="">Register</a>
        </p>

      </form>
      <!-- Form -->

    </div>

  </div>
  <!-- Material form login -->
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      newName: this.user.name,
      newAge: this.user.age,
      newEmail: this.user.email
    }
  },
  methods: {
    update() {
        this.user.name = this.newName,
        this.user.age = this.newAge,
        this.user.email = this.newEmail
    }
  }
}
</script>

<style>

</style>