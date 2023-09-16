import { Alert } from "@chakra-ui/react";

import { useExpenses } from "../../../store/useExpenses";

export default function ExpenseTotal() {
  const { totalExpenses } = useExpenses();

  return (
    <Alert borderRadius="10px" status="info" padding="20px 10px">
      <span>Spend so far {totalExpenses} KZT</span>
    </Alert>
  );
}
