<template>
  <div>
    <h2>Vocabulary</h2>
    <form id="translation-form">
      <h3>Put your phrase to translate here</h3>
      <input type="text" v-model="phrase" :disabled="isLoading" size="40" placeholder="Your phrase...">
      <button @click.prevent="translatePhrase" :disabled="isLoading">{{isLoading ? 'Loading...' : 'Translate'}}</button>
    </form>
    <table width="100%">
      <thead>
      <tr>
        <th width="15%">Phrase</th>
        <th width="15%">Translated At</th>
        <th width="55%">Translations</th>
        <th width="10%">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="phrase in phrases" :key="phrase.id">
        <td>{{phrase.text}}</td>
        <td>{{new Date(phrase.date).toLocaleString()}}</td>
        <td>
          <ol style="text-align: left">
            <li v-for="translation in phrase.translations" :key="translation.id">
              {{translation.value}} <small>Votes: <b>{{ translation.votes }}</b></small>
            </li>
          </ol>
        </td>
        <td><i @click="deletePhrase(phrase.id)" class="fa fa-remove"></i></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Vocabulary',
  data: function () {
    return {
      phrase: '',
      isLoading: false
    }
  },
  computed: mapState(['phrases']),
  methods: {
    translatePhrase () {
      if (!this.phrase) { return }

      this.isLoading = true
      this.$store.dispatch('translatePhrase', this.phrase)
        .then(() => {
          this.phrase = ''
          this.isLoading = false
        })
    },
    deletePhrase (id) {
      this.$store.dispatch('deletePhrase', id)
    }
  }
}
</script>

<style scoped>
  #translation-form {
    margin: 10px 0 20px;
    padding: 10px 20px 20px;
    border: solid 1px #aaaaaa;
  }

</style>
