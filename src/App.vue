<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Categorie from "./components/Categorie.vue"
import Discover from "./components/Discover.vue"
</script>

<template>
  <Header></Header>
  <div>
      <h1>Categories</h1>
      <Categorie></Categorie>
  </div>
  <div>
    <h1>Discover</h1>
    <Discover></Discover>
  </div>
  <Footer></Footer>
</template>

<style>
body{
  color : #85553D;
  background-color: #F5EBC7;
  text-align: center;
}

#app{
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
</style>