<template>
    <div class="filters">
      <div id="search">
        <input type="search" v-model="search" />
      </div>
  
      <div id="role">
        <label for="role-select">Role : </label>
        <select name="roles" id="role-select" v-model="selectedRole">
          <option value="All">All</option>
          <option v-for="role in roles" :value="role">{{ role }}</option>
        </select>
      </div>
  
      <div id="sort">
        <label for="sort-select">Sort : </label>
        <select class="sort-buttons" name="sorts" id="sort-select" v-model="selectedSort">
          <option v-for="sort in sorts" :key="sort">{{ sort }}</option>
        </select>
      </div>
    </div>

    <Gallery :filteredData="filteredData"></Gallery>
  </template>
  
  <script>
  import Gallery from "./Gallery.vue";
  import {getData} from './Data.js';

  export default {
    name: 'GalleryFilter',
    components: {Gallery},
    computed: {
        roleData(){
        let roleData = this.myData
        const filterFunc = (agent) => { 
            if(this.selectedRole == "All"){
            return this.myData
            }

            if(agent.role!=null){
            return agent.role.displayName.toLowerCase() == this.selectedRole.toLowerCase()
            }
        }
        roleData = roleData.filter(filterFunc)
        return roleData
        },

        searchedData() {
        let searchedData = this.myData
        const filterFunc = (agent) => {  return agent.displayName.toLowerCase().includes(this.search.toLowerCase())}
        searchedData = searchedData.filter(filterFunc)
        return searchedData
        },

        filteredData(){
        let filteredData = this.searchedData.filter(agent => this.roleData.includes(agent))

        if (this.selectedSort == "alphabetical") {
            filteredData.sort((a, b) => a.displayName.localeCompare(b.displayName));

        }else if (this.selectedSort == "role") {
            filteredData.sort((a, b) => {
            if (a.role && b.role) {
                return a.role.displayName.localeCompare(b.role.displayName)
            }
            return 0;
            })
        }

        return filteredData
        }
    },
    data() {
        return {
            myData:[],
            search: "",
            selectedRole:"All",
            roles: ["Duelist", "Initiator", "Sentinel", "Controller"],
            selectedSort: "alphabetical",
            sorts: ["alphabetical","role"]
        }
    },
    mounted(){
        this.retrieveObjectData();
    },
    methods: {
        async retrieveObjectData(){
        const bigData = await getData()
        this.myData = bigData.data
        console.log(this.myData)
        }
    },
  }
  </script>

<style scoped>
.filters{
  margin:auto;
  font-size: large;
}

.filters div{
    margin: 10px;
}

select{
    font-size: large;
}

input{
    font-size: large;
}

</style>