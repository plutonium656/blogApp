<template>
  <ul>
      <li v-for="post in posts.slice(0,5)" :key="post.id" @click="$store.commit('changeActivePost',post)">
          {{post.title}}
          <p class="post-meta">By {{post.author}}</p>
      </li>
  </ul>
</template>

<script>
export default {
    props:[
        "posts"
    ],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    ul li{
        text-decoration: none;
        border-bottom:1px solid #ccc;
        padding:10px;
        text-transform: uppercase;
    }
        ul li:hover{
        background-color:#eee;
        cursor: pointer;
    }

    .post-meta{
        font-size: 65%;
        color:#aaa;
    }
@media only screen and (min-width: 768px){
    ul{
        margin-top:50px;
        margin-left:30px;
        list-style: none;
    }


}
</style>
