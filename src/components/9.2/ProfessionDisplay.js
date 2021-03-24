import React from "react";
import { useFetchProfession } from "./useFetchProfession";

function Profession() {
  const { profession, reviews, loading } = useFetchProfession();
  if (loading) {
    return "Loading";
  }
  return (
    <ProfessionDisplay profession={profession} isGoodReview={reviews > 5} />
  );
}

let ProfessionDisplay = ({ profession, isGoodReview }) => {
  return (
    <div>
      Profession is {profession}{" "}
      {isGoodReview ? "with good reviews" : "with bad reviews"}
    </div>
  );
};
ProfessionDisplay = React.memo(ProfessionDisplay);

export default Profession;
