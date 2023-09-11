import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case "ADD_SEARCH": {
      console.log(action.payload);
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case "DELETE_EXPENSE": {
      console.log(state.expenses);
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    }
    case "UPDATE_BUDGET": {
      return {
        ...state,
        budget: action.payload,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 70 },
    { id: 4, name: "Fuel", cost: 40 },
    { id: 5, name: "Child Care", cost: 500 },
  ],
  searchValue: "",
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        searchValue: state.searchValue,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
