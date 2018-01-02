<template>
  <div class="users">
    <h1 class="h1">helo word</h1>
    <ul class="list">
        <li v-for="user in users">
            <h1>{{user.name}}</h1>
            <h2>{{user.email}}</h2>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users:[]
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) =>{
      this.users =data.body;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* <style>

</style> */
