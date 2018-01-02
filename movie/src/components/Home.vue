<template>
  <div id="home" class="bodywrap">
    <app-center></app-center>
    <users></users>
    <app-footer></app-footer>    
  </div>
</template>

<script>
// 局部注册组建
import Users from './Users'
import Center from './Center'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return {
      title:'这是一个vue的脚手架'
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
/* <style>

</style> */
