import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 5,
    isLoading: false,
    tasks: {
      "1g31hj3g1j": {
          "description": "Lianet",
          "type": "text"
      },
      "adadad": {
          "description": "Alejandro",
          "type": "text"
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
