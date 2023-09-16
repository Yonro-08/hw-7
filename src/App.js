import { Container } from "@chakra-ui/react";

import ExpensesList from "./components/ExpensesList/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import BudgetPlanner from "./components/BudgetPlanner/BudgetPlanner";

function App() {
  return (
    <>
      <Container maxW={[null, "100%", "90%", "70%"]}>
        <BudgetPlanner />
        <ExpensesList />
        <AddExpenseForm />
      </Container>
    </>
  );
}

export default App;
