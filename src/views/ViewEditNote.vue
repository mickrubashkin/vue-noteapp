<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light mr-2"
        >
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/notesStore'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()

const noteContent = ref('')

noteContent.value = notesStore.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteContent.value)
  noteContent.value = ''
  router.push('/')
}
</script>
