import { Box, Button, Input } from "@chakra-ui/react";

import { styleBoxBudget } from "../../../../styleTemplates";
import { useState } from "react";

export default function UpdateBudget({ budget, setIsEditing, dispatch }) {
  const [inputValue, setInputValue] = useState(budget);
  const onChangeInput = (event) => {
    if (!isNaN(event.target.value) && event.target.value.length < 19) {
      setInputValue(event.target.value);
    }
  };

  const onClickSave = () => {
    if (inputValue === "") return;
    setIsEditing(false);
    dispatch({ type: "UPDATE_BUDGET", payload: inputValue });
  };

  return (
    <Box style={styleBoxBudget} gap="20px">
      <Input value={inputValue} bg="white" onChange={onChangeInput} />
      <Button onClick={onClickSave} variant="brand">
        Save
      </Button>
    </Box>
  );
}
