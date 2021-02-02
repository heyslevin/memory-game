import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="flex-small one-fourth card red">
      <img src={props.card} alt={props.card} className="responsive-image" />
    </div>
  );
}

export default Card;
