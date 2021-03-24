import React from "react";

function ProfessionDisplay({ profession, loading }) {
  if (loading) {
    return <div>Loading profession...</div>;
  }
  return <div>Profession is {profession}</div>;
}

export default ProfessionDisplay;
