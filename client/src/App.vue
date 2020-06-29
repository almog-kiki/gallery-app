<template>
  <div id="app">
    <nav-bar></nav-bar>
    <Greeting text="Welcome to my gallery"/>
    <Gallery></Gallery>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue'
import Gallery from "./components/Gallery.js";
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
    Greeting,
    Gallery
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
}
</style>
