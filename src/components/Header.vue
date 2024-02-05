<template>
    <header>
        <nav>
          <li><a href="">About</a></li>
          <li><a href="">Categories</a></li>
        </nav>
        <p>Find your art</p>
        <Search></Search>
    </header>
</template>

<script>
import Search from "./Search.vue"

export default{
  name : 'Header',
  components : {
    Search
  }
}
</script>

<style scoped>
  header{
    background-color: #85553D;
    color: antiquewhite;
    height: fit-content;
    padding: 20px;
    display: flex;
    min-width: 100vw;
    justify-content: space-around;
  }

  li{
    list-style: none;
  }
</style>