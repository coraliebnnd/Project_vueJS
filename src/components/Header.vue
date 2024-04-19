<template>
    <header>
        <h1>Valorant agents</h1>
        <button v-on:click="returnHome">Home</button>
    </header>
</template>

<script>

export default{
  name : 'Header',
  methods:{
    returnHome() {
      this.$router.push({ name: 'Gallery' });
    }
  }
}
</script>

<style scoped>
  header{
    background-color: #bd3944;
    color: #fffbf5;
    height: fit-content;
    padding: 5px;
    display: flex;
    min-width: 100vw;
    justify-content: space-around;
    font-size: large;
  }

  a{
    color:#fffbf5;
  }

  li{
    list-style: none;
  }
</style>