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
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius   temporibus consectetur tempora, libero mollitia quidem expedita, culpa similique enim earum accusamus! Dignissimos fugiat sequi provident voluptatem saepe numquam autem quaerat?',
  },
  {
    id: 'id2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
])

const addNote = () => {
  const note = {
    id: uuid(),
    content: newNote.value,
  }
  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = (noteId) => {
  notes.value = notes.value.filter((note) => note.id !== noteId)
}
</script>
