import { Grid } from "@chakra-ui/react";

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
