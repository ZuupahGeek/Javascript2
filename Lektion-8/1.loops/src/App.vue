<template>
  <div>
   <!-- <names :names="names"/> -->
   <loop :names="names"/>

    <users :users="users"/>
    <objects :users="users"/>

  </div>
</template>

<script>
import Loop from './components/Loop.vue'
import Objects from './components/Objects.vue'
import Users from './components/Users.vue'
// import Names from './components/Names'

export default {
  name: 'App',
  components: {
    // Names,
    Loop,
    Users,
    Objects,
  },
  
    data() {
    return {
      names: ['Joachim', 'Rick', 'Skruttis', 'Bobba', 'Skrooba', 'Snuffpuff'],
      users: [
        {id: 1, name: 'Joachim', age: 26},
        {id: 2, name: 'Rick', age: 64},
        {id: 3, name: 'Skruttis', age: 23}
      ]
    }
  }
}
</script>

<style>
 .card {
    border: 1px solid grey;
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 20%;
  }

</style>
