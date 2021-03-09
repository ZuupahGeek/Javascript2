<template>
  <form class="text-center border border-primary p-5">
    <p class="h4 mb-4">Sign in</p>
  <!-- Email input -->

    <input type="email" id="form1Example1" class="form-control mb-4"  placeholder="Email"/>

  <!-- Password input -->
    <input type="password" id="form1Example2" class="form-control mb-4" placeholder="Password"/>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="form1Example3"
          checked
        />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
</template>

<script>
export default {
  destroyed() {
    console.log('login destroyed')
  }
}
</script>

<style>

</style>