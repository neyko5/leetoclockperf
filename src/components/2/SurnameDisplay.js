import React from "react";

function SurnameDisplay({ surname }) {
  return <div>Name is {surname}</div>;
}

export default React.memo(SurnameDisplay);
