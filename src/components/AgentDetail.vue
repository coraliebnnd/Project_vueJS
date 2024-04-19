<template>
    <div class="details" v-for="agent in agentData" :key="agent.uuid">

        <div class="titleDiv">
            <p class="title"> {{ agent.displayName }} </p>
        </div>

        <div class="descriptionDiv">
        <p class="description">{{ agent.description }}</p>
        </div>

        <div class="role" v-if="agent.role">
            <div class="imageDiv">
                <img v-bind:src="agent.role.displayIcon" alt="role">
            </div>
            <p class="title">{{ agent.role.displayName }}</p>
            <p>{{ agent.role.description }}</p>
        </div>

        <div class="abilities">
            <div class="ability" v-for="ability in agent.abilities" :key="ability.slot">
                <div class="imageDiv">
                    <img v-bind:src="ability.displayIcon" alt="icon">
                </div>
                <p class="title"> {{ ability.displayName }} </p>
                <p class="description">{{ ability.description }}</p>
            </div>
        </div>

        <div class="image" v-bind:style="{'background-image':'url(' + agent.background + '),linear-gradient(#' + agent.backgroundGradientColors[0] + ',#'+ agent.backgroundGradientColors[1]+ ',#'+ agent.backgroundGradientColors[2] + ')' }">
            <img v-bind:src="agent.fullPortrait" alt="portrait">
        </div>
    </div>
</template>

<script>
 import {getData} from './Data.js';

 export default {
  name: "AgentDetail",
  data() {
    return {
      myData: []
    };
  },
  computed: {
    agentData() {
      const agentId = this.$route.params.id;
      return this.myData.filter(agent => agent.uuid === agentId);
    }
  },
  mounted() {
    this.retrieveObjectData();
  },
  methods: {
    async retrieveObjectData() {
      const bigData = await getData();
      this.myData = bigData.data;
    }
  }
};
</script>

<style scoped>
.details{
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: auto;
    max-width: 100vw;
    margin: 0;
    overflow: hidden;
}

.imageDiv{
    max-width: 100px;
    margin: auto;
}

.imageDiv img{
    width: 50px;
  padding: 10%;
  background-color:  #7e595981 ;
  border-radius: 10%;
}

.image{
    width: 24vw;
    height: 35vw;
    margin: auto;
    background-size: contain;
    border-radius: 10px;
    grid-column: 3 / 4;
    grid-row: 1 / 4;
}

.image img{
    height: 100%;
    object-fit:contain;
    position: relative;
    left: -30%;
    padding: 5px;
}

.abilities{
    grid-column: 1/3;
    display: flex;
    margin: auto;
}

.abilities img{
    width: 6vw;
}

.ability{
    flex: 1;
    margin-left: 20px;
}

.title{
    font-weight: bold;
}

.descriptionDiv{
    grid-column: 1/2;
    padding: 50px;
    font-size: x-large;
}

.role{
    grid-column: 2/3;
    padding: 50px;
    font-size:larger;
}

.titleDiv{
    grid-column: 1/3;
    font-size:xx-large;
}

</style>