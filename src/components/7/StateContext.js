import React from "react";

export const StateContext = React.createContext({
  count: 0,
  profession: "",
  setProfession: () => {},
  setCount: () => {},
});

export function StateContextProvider({ children }) {
  const [count, setCount] = React.useState(0);
  const [profession, setProfession] = React.useState("");

  return (
    <StateContext.Provider
      value={{ count, profession, setProfession, setCount }}
    >
      {children}
    </StateContext.Provider>
  );
}
