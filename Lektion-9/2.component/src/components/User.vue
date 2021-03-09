<template>
  <div>
    <button class="btn btn-sm rounded-0 me-1" :class="loginClasses" @click="change('Login')">Log in</button>
    <button class="btn btn-sm rounded-0"  :class="registerClasses" @click="change('Signup')">Register</button>
    <keep-alive>
    <component :is="comp" />
    </keep-alive>
  </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'

export default {
components: {
  Login,
  Signup
},
data() {
  return {
    comp: 'Login',
    login: true,
    register: false
  }
},
methods: {
  change(val) {
    this.comp = val
    if(val === 'Login') {
      this.login = true
      this.register = false
    } else {
      this.login = false
      this.register = true
    }
  }
},
computed: {
  loginClasses() {
    return {
      'btn-primary': this.login,
      'btn-outline-primary': !this.login
    }
  },
   registerClasses() {
    return {
      'btn-primary': this.register,
      'btn-outline-primary': !this.register
    }
  }
}
}
</script>

<style>
.btn {
  margin-bottom: -0.5px;
 box-shadow: none;
}
.btn::after {
  box-shadow: none;
  padding: 4rem;
  background: red;
}
</style>