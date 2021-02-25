<template>
   <div>
    <div class="user" v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <p>age: {{ user.age }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  props: ['users'],
  methods: {
      change() {
    if(this.users[0].name == 'Hej') {
      this.users.pop()
    } else {
      this.users[0].name = 'Hej'
    }
  }
  }

}
</script>

<style scoped>
  .user {
    background: darkslategrey;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }
</style>