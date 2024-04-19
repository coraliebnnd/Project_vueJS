<template>
    <div id="Card" v-on:click="viewDetails">
      <div class="role" v-if="role">
        <img v-bind:src="role" alt="role">
      </div>
      <div class="title">
        <p class="title">{{ title }}</p>
      </div>
      <div class="image" v-if="imageUrl">
          <img v-bind:src="imageUrl" alt="Image">
      </div>
        <p class="description" v-if="description">{{ description }}</p>
    </div>
</template>

<script>

export default{
  name : 'Card',
  methods: {
    viewDetails() {
      console.log(this.id);
      this.$router.push({ name: 'agent-detail', params: { id: this.id } });
    }
  },
  props: {
    imageUrl:{},
    title:String,
    description:{},
    role:{},
    id:{}
  }
}
</script>

<style scoped>
#Card{
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  vertical-align: middle;
  height: 100%;
  gap: 10px;
  padding: 5px;
  background-color: rgb(245, 235, 220);
  border-radius: 10px;
}

.image{
  grid-column: 1 / 4;
}

.image img{
  max-width: 100%;
}

.role{
  grid-column: 1 / 2;
  margin: auto;
  margin-left: 10px;
}

.role img{
  width: 50px;
  padding: 10%;
  background-color: rgba(128, 128, 128, 0.74);
  border-radius: 10%;
}

.description{
  grid-column: 1 / 4;
  margin: auto;
  padding: 10px;
}

.title{
  font-size:30px;
  grid-column: 2 / 4;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
  margin: auto;
  padding: 5px;
}

</style>