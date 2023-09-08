import { Box, Button, Input } from "@chakra-ui/react";

import { styleBoxBudget } from "../../../../styleTemplates";

export default function UpdateBudget({ budget, setIsEditing, dispatch }) {
  const UpdateBudget = (event) => {
    if (!isNaN(event.target.value) && event.target.value.length < 19) {
      dispatch({ type: "UPDATE_BUDGET", payload: event.target.value });
    }
  };

  return (
    <Box style={styleBoxBudget} gap="20px">
      <Input value={budget} bg="white" onChange={UpdateBudget} />
      <Button onClick={() => setIsEditing(false)} variant="brand">
        Save
      </Button>
    </Box>
  );
}
