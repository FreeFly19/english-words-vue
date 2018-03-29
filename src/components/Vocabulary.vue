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
      <tr v-for="phrase in phrases" :key="phrase.text + phrase.date">
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
export default {
  name: 'Vocabulary',
  data () {
    return {
      phrases: [
        {'text': 'abandonment', date: 1522281205990, 'translations': [{'value': 'отказ', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/3420123.png', 'votes': 5525}, {'value': 'заброшенность', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/372463.png', 'votes': 1855}, {'value': 'оставление', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/436554.png', 'votes': 823}, {'value': 'отказ, оставление жены, ребенка(юр)', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/681070.png', 'votes': 440}, {'value': 'запущенность', 'pic_url': 'http://contentcdn.lingualeo.com/uploads/picture/3316349.png', 'votes': 157}]}
      ]
    }
  }
}
</script>

<style scoped>

</style>
