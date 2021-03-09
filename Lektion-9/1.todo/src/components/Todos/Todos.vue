<template>
  <div>
    <transition-group name="fade-slide">
      <div v-for="todo in todos" :key="todo._id">
        <Todo v-if="value === ''" :todo="todo" @delete-todo="$emit('delete-todo', todo._id)" />
        <Todo v-else-if="todo.completed === value" :todo="todo" @delete-todo="$emit('delete-todo', todo._id)" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Todo from './todo.vue'


export default {
  props: ['todos', 'value'],
  components: {
    Todo
  }
}
</script>

<style>

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter {
  opacity: 0;
  transform: translateX(30px);
}
 .fade-slide-leave-to {
     opacity: 0;
  transform: translateX(-30px);
 }

</style>