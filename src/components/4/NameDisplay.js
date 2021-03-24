import React from "react";

function NameDisplay({ name, alert }) {
  return <div onClick={alert}>Name is {name}</div>;
}

export default React.memo(NameDisplay);
