<template>
  <div>
    <b-container>
      <!-- Display TitleBot, Centered -->
      <b-row class="vh-100 text-center" align-v="center" align-h="center">
        <TitleBot />
      </b-row>
    </b-container>

    <!-- Display Lower Navbar -->
    <b-navbar variant="secondary" fixed="bottom">
      <b-navbar-brand
        href="https://github.com/tonynguyen98"
        style="color: white"
        >&copy; Tony Nguyen</b-navbar-brand
      >
    </b-navbar>
  </div>
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
