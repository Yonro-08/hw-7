import { useContext } from "react";
import { ListItem, Icon } from "@chakra-ui/react";
import { TiDelete } from "react-icons/ti";

import { AppContext } from "../../../context/AppContext";

const styleBox = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const styleSpan = {
  padding: "0 8px",
  background: "#007bff",
  color: "white",
  borderRadius: "30px",
};

export default function ExpensesItem({ id, style, name, cost }) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <ListItem style={style}>
      {name}
      <div style={styleBox}>
        <span style={styleSpan}>{cost} KZT</span>
        <Icon as={TiDelete} boxSize={5} onClick={handleDeleteExpense}></Icon>
      </div>
    </ListItem>
  );
}
