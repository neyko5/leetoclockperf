import React from "react";
import MyButton from "./MyButton";

const StateContext = React.createContext();

function Parent() {
  const state = React.useState();
  return (
    <StateContext.Provider value={state}>
      <Wrapper>
        <MyButton />
      </Wrapper>
    </StateContext.Provider>
  );
}

export function useStateContextActions() {
  const [, setState] = React.useContext(StateContext);
  return React.useMemo(
    () => ({
      setMyGloriousStateContextValue: setState,
    }),
    [setState]
  );
}

function Wrapper({ children }) {
  return <div>{children}</div>;
}

export default Parent;
