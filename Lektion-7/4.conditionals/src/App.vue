<template>
  <div>
    <navbar :active="active" />
    <button v-if="active" @click="active= !active">Logout</button>
    <button v-else @click="active= !active">Login</button>
    <div class="container">
      <h1 v-if="name === 'Joachim' ">Hej {{ name }}! Välkommen tillbaka</h1>
      <h1 v-else>Trevligt att träffas, {{ name }}</h1>

      <app-form />

      <todos :todos="todos"/>
    </div>
  </div>
</template>

<script>
import AppForm from './components/AppForm.vue'
import Navbar from './components/Navbar.vue'
import Todos from './components/todos.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    AppForm,
    Todos,
   
    
  },
  data() {
    return {
      name: 'Joachim',
      active: true,
      todos: [
        {id: 1, title: 'todo1'},
        {id: 2, title: 'todo2'},
        {id: 3, title: 'todo3'}
      ]
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
