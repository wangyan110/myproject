// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import App from './App'
import routes from './router/index'
// import Login from './components/Login'
import Home from './components/Home'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Router)
Vue.use(ElementUI)


//配置路由
const router = new VueRouter({
  routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
