import React from "react";

function NameDisplay({ data }) {
  return <div>Name is {data.name}</div>;
}

export default React.memo(NameDisplay);
