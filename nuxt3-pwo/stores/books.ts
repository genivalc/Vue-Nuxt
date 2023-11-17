import type { BooksInterface } from '~/interfaces/book'

export const useBooksStore = defineStore(
  'books',
  () => {
    const user = ref<BooksInterface[]>([])

    const adicionar = (teste: BooksInterface[]) => {
      user.value = teste
    }

    return { adicionar, user }
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  },
)
