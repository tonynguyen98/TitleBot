<template>
  <b-container>
    <b-row class="vh-100 text-center" align-v="center" align-h="center">
      <TitleBot />
    </b-row>
  </b-container>
</template>

<script>
import TitleBot from "./components/TitleBot.vue";

export default {
  name: "App",
  components: {
    TitleBot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
