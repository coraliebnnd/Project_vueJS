<template>
    <footer :class="mode">
        <p>footer</p>
    </footer>
</template>

<script>
export default{
  name : 'Footer',
  data() {
    return {
      mode: localStorage.getItem('mode')
    }
  }
}
</script>

<style scoped>
footer{
  min-width: 100vw;
  background-color:  #bd3944 ;
  height: 80px;
  margin-top: auto;
}

.dark{
  background-color:  #53212b ;
}
</style>