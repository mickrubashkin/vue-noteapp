<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote(textInput)"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const notesStore = useNotesStore()

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>
