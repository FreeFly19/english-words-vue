import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phrases: [
      {'id': 1, 'text': 'abandonment', 'date': Date.now(), 'translations': [{'value': 'отказ', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/3420123.png', 'votes': 5525}, {'value': 'заброшенность', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/372463.png', 'votes': 1855}, {'value': 'оставление', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/436554.png', 'votes': 823}, {'value': 'отказ, оставление жены, ребенка(юр)', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/681070.png', 'votes': 440}, {'value': 'запущенность', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/3316349.png', 'votes': 157}]}
    ],
    phrasesIdSequence: 1
  },
  mutations: {
    addPhrase (state) {
      state.phrases.push(
        {'id': ++state.phrasesIdSequence, 'text': 'abandonment', 'date': Date.now(), 'translations': [{'value': 'отказ', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/3420123.png', 'votes': 5525}, {'value': 'заброшенность', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/372463.png', 'votes': 1855}, {'value': 'оставление', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/436554.png', 'votes': 823}, {'value': 'отказ, оставление жены, ребенка(юр)', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/681070.png', 'votes': 440}, {'value': 'запущенность', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/3316349.png', 'votes': 157}]}
      )
    }
  }
})
