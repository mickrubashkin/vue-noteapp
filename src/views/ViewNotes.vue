<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote(textInput)"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

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
import { useWatchCharacters } from '@/hooks/useWatchCharacters'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNote = ref('')
const addEditNoteRef = ref(null)

const notesStore = useNotesStore()

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)
</script>
