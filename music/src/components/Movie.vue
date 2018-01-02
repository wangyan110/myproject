<template>
  <div class="movie-list">
      <h1>添加博客</h1>
      <form action="" v-if="!submmited">
          <label for="">博客标题</label>
          <input type="text" v-model="blog.title" required>

          <label for="">博客内容</label>
          <textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>
          <div id="checkboxes">
              <label for="">vue.js</label>
              <input type="checkbox" name="" value="vue.js" id="" v-model="blog.categories">
              <label for="">node.js</label>
              <input type="checkbox" name="" value="node.js" id="" v-model="blog.categories">
              <label for="">react.js</label>
              <input type="checkbox" name="" value="react.js" id="" v-model="blog.categories">
              <label for="">ag.js</label>
              <input type="checkbox" name="" value="ag.js" id="" v-model="blog.categories">
          </div>
          <label for="">作者</label>
          <select  v-model="blog.author">
              <option v-for="author in authors">{{author}}</option>
          </select>
          <button v-on:click.prevent="post">添加博客</button>
      </form>
      <div v-if="submmited">
          <h3>你的博客已提交成功</h3>
      </div>
      <div id="preview">
          <h3>博客纵览</h3>
          <p>博客标题：{{blog.title}}</p>
          <p>博客内容</p>
          <p>{{blog.content}}</p>
          <p>博客分类</p>
          <ul>
              <li v-for="category in blog.categories">{{category}}</li>
          </ul>
          <p>作者：{{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'movie-list',
  data () {
    return {
      blog:{
          title:'',
          content:'',
          categories:[],
          author:''
      },
      authors:['tom','ko','kobe'],
      submmited:false
    }
  },
  methods:{
      post:function(){
          this.$http.post("http://jsonplaceholder.typicode.com/posts",{
              title:this.blog.title,
              body:this.blog.content,
              userId:1
          })
          .then(function(data){
              console.log(data)
              this.submmited = true
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
