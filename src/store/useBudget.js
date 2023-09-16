import { create } from "zustand";

export const useBudget = create((set) => ({
  budget: 2000,

  updateBudget: (value) =>
    set(() => {
      return { budget: value };
    }),
}));
