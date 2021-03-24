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
      console.log("Changing name");
      setData({ name: "Jerry", surname: "Lipovec" });
    }, 10000);
  }, []);

  function alertMe() {
    alert("This is alert");
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name display</h5>
          <NameDisplay name={data.name} alert={alertMe} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Surname display</h5>
          <SurnameDisplay surname={data.surname} alert={alertMe} />
        </div>
      </div>
    </div>
  );
}

export default Parent;
