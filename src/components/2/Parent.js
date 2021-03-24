import React from "react";
import NameDisplay from "./NameDisplay";
import SurnameDisplay from "./SurnameDisplay";

function Parent() {
  const [data, setData] = React.useState({
    name: "Jernej",
    surname: "Lipovec",
  });

  React.useEffect(() => {
    setTimeout(() => {
      setData({ name: "Jerry", surname: "Lipovec" });
    }, 5000);
  }, []);

  function printWindowWidth() {
    console.log("Window width is " + window.outerWidth);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name display</h5>
          <NameDisplay name={data.name} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Surname display</h5>
          <SurnameDisplay surname={data.surname} coolFunc={printWindowWidth} />
        </div>
      </div>
    </div>
  );
}

export default Parent;
