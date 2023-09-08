import { useContext } from "react";
import { Alert } from "@chakra-ui/react";

import { AppContext } from "../../../context/AppContext";

export default function ExpenseTotal() {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <Alert borderRadius="10px" status="info" padding="20px 10px">
      <span>Spend so far {totalExpenses} KZT</span>
    </Alert>
  );
}
