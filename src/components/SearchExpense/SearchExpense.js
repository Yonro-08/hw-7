import { useState } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useExpenses } from "../../store/useExpenses";

export default function SearchExpense() {
  const [searchValue, setSearchValue] = useState("");

  const { changeSearchExpenses } = useExpenses();

  const onChangeSearchValue = (e) => {
    if (e.code === "Enter") {
      changeSearchExpenses(searchValue);
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
