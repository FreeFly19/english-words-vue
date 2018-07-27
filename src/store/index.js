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
    },
    removePhrase (state, id) {
      state.phrases.splice(state.phrases.findIndex(p => p.id === id), 1)
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
    },
    deletePhrase ({ commit }, id) {
      return axios.delete(`/api/phrases/${id}`)
        .then(() => {
          commit('removePhrase', id)
        }, console.error)
    }
  }
})
