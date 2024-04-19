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
            <p>{{ agent.role.displayName }}</p>
            <p>{{ agent.role.description }}</p>
        </div>

        <div class="abilities">
            <div  v-for="ability in agent.abilities" :key="ability.slot">
                <p class="title"> {{ ability.displayName }} </p>
                <p class="description">{{ ability.description }}</p>
                <div class="imageDiv">
                    <img v-bind:src="ability.displayIcon" alt="icon">
                </div>
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
    margin: auto;
    text-align: center;
    vertical-align: middle;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,auto);
}

.imageDiv{
    max-width: 100px;
}

.imageDiv img{
    width: 50px;
  padding: 10%;
  background-color: grey;
  border-radius: 10%;
}

.image{
    width: 25vw;
    height: 35vw;
    margin: auto;
    background-size: contain;
    border-radius: 10px;
    grid-column: 3 / 4;
    grid-row: 1 / 7;
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
    display: grid;
    grid-template-columns: repeat(5,1fr);
}

.title{
    font-weight: bold;
}

.descriptionDiv{
    grid-column: 1/2;
    padding: 50px;
}

.role{
    grid-column: 2/3;
    padding: 50px;
}

.titleDiv{
    grid-column: 1/3;
    font-size:xx-large;
}

</style>