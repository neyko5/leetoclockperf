import React from "react";
import { ProfessionContext } from "./ProfessionContext.js";

function ProfessionDisplay() {
  const state = React.useContext(ProfessionContext);
  return <div>Profession is {state.profession}</div>;
}

export default ProfessionDisplay;
