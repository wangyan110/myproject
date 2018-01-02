const adminSet = r => require.ensure([],() => r(require('../components/adminSet/adminSet')),'adminSet')
const explain = r => require.ensure([], () => r(require('../components/explain/explain')),'explain')

// Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
