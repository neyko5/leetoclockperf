import React from "react";
import Card from "./Card";
import { VariableSizeList as List } from "react-window";

const cards = new Array(100).fill().map((value, index) => {
  return {
    imageHeight: 200 + Math.floor(Math.random() * 100),
    isCool: Math.random() > 0.8,
    name: "Card " + index,
  };
});

const getItemSize = (index) => {
  const card = cards[index];
  return 64 + card.imageHeight + (card.isCool ? 20 : 0);
};

const Row = function ({ index, style }) {
  const card = cards[index];
  return <Card {...card} style={style} />;
};

function Parent() {
  return (
    <div>
      <List height={800} itemCount={100} itemSize={getItemSize} width={500}>
        {Row}
      </List>
    </div>
  );
}
export default React.memo(Parent);
