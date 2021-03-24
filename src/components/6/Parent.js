import React from "react";
import NameDisplay from "./NameDisplay";
import ProfessionDisplay from "./ProfessionDisplay";
import SurnameDisplay from "./SurnameDisplay";
import { useFetchProfession } from "./useFetchProfession";

function Parent() {
  const [data] = React.useState({
    name: "Jernej",
    surname: "Lipovec",
  });

  const { profession, loading } = useFetchProfession();

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
          <SurnameDisplay surname={data.surname} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Profession display</h5>
          <ProfessionDisplay profession={profession} loading={loading} />
        </div>
      </div>
    </div>
  );
}
export default React.memo(Parent);
