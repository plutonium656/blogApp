<template>
  <ul>
      <li v-for="post in posts" :key="post.id" @click="$store.commit('changeActivePost',post)">{{post.title}}</li>
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
@media only screen and (min-width: 768px){
    ul{
        list-style: none;
        margin-top:50px;
        margin-left:30px;
    }


}
</style>
