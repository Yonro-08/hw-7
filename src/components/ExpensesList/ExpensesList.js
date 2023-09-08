import { useContext } from "react";
import { Box, List } from "@chakra-ui/react";

import { AppContext } from "../../context/AppContext";

import ExpensesItem from "./ExpenseItem/ExpenseItem";
import SearchExpense from "../SearchExpense/SearchExpense";

const ListItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  borderBottom: "1px solid black",
};

export default function ExpensesList() {
  const { expenses, dispatch, search } = useContext(AppContext);

  console.log(search);

  return (
    <Box>
      <SearchExpense expenses={expenses} dispatch={dispatch} search={search} />
      <List maxW="100%" border={"1px solid black"} borderBottom="none">
        {(search === null ? expenses : search).map((expense) => {
          console.log(expense);
          return (
            <ExpensesItem
              key={expense.id}
              id={expense.id}
              style={ListItemStyle}
              name={expense.name}
              cost={expense.cost}
            ></ExpensesItem>
          );
        })}
      </List>
    </Box>
  );
}
