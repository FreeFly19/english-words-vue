import store from '../store'

const { dispatch } = store

export function fetchPhrases (to, from, next) {
  next()
  // dispatch('showLoading')
  dispatch('getPhrases')
    .then(() => {
      // dispatch('hideLoading')
    })
}
