import React from "react";

function SurnameDisplay({ data }) {
  return <div>Name is {data.surname}</div>;
}

export default React.memo(SurnameDisplay, (prevProps, nextProps) => {
  if (prevProps.data.surname === nextProps.data.surname) {
    return true;
  } else {
    return false;
  }
});
