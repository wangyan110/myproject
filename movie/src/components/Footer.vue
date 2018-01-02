<template>
  <footer class="footer">
      <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      copyright: 'footer Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{background: #222;padding: 5px;box-sizing: border-box}
p{color: #fff;text-align: center}
</style>
