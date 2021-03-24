import React from "react";
import { useStateContextActions } from "./Parent";
function MyButton() {
  const actions = useStateContextActions();
  return (
    <button
      onClick={() => actions.setMyGloriousStateContextValue(Math.random())}
    >
      Set random
    </button>
  );
}

export default React.memo(MyButton);
