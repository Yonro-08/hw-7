import { Container, Heading } from "@chakra-ui/react";

import { AppProvider } from "./context/AppContext";

import ExpensesList from "./components/ExpensesList/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import BudgetPlanner from "./components/BudgetPlanner/BudgetPlanner";
import SearchExpense from "./components/SearchExpense/SearchExpense";

function App() {
  return (
    <AppProvider>
      <Container maxW={[null, "100%", "90%", "70%"]}>
        <Heading as="h1" my="20px" fontSize={40}>
          My Budget Planner
        </Heading>
        <BudgetPlanner />
        <Heading as="h3" my="20px" fontSize={30}>
          Expenses
        </Heading>
        <SearchExpense />
        <ExpensesList />
        <Heading as="h3" my="20px" fontSize={30}>
          Add Expense
        </Heading>
        <AddExpenseForm />
      </Container>
    </AppProvider>
  );
}

export default App;
