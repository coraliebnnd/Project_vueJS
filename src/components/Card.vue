<template>
    <div id="Card">
        <h2>{{ title[0] }}</h2>
        <div v-if="imageUrl">
            <img v-bind:src="imageUrl" alt="Image">
        </div>
        <p v-if="description">{{ description[0] }}</p>
    </div>
</template>

<script>

export default{
  name : 'Card',
  props: {
    imageUrl:{},
    title:{},
    description:{}
  }
}
</script>

<style scoped>
#Card{
  text-align: center;
}

div{
  max-width: 20vw;
  margin: auto;
}

img{
  width:100%;
}
</style>