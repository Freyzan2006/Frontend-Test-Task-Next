import { create } from 'zustand'

interface IPhotoStore {
    isOpenModalForm: boolean
    toggleModalForm: () => void
}

export const usePhotoStore = create<IPhotoStore>((set) => ({
    isOpenModalForm: false,
    toggleModalForm: () => set((state) => ({ isOpenModalForm: !state.isOpenModalForm }))
}))


