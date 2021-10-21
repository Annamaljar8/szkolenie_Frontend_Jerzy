import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '../plugins/axios'
import FormService from '@/api/FormService'
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keycloakToken: '',
  },
  mutations: {
    SET_KEYCLOAK_TOKEN (state, payload) {
      state.keycloakToken = payload;
      axiosInstance.defaults.headers.common['Authorization'] = (payload ? `Bearer ${payload}` : '');
    }
  },
  actions: {
    loadFormByPath(context, payload) {
      return FormService.getByPath(payload);
    }
  },
  getters: {
    getKeycloakToken: (state) => state.keycloakToken;
  }
})
