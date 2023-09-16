import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Box,
  Heading,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { useExpenses } from "../../store/useExpenses";

export default function AddExpenseForm() {
  const { addExpense } = useExpenses();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onClick = (event) => {
    event.preventDefault();
    if (name === "" || cost === "") return;
    const expense = {
      id: uuidv4(),
      name,
      cost: Number(cost),
    };
    addExpense(expense);
  };

  const onChangeCost = (event) => {
    if (!isNaN(event.target.value) && event.target.value.length < 19) {
      setCost(event.target.value);
    }
  };

  return (
    <>
      <Heading as="h3" my="20px" fontSize={30}>
        Add Expense
      </Heading>
      <FormControl as="form">
        <Grid
          maxW="600px"
          my="10px"
          gap="20px"
          templateColumns={[null, "1fr", "repeat(2, 1fr)"]}
        >
          <Box>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Box>
          <Box>
            <FormLabel>Cost</FormLabel>
            <Input value={cost} onChange={onChangeCost} />
          </Box>
        </Grid>
        <Button onClick={onClick} variant="brand">
          Save
        </Button>
      </FormControl>
    </>
  );
}
