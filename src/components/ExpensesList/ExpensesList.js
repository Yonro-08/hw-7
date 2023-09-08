import { useContext } from "react";
import { List } from "@chakra-ui/react";

import ExpensesItem from "./ExpenseItem/ExpenseItem";
import { AppContext } from "../../context/AppContext";

const ListItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  borderBottom: "1px solid black",
};

export default function ExpensesList() {
  const { expenses } = useContext(AppContext);

  return (
    <List maxW="100%" border={"1px solid black"} borderBottom="none">
      {expenses.map((expense) => {
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
  );
}
