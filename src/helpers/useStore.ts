import { create } from 'zustand'

interface Store {
  isModalOpen: boolean
  toggleModal: () => void
}

const useStore = create<Store>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}))

export default useStore
