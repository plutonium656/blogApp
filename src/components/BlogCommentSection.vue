<template>
  <div>
    <hr>
    <h4 class="post-title">Comments</h4>
    <form class="commentForm">
      <input type="text">
      <button @click.prevent>Submit</button>
    </form>
    <app-blog-comment 
    v-for="(comment,index) in $store.getters.comments"
    :key="index"
    :comment="comment" 
    />
  </div>
</template>

<script>
import AppBlogComment from "./BlogComment"
  export default {
    data() {
      return {

    }
  },
  components:{
    appBlogComment:AppBlogComment
  }
  }

</script>

<style scoped>
  .commentForm {
    width: 100%;
  }

  .commentForm input {
    width: 75%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    background-color: #ccc;
    padding: 5px;
  }

  .commentForm input:focus {
    border: none;
    outline: none;
  }


  .commentForm button {
    width: auto;
    border: none;
    padding: 5px 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #34495e;
    color: white;
  }

</style>
