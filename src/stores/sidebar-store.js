import { create } from "zustand"

const useSidebarStore = create((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (isOpen) => set({ isOpen }),
  onClose: () => set({ isOpen: false})
}));

export default useSidebarStore;
