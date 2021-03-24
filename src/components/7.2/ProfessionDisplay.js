import React from "react";
import { ProfessionContext } from "./StateContext.js";

function ProfessionDisplay() {
  const state = React.useContext(ProfessionContext);
  return <div>Profession is {state.profession}</div>;
}

export default ProfessionDisplay;
