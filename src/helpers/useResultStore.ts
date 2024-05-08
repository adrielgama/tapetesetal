import { create } from 'zustand'

interface Store {
  result: string
  setResult: (result: string) => void
  dimensions: {
    height: number
    width: number
  }
  setDimensions: (dimensions: { height: number; width: number }) => void
}

const useResultStore = create<Store>((set) => ({
  result: '',
  dimensions: {
    width: 0,
    height: 0,
  },
  setResult: (result) => set({ result }),
  setDimensions: (dimensions) => set({ dimensions }),
}))

export default useResultStore
