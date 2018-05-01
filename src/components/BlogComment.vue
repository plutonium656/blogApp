<template>
<div class="comment-container">
  <p class="comment-content">{{comment.content}}</p>
  <p class="post-meta">
      By <span class="author">{{comment.author}}</span> - {{comment.timestamp}}
  </p>
  </div>
</template>

<script>
export default {
    props:[
        "comment"
    ]
}
</script>

<style scoped>
.comment-container{
    border:1px solid #ccc;
    margin:10px 0;
    padding: 10px;
    border-radius:3px;
}
</style>
