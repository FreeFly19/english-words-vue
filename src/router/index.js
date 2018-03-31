import Vue from 'vue'
import Router from 'vue-router'
import Vocabulary from '@/components/Vocabulary'
import {fetchPhrases} from './guards'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Vocabulary',
      component: Vocabulary,
      beforeEnter: fetchPhrases
    }
  ]
})
