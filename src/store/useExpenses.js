import { create } from "zustand";

export const useExpenses = create((set, get) => ({
  expenses: [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 70 },
    { id: 4, name: "Fuel", cost: 40 },
    { id: 5, name: "Child Care", cost: 500 },
  ],
  searchExpenses: "",
  totalExpenses: 0,

  setTotalExpenses: () => {
    return get().expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
  },

  changeSearchExpenses: (value) =>
    set(() => {
      return { searchExpenses: value };
    }),

  deleteExpense: (id) =>
    set((state) => {
      const newExpenses = state.expenses.filter((expense) => expense.id !== id);
      return { expenses: newExpenses };
    }),

  addExpense: (expense) =>
    set((state) => {
      return { expenses: [...state.expenses, expense] };
    }),
}));
