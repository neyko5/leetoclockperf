import React from "react";
import ProfessionDisplay from "./ProfessionDisplay";
import {
  ProfessionContextProvider,
  CounterContextProvider,
} from "./StateContext";
import Counter from "./Counter";

function Parent() {
  return (
    <CounterContextProvider>
      <ProfessionContextProvider>
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
      </ProfessionContextProvider>
    </CounterContextProvider>
  );
}
export default React.memo(Parent);
