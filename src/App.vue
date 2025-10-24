<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h1 style="color:blue">Elemento Estático</h1>
    <MenuComponent/> 
    <hr>
   <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
// import CineComponent from './components/CineComponent.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HolaMundo from './components/HolaMundo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HolaMundo
    // HomeComponent,
    // CineComponent
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
