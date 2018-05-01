<template>
  <div>
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
    width: 73.5%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    background-color: #ccc;
    padding: 5px 0.5%;
  }

  .commentForm input:focus,
  .commentForm button:focus {
    border: none;
    outline: none;
  }


  .commentForm button {
    width: 24.5%;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #34495e;
    color: white;
    outline:none;
    padding: 5px 0.5%;
  }

h4{
  margin-top:50px;
}
</style>
