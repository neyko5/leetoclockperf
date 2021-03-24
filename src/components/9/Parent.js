import React from "react";
import ProfessionDisplay from "./ProfessionDisplay";

function Parent() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Profession display</h5>
          <ProfessionDisplay />
        </div>
      </div>
    </div>
  );
}
export default React.memo(Parent);
