<template>
  <div>
      <hr>
      <h4 class="post-title">Comments</h4>
    <form class="commentForm">
      <input type="text">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testComment: {
          author: "admin",
          content: "comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content comment content",
          timestamp: Date.now()
        }
      }
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
