<template>
  <div id="app">
    <cheader></cheader>
    <router-view></router-view>
  </div>
</template>

<script>
  import cheader from './components/common/header.vue'
export default {
  name: 'app',
  components:{
    cheader
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
}
</style>
