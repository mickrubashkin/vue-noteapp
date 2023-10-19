<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div
      ref="modalCardRef"
      class="modal-card"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        Are yo sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button"
        >
          Cancel
        </button>
        <button
          @click="notesStore.deleteNote(noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { useNotesStore } from '@/stores/notesStore'

const notesStore = useNotesStore()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue', false)
}

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

const handleEscapeKey = (e) => {
  if (e.code === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keyup', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleEscapeKey)
})
</script>
