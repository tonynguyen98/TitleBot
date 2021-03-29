<template>
  <b-container>
    <b-card title="TitleBot" class="px-5 py-5 mb-5">
      <b-form @submit="onSubmit" v-if="show" class="py-3">
        <b-row class="py-3">
          <b-form-input
            id="input"
            v-model="form.url"
            placeholder="Enter website"
            required
          ></b-form-input>
        </b-row>

        <b-row class="text-center" align-v="center" align-h="center">
          <b-button v-if="isLoading === false" type="submit" variant="primary"
            >Search
          </b-button>

          <b-button v-if="isLoading === true" variant="primary" disabled>
            <b-spinner small></b-spinner>
          </b-button>
        </b-row>
      </b-form>

      <b-row class="text-center" align-h="center">
        <p v-if="errorResponse === 400" style="font-size: large; color: red">
          Bad URL Request
        </p>

        <p
          v-else-if="errorResponse === 500"
          style="font-size: large; color: red"
        >
          Unknown Error
        </p>

        <b-col v-else-if="title !== '' && errorResponse === 200">
          <h3>The title of this url is:</h3>
          <p style="font-size: xx-large">
            <em>{{ title }}</em>
          </p>
        </b-col>
      </b-row>
    </b-card>

    <b-container
      style="text-align: start; border: 1px solid #cecece"
      v-if="history.length !== 0"
      class="mt-5 px-3 py-3"
    >
      <h3>
        <u> History </u>
      </h3>
      <b-table per-page="10" thead-class="d-none" :items="history"> </b-table>
    </b-container>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "TitleBot",
  data() {
    return {
      form: {
        url: "",
      },
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
        .get(`http://localhost:3000/?url=http://${this.form.url}`)
        .then((response) => {
          this.title = response.data;
          this.history.unshift({ url: this.form.url, title: response.data });
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
.card-title {
  font-size: 48px;
}
</style>