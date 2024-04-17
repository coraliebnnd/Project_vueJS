<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>
body{
  color : #000000;
  background-color: #fffbf5;
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