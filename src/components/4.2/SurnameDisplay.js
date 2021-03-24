import React from "react";

function SurnameDisplay({ surname, alert }) {
  return <div onClick={alert}>Name is {surname}</div>;
}

export default React.memo(SurnameDisplay);
