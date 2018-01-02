<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <AddBlog/> -->
    <show-blog></show-blog>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'

export default {
  name: 'app',
  components: {
    AddBlog,ShowBlog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
