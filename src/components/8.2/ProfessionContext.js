import React from "react";

export const ProfessionContext = React.createContext({
  profession: "",
  setProfession: () => {},
});

export function ProfessionContextProvider({ children }) {
  const [profession, setProfession] = React.useState("");

  return (
    <ProfessionContext.Provider value={{ profession, setProfession }}>
      {children}
    </ProfessionContext.Provider>
  );
}
