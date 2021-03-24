import React from "react";
import Card from "./Card";

const cards = new Array(100).fill().map((value, index) => {
  return {
    imageHeight: 200 + Math.floor(Math.random() * 100),
    isCool: Math.random() > 0.8,
    name: "Card " + index,
  };
});

console.log(cards);

function Parent() {
  return (
    <div>
      {cards.map((card) => (
        <Card {...card}></Card>
      ))}
    </div>
  );
}
export default React.memo(Parent);
