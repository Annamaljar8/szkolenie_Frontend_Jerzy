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
    computed: {
      ...mapGetters({
        getKeycloakToken: 'getKeycloakToken'
      })
    },
    methods: {
      ...mapMutations({
        setKeycloakToken: 'SET_KEYCLOAK_TOKEN'
        }),
    },


    data: () => ({
    
    }),
    created(){
      let keycloakToken = sessionStorage['AccessTokenJWT'] || '';
      this.setKeycloakToken(keycloakToken);
      
      setInterval(() => {
        let keycloakToken = sessionStorage['AccessTokenJWT'] || '';
        let currentToken = this.getKeycloakToken;
        if (keycloakToken !== currentToken) {
          this.setKeycloakToken(keycloakToken);
        }
      }, 1000);
    },
  }
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
