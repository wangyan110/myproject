<template>
  <div id="app">
    <Movie></Movie>
    <!-- <adminSet></adminSet> -->
    <!-- <Login></Login> -->
  </div>
</template>

<script>
import Movie from './components/Movie'
// import adminSet from './components/adminSet/adminSet'
// import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Movie
    // adminSet,
    // Login
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
