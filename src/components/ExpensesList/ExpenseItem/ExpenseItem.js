import { ListItem, Icon } from "@chakra-ui/react";
import { TiDelete } from "react-icons/ti";

import { useExpenses } from "../../../store/useExpenses";

const styleBox = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const styleSpan = {
  padding: "0 8px",
  background: "#007bff",
  color: "white",
  borderRadius: "30px",
};

export default function ExpensesItem({ expense, style }) {
  const { deleteExpense } = useExpenses();

  return (
    <ListItem style={style}>
      {expense.name}
      <div style={styleBox}>
        <span style={styleSpan}>{expense.cost} KZT</span>
        <Icon
          as={TiDelete}
          boxSize={5}
          onClick={() => deleteExpense(expense.id)}
        ></Icon>
      </div>
    </ListItem>
  );
}
