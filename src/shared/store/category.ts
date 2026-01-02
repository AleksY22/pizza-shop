import { create } from "zustand";

interface StateCategory {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

export const useCategoryStore = create<StateCategory>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
