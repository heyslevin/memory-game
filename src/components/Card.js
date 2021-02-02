import React from "react";

function Card(props) {
  return (
    <div className="flex-small one-fourth card red">
      <img
        src={props.card}
        alt={props.card}
        className="responsive-image"
        onClick={() => props.handleClick(props.card)}
      />
    </div>
  );
}

export default Card;
