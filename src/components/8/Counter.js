import React from "react";
import { CounterContext } from "./CounterContext.js";

function Counter() {
  return (
    <>
      <CounterDisplay></CounterDisplay>
      <CounterButton></CounterButton>
    </>
  );
}

function CounterDisplay() {
  const state = React.useContext(CounterContext);
  return <div>Count is {state.count}</div>;
}

function CounterButton() {
  const state = React.useContext(CounterContext);
  return (
    <button onClick={() => state.setCount(Math.random())}>
      Set random number
    </button>
  );
}

export default Counter;
