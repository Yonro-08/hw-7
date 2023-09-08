import { Grid } from "@chakra-ui/react";

import Budget from "./Budget/Budget";
import Remaining from "./Remaining/Remaining";
import ExpenseTotal from "./ExpenseTotal/ExpenseTotal";

export default function BudgetPlanner() {
  return (
    <Grid
      templateColumns={[null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap="20px"
    >
      <Budget />
      <Remaining />
      <ExpenseTotal />
    </Grid>
  );
}
