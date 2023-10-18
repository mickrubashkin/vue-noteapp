<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notesStore.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (all notes)</td>
          <td>{{ notesStore.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>

    <input
      v-model="feedbackInput"
      type="text"
      class="input"
      placeholder="Do you love Noteballs?"
      maxlength="100"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/notesStore'
import { useWatchCharacters } from '@/hooks/useWatchCharacters'
import { ref } from 'vue'

const notesStore = useNotesStore()

const feedbackInput = ref('')
useWatchCharacters(feedbackInput, 50)
</script>
