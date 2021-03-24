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

  const alertName = React.useCallback(
    function () {
      alert("This is " + data.name);
    },
    [data.name]
  );

  const alertSurname = React.useCallback(
    function () {
      alert("This is " + data.surname);
    },
    [data.surname]
  );

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name display</h5>
          <NameDisplay name={data.name} alert={alertName} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Surname display</h5>
          <SurnameDisplay surname={data.surname} alert={alertSurname} />
        </div>
      </div>
    </div>
  );
}

export default Parent;
