import React from "react";
import { useFetchProfession } from "./useFetchProfession";

function ProfessionDisplay() {
  const { profession, loading } = useFetchProfession();
  if (loading) {
    return <div>Loading profession...</div>;
  }
  return <div>Profession is {profession}</div>;
}

export default ProfessionDisplay;
