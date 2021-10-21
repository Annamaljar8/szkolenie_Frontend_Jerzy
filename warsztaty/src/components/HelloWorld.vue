<template>
  <v-container>
    
  </v-container>
</template>

<script>
  import store from '../store';
  import vuetify from '../plugins/vuetify';
  import axios from '../plugins/axios'
  import { mapMutations, mapGetters, mapActions } from "vuex";
  import {
    VApp,
    VContainer,
    VRow,
    VCol,
    VInput
  } from "vuetify/lib";

  export default {
    axios,
    store,
    vuetify,
    components : {
      VApp,
      VContainer,
      VRow,
      VCol,
      VInput
    },

    name: 'HelloWorld',

    data: () => ({
    
    }),
  }
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
