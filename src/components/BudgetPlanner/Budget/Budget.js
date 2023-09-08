import { useContext, useState } from "react";

import { AppContext } from "../../../context/AppContext";
import DefaultBudget from "./DefaultBudget/DefaultBudget";
import UpdateBudget from "./UpdateBudget/UpdateBudget";

export default function Budget() {
  const [isEditing, setIsEditing] = useState(false);
  const { budget, dispatch } = useContext(AppContext);

  return (
    <>
      {isEditing ? (
        <UpdateBudget
          dispatch={dispatch}
          budget={budget}
          setIsEditing={setIsEditing}
        />
      ) : (
        <DefaultBudget setIsEditing={setIsEditing} budget={budget} />
      )}
    </>
  );
}
