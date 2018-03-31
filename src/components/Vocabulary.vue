<template>
  <div>
    <h2>Vocabulary</h2>
    <table width="100%">
      <thead>
      <tr>
        <th>Phrase</th>
        <th>Translated At</th>
        <th>Meanings</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="phrase in phrases" :key="phrase.id">
        <td>{{phrase.text}}</td>
        <td>{{new Date(phrase.date).toLocaleString()}}</td>
        <td>
          <ol style="text-align: left">
            <li v-for="translation in phrase.translations" :key="translation.value">
              {{translation.value}} <small>Votes: <b>{{ translation.votes }}</b></small>
            </li>
          </ol>
        </td>
        <td>Notes</td>
        <td>Actions</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Vocabulary',
  computed: mapState(['phrases'])
}
</script>

<style scoped>

</style>
