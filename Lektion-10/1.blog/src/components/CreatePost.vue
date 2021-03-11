<template>
  <div>
    <form class="border border-light p-5">
      <p class="h4 text-center mb-4">Create a new post</p>


      <div class="mb-5">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control" v-model="blog.title">
        <p class="invalid-feedback">Please enter a title</p>
      </div>
      <div class="mb-5">
        <label for="content">Content</label>
        <textarea id="content" class="form-control " v-model="blog.content"></textarea>
        <p class="invalid-feedback mb-4">Please enter content</p>
      </div>

      <p>Categories</p>

      <div class="ms-1">
    
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="travel" value="Travel" v-model="blog.categories">
          <label for="travel" class="form-check-label">Travel</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="food" value="food" v-model="blog.categories">
          <label for="food" class="form-check-label">Food</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="computers" value="computers" v-model="blog.categories">
          <label for="computers" class="form-check-label">Computers</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="frontend" value="frontend" v-model="blog.categories">
          <label for="frontend" class="form-check-label">Frontend</label>
        </div>
      </div>

      <label for="select">Author</label>
      <select id="select" class="form-select" v-model="blog.author">
        <option value="" disabled selected></option>
        <option v-for="(author, index) in authors" :key="index">{{ author }}</option>
      </select>

      <button class="btn btn-secondary mt-5 btn-block"> CREATE POST </button>
    </form>

    <div class="container">
      <h3 class="h1 text-center mt-5">PREVIEW</h3>
      <div class="card card-cascade">

        <div class="text-center bg-secondary">
          <h3 class="h2 my-3 text-white"> {{ blog.title }} </h3>
        </div>

        <div class="card-body card-body-cascade">
          <p>Content:</p>
          <p>{{ blog.content }}</p>
          <p>Categories:</p>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item border-0" v-for="(category, index) in blog.categories" :key="index"> {{ category }} </li>
          </ul>
          <p>Author: {{ blog.author }} </p>




        </div>
      </div>
    </div>

  </div>
   
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Jojje', 'Rick', 'Skruttis', 'Bajskorven', 'Fisbarn']
    }
  }
}
</script>

<style>

</style>