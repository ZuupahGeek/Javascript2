<template>
  <div class="mt-5">
   <button class="btn btn-secondary" @click="component = 'CreatePost'">Create</button>
   <button class="btn btn-secondary" @click="component = 'ViewPosts'">View</button>
   <create-post />
   <view-posts />
   <div class="border border-secondary">
     <div class="container">
       <component :is="component" />
     </div>
   </div>
  </div>
</template>

<script>
import CreatePost from './components/CreatePost'
import ViewPosts from './components/ViewPosts'

export default {
  name: 'App',
  Data() {
    return {
      component: 'CreatePost'
    }
  },
 components: {
   CreatePost,
   ViewPosts

 }
}
</script>

<style>

</style>
