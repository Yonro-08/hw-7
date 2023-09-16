import { Box, Heading, List } from "@chakra-ui/react";

import ExpensesItem from "./ExpenseItem/ExpenseItem";
import SearchExpense from "../SearchExpense/SearchExpense";
import { useExpenses } from "../../store/useExpenses";

const ListItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  borderBottom: "1px solid black",
};

export default function ExpensesList() {
  const { expenses, searchExpenses } = useExpenses();

  const newExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchExpenses.toLowerCase())
  );

  return (
    <Box>
      <Heading as="h3" my="20px" fontSize={30}>
        Expenses
      </Heading>
      <SearchExpense />
      <List maxW="100%" border={"1px solid black"} borderBottom="none">
        {newExpenses.map((expense) => {
          return (
            <ExpensesItem
              key={expense.id}
              expense={expense}
              style={ListItemStyle}
            ></ExpensesItem>
          );
        })}
      </List>
    </Box>
  );
}
