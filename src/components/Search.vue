<template>
    <div id="search">
        <input type="search" v-model="search"/>
        {{ filteredData }}
        <input type="number" v-model="maxValue"/>
    </div>
</template>

<script>
import {getData} from   './Data.js';

export default { 
  name : 'Search',
  computed: {
    filteredData() {
      let filteredData = [2, 4, 5]
      const filterFunc = (item) => {  return item < this.maxValue }
      filteredData = filteredData.filter(filterFunc)
      // const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
      // let data = this.myData.filter(filterFunc)
      // return data
      return filteredData
    }
  },
  data(){
    return {
      data:[],
      search: "",
    }
  },
    mounted(){
      this.retrieveObjectData();
    },
  methods: {
    async retrieveObjectData(){
        this.myData = getData()
        console.log(this.myData)
    }
  }
}
</script>

<style scoped>
</style>