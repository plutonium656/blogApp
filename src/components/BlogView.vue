<template>
    <div>
        <div class="post-wrapper clearfix">
            <div class="img-container" :style="{backgroundImage:'url('+post.imageUrl+')'}">
            </div>
            <div class="text-wrapper">
                <div class="post-header">
                    <h3 class="post-title">{{post.title}}</h3>
                    <p class="post-meta">By <span class="author">{{post.author}}</span> - {{post.timestamp}}</p>
                    <hr>
                </div>
                <div class="post-body">
                    <p class="post-content">
                        {{post.content}}
                    </p>
                </div>
                <app-blog-comment-section />
            </div>
        </div>
    </div>
</template>

<script>
import AppBlogCommentSection from "./BlogCommentSection"
  export default {
    props: [
      "post"
    ],
    data() {
      return {

      }
    },
    components:{
        appBlogCommentSection:AppBlogCommentSection
    }
  }

</script>

<style>

</style>
