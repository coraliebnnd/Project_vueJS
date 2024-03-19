<template>
    <div id="Gallery">
        <li v-for="object in myData" :key="object.id">
          <Card :imageUrl="object.edmIsShownBy" :title="object.title" :description="object.dcDescription"/>
        </li>
    </div>

    <div id="search">
        <input type="search" v-model="search"/>
        {{ filteredData }}
    </div>
</template>

<script>
import {getData} from   './Data.js';
import Card from "./Card.vue";

export default{
    name: 'Gallery',
    computed: {
    filteredData() {
      if (!this.myData) {
      return []; // Retourne une liste vide si myData est null ou undefined
    }
      let filteredData = this.myData
      const filterFunc = (search) => {  return filteredData.title[0].includes(search)}
      filteredData = filteredData.filter(filterFunc)
      // const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
      return filteredData
    }
  },
    components: {Card},
    data() {
        return {
            myData:null,
            search: ""
            //tabThemes: ["archaeology", "art", "fashion", "industrial", "manuscript", "map", "migration", "music", "nature", "newspaper", "photography", "sport", "ww1"]
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
div{
  min-width: 100vw;
}
</style>