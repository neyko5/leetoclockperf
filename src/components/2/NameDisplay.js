import React from "react";

function NameDisplay({ name }) {
  return <div>Name is {name}</div>;
}

export default React.memo(NameDisplay, (prevProps, nextProps) => {
  if (prevProps.data.name === nextProps.data.name) {
    return true;
  } else {
    return false;
  }
});
