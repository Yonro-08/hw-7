import { Grid, Heading } from "@chakra-ui/react";

import Budget from "./Budget/Budget";
import Remaining from "./Remaining/Remaining";
import ExpenseTotal from "./ExpenseTotal/ExpenseTotal";

export default function BudgetPlanner() {
  return (
    <>
      <Heading as="h1" my="20px" fontSize={40}>
        My Budget Planner
      </Heading>
      <Grid
        templateColumns={[null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap="20px"
      >
        <Budget />
        <Remaining />
        <ExpenseTotal />
      </Grid>
    </>
  );
}
