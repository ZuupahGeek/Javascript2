<template>
  
<!-- Default form login -->
<form class="text-center border border-light p-5" action="#!" @submit.prevent="handleSubmit">

    <p class="h4 mb-4">Sign in</p>

    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" ref="email" @keyup="handleChange">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

  <div> {{ email }} </div>
   

</form>
<!-- Default form login -->

</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleChange() {
      this.email = this.refs.email.value
      // console.log(this.$refs.email.value)
    },
  handleSubmit() {
    // e.preventDefault()
    console.log(this.email, this.password)
    this.email = ''
    this.password = ''
  }
  }
}
</script>

<style>

</style>