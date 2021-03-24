import React from "react";

function GrandChild() {
  for (var i = 0; i < 1000; i++) {
    console.log(i);
  }
  return <div>I am grandchild</div>;
}

export default React.memo(GrandChild);
