import React from "react";
import { useFetchProfession } from "./useFetchProfession";

function ProfessionDisplay() {
  const { profession, reviews, loading } = useFetchProfession();
  if (loading) {
    return <div>Loading profession...</div>;
  }
  return (
    <div>
      Profession is {profession}{" "}
      {reviews > 5 ? "with good reviews" : "with bad reviews"}
    </div>
  );
}



export default React.memo(ProfessionDisplay);
