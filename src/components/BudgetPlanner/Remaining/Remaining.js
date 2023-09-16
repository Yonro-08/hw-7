import { Alert } from "@chakra-ui/react";

import { useBudget } from "../../../store/useBudget";
import { useExpenses } from "../../../store/useExpenses";

export default function Remaining() {
  const { budget } = useBudget();
  const { expenses } = useExpenses();

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
