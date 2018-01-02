<template>
  <div id="app" class="wrap">
    <div class="header">
        <img src="src/assets/logo.png" style="width:80px"/>
        <ul class="navgation clearfix">
          <li v-for="name in names"><router-link :to="'/'+name.value">{{name.name}}</router-link></li>
          <!-- <li v-for="name in names"><a :href="'/' + name.value ">{{name.name}}</a></li> -->
        </ul>
    </div>
     <router-view></router-view>
  </div>
</template>
<script>
// 局部注册组建

export default {
  name: 'app',
  data(){
    return {
      names:[
        {
          name:'首页',
          value:''
        },
        {
          name:'电影专区',
          value:'helloworld'
        },
        {
          name:'联系我们',
          value:'about'
        }
      ]
    }
  }
}
</script>

/* <style>

</style> */
