import React from "react";

export const CounterActionsContext = React.createContext({
  setCount: () => {},
});
CounterActionsContext.displayName = "CounterActionsContext";

export const CounterStateContext = React.createContext({
  count: 0,
});
CounterStateContext.displayName = "CounterStateContext";

export function CounterContextProvider({ children }) {
  const [count, setCount] = React.useState(0);

  const actions = React.useMemo(() => {
    return { setCount };
  }, [setCount]);

  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterStateContext.Provider value={{ count }}>
        {children}
      </CounterStateContext.Provider>
    </CounterActionsContext.Provider>
  );
}
