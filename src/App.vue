<template>
  <div id="app">
    <Nav class="mb-6" />
    <div class="flex justify-center items-center">      
      <HomeScreen />
    </div>
    
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
//import HelloWorld from './components/HelloWorld.vue'
import HomeScreen from './screens/Home.vue'

export default {
  name: 'app',
  components: {
    HomeScreen,
    Nav
  }
}
</script>

<style>
  @import './assets/styles/index.css';
</style>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
