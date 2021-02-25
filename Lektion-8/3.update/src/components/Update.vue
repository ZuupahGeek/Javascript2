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
          <input type="text" id="name" class="form-control" v-model="newName">
          <label for="name">Name</label>
        </div>

        <!-- Age -->
        <div class="md-form">
          <input type="number" id="age" class="form-control" v-model="newAge">
          <label for="age">Age</label>
        </div>

        <!-- Email -->
        <div class="md-form">
          <input type="email" id="email" class="form-control" v-model="newEmail">
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
  props: ['name', 'age', 'email'],
  data() {
    return {
      newName: this.name,
      newAge: this.age,
      newEmail: this.email
    }
  },
  methods: {
  update() {
    let user = {
      name: this.newName,
      age: this.newAge,
      email: this.newEmail
    }

    this.$emit('update-user', user)
  }
  }
}
</script>

<style>

</style>