import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: uuid(),
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius   temporibus consectetur tempora, libero mollitia quidem expedita, culpa similique enim earum accusamus! Dignissimos fugiat sequi provident voluptatem saepe numquam autem quaerat?',
        },
        {
          id: uuid(),
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        },
      ],
    }
  },
  getters: {},
  actions: {
    addNote(newNote) {
      const note = {
        id: uuid(),
        content: newNote,
      }
      this.notes.unshift(note)
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    },
  },
})
