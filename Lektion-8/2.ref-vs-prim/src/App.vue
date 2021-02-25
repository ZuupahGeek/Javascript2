<template>
  <div id="app">
   <navbar :title="title" v-on:changeTitle="change" />
   <div class="container">
     <users :users="users" @changeUser="changeUser"/>
     <users2 :users="users" />
   </div>
   <appFooter :title="title"/>
  </div>
</template>

<script>
import appFooter from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Users from './components/Users'
import Users2 from './components/Users2'

export default {
  name: 'App',
  components: {
    Navbar,
    appFooter,
    Users,
    Users2,
    
  },
  data() {
    return {
      title: 'Frontend 2020',
      users: [
        {id: 1, name: 'Joachim', age: 26, email: 'Joachim@gmail.com'},
        {id: 1, name: 'Sofia', age: 23, email: 'Sofia@gmail.com'},
        {id: 1, name: 'Rick', age: 64, email: 'Risk@astley.com'},
        {id: 1, name: 'Skruttis', age: 26, email: 'Skruttprutt@gmail.com'}
      ]
    }
  },
  methods: {
    change(newTitle) {
      this.title = newTitle
    },
    changeUser(newName) {
      this.users[0].name = newName
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

  .container {
    width: 80%;
    margin: auto;
    min-height: 500px;
  }
</style>
