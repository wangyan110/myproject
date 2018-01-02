<template>
  <div id="show-blog">
    <!-- <img src="./assets/logo.png"> -->
    <h1>博客总览</h1>
    <div v-for="" class="single-blog">{{blog.title}}</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'show-blog',
  data(){
      return{
        blog:{
            title:'',
            content:'',
            categories:[],
            author:''
        }
      }
  },
  components: {
    
  },
//   created(){
//       this.$http.get("http://jsonplaceholder.typicode.com/posts").
//       then(function(data){
//               console.log(data)
//               this.submmited = true
//       });
//   }
}
</script>

<style>

</style>
