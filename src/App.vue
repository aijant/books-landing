<template>
  <div id="app">
    <Header/>
    <Home/>
    <About/>
    <Team/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    About,
    Team
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
  margin-top: 60px;
}
</style>
