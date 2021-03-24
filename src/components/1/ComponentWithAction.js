import React from "react";

function Toggle({ action }) {
  return (
    <div>
      <button onClick={action}>Trigger action</button>
    </div>
  );
}

export default Toggle;
