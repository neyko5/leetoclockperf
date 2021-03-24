import React from "react";
import styled from "styled-components";

const CoolLabel = styled.div`
  background: yellow;
  width: 100px;
  line-height: 20px;
`;

function Card(props) {
  return (
    <div className="card" style={props.style}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <img
          src={"https://picsum.photos/200/" + props.imageHeight}
          alt={"image200x" + props.imageHeight}
        />
        {props.isCool && <CoolLabel>I am cool</CoolLabel>}
      </div>
    </div>
  );
}

export default React.memo(Card);
