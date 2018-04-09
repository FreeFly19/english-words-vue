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
      state.phrases.unshift(phrase)
    },
    initPhrases (state, phrases) {
      state.phrases = phrases
    }
  },
  actions: {
    getPhrases ({ commit }) {
      return axios.get('/api/phrases')
        .then(({data}) => {
          commit('initPhrases', data)
        }, console.error)
    },
    translatePhrase ({ commit }, phrase) {
      return axios.post('/api/phrases', {phrase})
        .then(({data}) => {
          commit('addPhrase', data)
        }, console.error)
    }
  }
})
