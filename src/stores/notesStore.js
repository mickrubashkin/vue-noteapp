import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius   temporibus consectetur tempora, libero mollitia quidem expedita, culpa similique enim earum accusamus! Dignissimos fugiat sequi provident voluptatem saepe numquam autem quaerat?',
        },
        {
          id: 'id2',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        },
      ],
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        const note = state.notes.find((note) => note.id === id)

        return note.content
      }
    },
  },
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
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      if (index === -1) return
      this.notes[index].content = content
    },
  },
})
