import { Box, Button } from "@chakra-ui/react";

import { useBudget } from "../../../../store/useBudget";

import { styleBoxBudget } from "../../../../styleTemplates";

export default function DefaultBudget({ setIsEditing }) {
  const { budget } = useBudget();

  return (
    <Box style={styleBoxBudget}>
      <span>Budget: {budget} KZT</span>
      <Button onClick={() => setIsEditing(true)} variant="brand">
        Edit
      </Button>
    </Box>
  );
}
