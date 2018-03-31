import store from '../store'

const { dispatch } = store

export function fetchPhrases (to, from, next) {
  // dispatch('showLoading')
  dispatch('getPhrases')
    .then(() => {
      next()
      // dispatch('hideLoading')
    })
}
