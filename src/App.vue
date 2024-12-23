<style src="./App.css"></style>

<template>
  <div id="app">
    <Navbar />
    <div id="espaco"></div>

    <BannerPrincipal />
    
    <router-view/>
    
    <Footer />
  </div>
</template>


<script>
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    export default {
      name: 'App',
      components: {
        Navbar,
        Footer
      }
    }
</script>