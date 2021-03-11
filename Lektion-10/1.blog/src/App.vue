<template>
  <div class="mt-5">
   <button class="btn" :class="{'btn-secondary': createPost, 'btn-outline-secondary': !createPost}" @click="component = 'CreatePost'">Create</button>
   <button class="btn" :class="{'btn-secondary': viewPosts, 'btn-outline-secondary': !viewPosts}" @click="component = 'ViewPosts'">View</button>
   <create-post />
   <view-posts />
   <div class="border border-secondary">
     <div class="container">
       <keep-alive>
       <component :is="component" @new-post="posts.push($event)" :posts="posts"/>
       </keep-alive>

     </div>
   </div>
  </div>
</template>

<script>
import CreatePost from './components/CreatePost'
import ViewPosts from './components/ViewPosts'

export default {
  name: 'App',
  
  data() {
    return {
      posts: [],
      component: 'CreatePost',
      createPost: true,
      viewPosts: false
    }
  },
 components: {
   CreatePost,
   ViewPosts

 },
 watch: {
   component: function() {
     if(this.component == 'CreatePost') {
       this.createPost = true
       this.viewPosts = false
     } else {
       this.createPost = false
       this.viewPosts = true
     }
   }
 }
}
</script>

<style>

</style>
