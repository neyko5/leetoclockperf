import React from "react";
import {
  CounterActionsContext,
  CounterStateContext,
} from "./CounterContext.js";

function Counter() {
  return (
    <>
      <CounterDisplay></CounterDisplay>
      <CounterButton></CounterButton>
    </>
  );
}

function CounterDisplay() {
  const state = React.useContext(CounterStateContext);
  return <div>Count is {state.count}</div>;
}

function CounterButton() {
  const state = React.useContext(CounterActionsContext);
  return (
    <button onClick={() => state.setCount(Math.random())}>
      Set random number
    </button>
  );
}

export default Counter;
