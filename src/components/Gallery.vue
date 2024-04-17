<template>

  <div id="Gallery">
    <li v-for="agent in filteredData" :key="agent.uuid">
      <Card :id="agent.uuid" :imageUrl="agent.displayIcon" :title="agent.displayName" :description="agent.description" v-if="agent.role" :role="agent.role.displayIcon"/>
    </li>
  </div>

</template>

<script>
import Card from "./Card.vue";

export default{
  name: 'Gallery',
  components: {Card},
  props: {
    filteredData:Array,
  }
}
</script>

<style scoped>
#Gallery{
  min-width: 96vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2vw;
  margin: 2vw;
}

li{
  list-style: none;
}
</style>