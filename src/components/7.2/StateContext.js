import React from "react";

export const CounterContext = React.createContext({
  count: 0,
  setCount: () => {},
});

export const ProfessionContext = React.createContext({
  profession: "",
  setProfession: () => {},
});

export function CounterContextProvider({ children }) {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export function ProfessionContextProvider({ children }) {
  const [profession, setProfession] = React.useState("");

  return (
    <ProfessionContext.Provider value={{ profession, setProfession }}>
      {children}
    </ProfessionContext.Provider>
  );
}
