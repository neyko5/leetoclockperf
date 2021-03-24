import React from "react";
import { StateContext } from "./StateContext.js";

function ProfessionDisplay() {
  const state = React.useContext(StateContext);
  return <div>Profession is {state.profession}</div>;
}

export default ProfessionDisplay;
