import React from "react";
import ProfessionDisplay from "./ProfessionDisplay";
import { StateContextProvider } from "./StateContext";
import Counter from "./Counter";

function Parent() {
  return (
    <StateContextProvider>
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profession display</h5>
            <ProfessionDisplay />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Counter</h5>
            <Counter />
          </div>
        </div>
      </div>
    </StateContextProvider>
  );
}
export default React.memo(Parent);
