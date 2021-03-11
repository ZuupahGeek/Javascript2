<template>
  <div class="container">
    <div v-for="(post, index) in posts" :key="index">
      <h3 class="h1 text-center mt-5">PREVIEW</h3>
      <div class="card card-cascade">

        <div class="text-center bg-secondary">
          <h3 class="h2 my-3 text-white"> {{ post.title }} </h3>
        </div>

        <div class="card-body card-body-cascade">
          <p>Content:</p>
          <p>{{ post.content }}</p>
          <p>Categories:</p>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item border-0" v-for="(category, index) in blog.categories" :key="index"> {{ category }} </li>
          </ul>
          <p>Author: {{ post.author }} </p>




        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>