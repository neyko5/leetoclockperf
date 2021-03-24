import React from "react";

export const CounterContext = React.createContext({
  count: 0,
  setCount: () => {},
});

export function CounterContextProvider({ children }) {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
