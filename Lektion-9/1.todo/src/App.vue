<template>
  <div class="bg-light">
    <Header title="TODOS by Jojje"/>
    <add-todo @addTodo="add" @sort="sortTodos"/>
    <div class="container py-5">
      <todos :value="sort" :todos="todos" @delete-todo="deleteTodo"/>
    </div>
    
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import AddTodo from './components/AddTodo'
  import Todos from './components/Todos/Todos.vue'

  import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    Todos
  },
  data() {
    return {
      // todos: [
      //   { id: '1', title: 'todo item one', completed: false },
      //   { id: '2', title: 'todo item two', completed: false },
      //   { id: '3', title: 'todo item three', completed: false },
      //   { id: '4', title: 'todo item four', completed: false },
      //   { id: '5', title: 'todo item five', completed: true },
      // ],
      todos: [],
      sort: ''
    }
  },
    methods: {
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      },
      add(title) {
        let todo = {
          id: uuidv4(),
          title,
          completed: false
        }
        this.todos.push(todo);
      },
      sortTodos(val){
        switch(val) {
          case 'false': 
          this.sort = false
            break
          case 'true':
            this.sort = true
              break 
          default:
            this.sort = '' 
        }
      },
      fetchTodos() {
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => {
          this.todos = data
        })
      }
    },
    created() {
      this.fetchTodos()
    }
}
</script>

<style>

</style>
