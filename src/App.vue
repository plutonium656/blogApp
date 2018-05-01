<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
    <app-blog-view :post="$store.getters.selectedPost"></app-blog-view>
    <app-blog-list-view :posts="$store.getters.blogPosts"></app-blog-list-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header"
import AppBlogView from "./components/BlogView"
import AppBlogListView from "./components/BlogListView"
//test
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    appHeader:AppHeader,
    appBlogView:AppBlogView,
    appBlogListView:AppBlogListView
  },
  methods:{
  },
  created(){
    this.$store.commit("changeActivePost",this.$store.getters.blogPosts[0]);
  }
}
</script>

<style>

</style>
