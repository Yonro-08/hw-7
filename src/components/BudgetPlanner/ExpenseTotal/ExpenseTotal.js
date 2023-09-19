import { useEffect } from "react";
import { Alert } from "@chakra-ui/react";

import { useExpenses } from "../../../store/useExpenses";

export default function ExpenseTotal() {
  const { expenses } = useExpenses();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <Alert borderRadius="10px" status="info" padding="20px 10px">
      <span>Spend so far {totalExpenses} KZT</span>
    </Alert>
  );
}
