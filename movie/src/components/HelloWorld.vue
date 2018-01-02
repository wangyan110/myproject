<template>
  <div id="hello" class="bodywrap">
    <h1>{{ msg }}</h1>
    <app-footer></app-footer>    
  </div>
</template>

<script>

// 局部注册组建
import Users from './Users'
import Center from './Center'
import Footer from './Footer'


export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到电影专区'
    }
  },
  components:{
    "users":Users,
    "app-center":Center,
    "app-footer":Footer
    // Users
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* <style>

</style> */
