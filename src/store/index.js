import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phrases: []
  },
  mutations: {
    addPhrase (state, phrase) {
      state.phrases.push(phrase)
    }
  },
  actions: {
    getPhrases ({ commit }) {
      axios.get('/api/phrases')
        .then(res => {
          res.data.forEach(p => commit('addPhrase', p))
        })
    }
  }
})
