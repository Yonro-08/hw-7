import { useContext } from "react";
import { Alert } from "@chakra-ui/react";

import { AppContext } from "../../../context/AppContext";

export default function Remaining() {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <Alert
      borderRadius="10px"
      status={totalExpenses > budget ? "error" : "success"}
      padding="20px 10px"
    >
      <span>Remaining: {budget - totalExpenses} KZT</span>
    </Alert>
  );
}
