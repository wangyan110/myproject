<template>
  <center>
      <h1>{{title}}</h1>
  </center>
</template>

<script>
export default {
  name: 'app-center',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
header{background: lightgreen;padding: 10px;}
h1{color: #666;text-align: center}
</style>
