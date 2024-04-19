<template>
    <header :class="mode">
        <h1>Valorant agents</h1>
        <button v-on:click="returnHome">Home</button>
        <button v-on:click="changeMode">{{ mode }}</button>
    </header>
</template>

<script>

export default{
  name : 'Header',
  methods:{
    returnHome() {
      this.$router.push({ name: 'Gallery' });
    },
    changeMode(){
      if(this.mode == "light"){
        this.mode = "dark"
      }else{
        this.mode = "light"
      }
      localStorage.setItem("mode", this.mode);
    }
  },
  data() {
        return {
          mode: localStorage.getItem("mode") || "light"
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

  .dark{
    background-color:  #53212b ;
  }

  a{
    color:#fffbf5;
  }

  li{
    list-style: none;
  }
</style>