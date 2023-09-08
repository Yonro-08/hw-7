import { Box, Button } from "@chakra-ui/react";
import { styleBoxBudget } from "../../../styleTemplates";

export default function DefaultBudget({ setIsEditing, budget, styleBox }) {
  return (
    <Box style={styleBoxBudget}>
      <span>Budget: {budget} KZT</span>
      <Button onClick={() => setIsEditing(true)} variant="brand">
        Edit
      </Button>
    </Box>
  );
}
