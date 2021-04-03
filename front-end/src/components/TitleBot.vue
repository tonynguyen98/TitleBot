<template>
  <b-container>
    <b-col class="px-5 py-5 mb-5">
      <!-- Banner Logo Image -->
      <b-img :src="require('@/assets/Banner.png')" fluid center></b-img>

      <!-- Search Bar -->
      <b-form @submit="onSubmit" v-if="show" class="py-3">
        <b-row class="py-3">
          <b-input-group prepend="http://" class="mt-3">
            <b-form-input
              type="search"
              v-model="url"
              placeholder="website.com"
              required
            ></b-form-input>

            <b-input-group-append>
              <b-button
                v-if="isLoading === false"
                type="submit"
                variant="secondary"
                >Search
              </b-button>

              <b-button v-if="isLoading === true" variant="secondary" disabled>
                <b-spinner small></b-spinner>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-row>
      </b-form>

      <!-- Display Title with Good Response, Otherwise Display Error -->
      <b-card v-if="title !== ''" class="text-center" align-h="center">
        <p v-if="errorResponse === 400" style="font-size: large; color: red">
          Bad URL Request
        </p>

        <p
          v-else-if="errorResponse === 500"
          style="font-size: large; color: red"
        >
          Unknown Error
        </p>

        <b-col v-else-if="errorResponse === 200">
          <h3>The title of this website is:</h3>
          <p style="font-size: xx-large">
            <em>{{ title }}</em>
          </p>
        </b-col>
      </b-card>
    </b-col>

    <!-- Display Search History if Exists -->
    <b-card
      title="History"
      style="text-align: start; border: 1px solid #cecece"
      v-if="history.length !== 0"
    >
      <b-table per-page="10" thead-class="d-none" :items="history"> </b-table>
    </b-card>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "TitleBot",
  data() {
    return {
      url: "",
      title: "",
      errorResponse: 200,
      isLoading: false,
      history: [],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      this.errorResponse = 200;
      this.isLoading = true;

      event.preventDefault();

      axios
        .get("http://localhost:3000/", {
          params: { url: `http://${this.url}` },
        })
        .then((response) => {
          this.title = response.data;
          this.history.unshift({ url: this.url, title: response.data });
          this.isLoading = false;
        })
        .catch((e) => {
          this.errorResponse = e.response.status;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>