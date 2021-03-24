import React from "react";
import { StateContext } from "./StateContext.js";

function Counter() {
  const state = React.useContext(StateContext);
  return (
    <>
      <div>Count is {state.count}</div>
      <button onClick={() => state.setCount(state.count + 1)}>
        Increase count
      </button>
    </>
  );
}

export default Counter;
