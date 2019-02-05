<template>
  <div id="app">
    <Header/>
    <Home/>
    <About/>
    <Team/>
    <Work/>
    <Services/>
    <Features/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Work from './components/Work.vue'
import Services from './components/Services.vue'
import Features from './components/Features.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Home,
    Header,
    About,
    Team,
    Work,
    Services,
    Features,
    Contact,
    Footer
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
