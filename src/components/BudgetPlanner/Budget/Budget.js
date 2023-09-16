import { useState } from "react";

import DefaultBudget from "./DefaultBudget/DefaultBudget";
import UpdateBudget from "./UpdateBudget/UpdateBudget";

export default function Budget() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <UpdateBudget setIsEditing={setIsEditing} />;
  }
  return <DefaultBudget setIsEditing={setIsEditing} />;
}
