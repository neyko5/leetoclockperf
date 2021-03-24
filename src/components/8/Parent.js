import React from "react";
import ProfessionDisplay from "./ProfessionDisplay";
import { ProfessionContextProvider } from "./ProfessionContext";
import { CounterContextProvider } from "./CounterContext";
import Counter from "./Counter";

function Parent() {
  return (
    <ProfessionContextProvider>
      <CounterContextProvider>
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
      </CounterContextProvider>
    </ProfessionContextProvider>
  );
}
export default React.memo(Parent);
