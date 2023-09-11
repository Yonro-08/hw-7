import { useState } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchExpense({ dispatch }) {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e) => {
    if (e.code === "Enter") {
      dispatch({ type: "ADD_SEARCH", payload: searchValue });
    }
  };

  return (
    <InputGroup my="20px">
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={onChangeSearchValue}
      />
    </InputGroup>
  );
}
