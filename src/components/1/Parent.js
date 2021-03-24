import React from "react";
import Button from "./Button";
import Display from "./Display";
import Toggle from "./Toggle";
import Unrelated from "./Unrelated";
import ToggleDisplay from "./ToggleDisplay";
import ComponentWithAction from "./ComponentWithAction";
import Child from "./Child";

function Parent() {
  const [count, setCount] = React.useState(0);
  const [toggle, setToggle] = React.useState(true);

  function printWindowWidth() {
    console.log("Window width is " + window.outerWidth);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Counter</h5>
          <Button onClick={() => setCount(count + 1)} />
          <Display value={count} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Unrelated component</h5>
          <Unrelated />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Trigger random function call</h5>
          <ComponentWithAction action={printWindowWidth} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Toggle on/off</h5>
          <Toggle onClick={() => setToggle(!toggle)} />
          <ToggleDisplay toggle={toggle} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Component with children</h5>
          <Child />
        </div>
      </div>
    </div>
  );
}

export default Parent;
