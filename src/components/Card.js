import React from "react";

import apache from "../img/apache.jpg";
import barril from "../img/barril.jpg";
import camaron from "../img/camaron.jpg";
import corazon from "../img/corazon.jpg";
import diablo from "../img/diablo.jpg";
import jaras from "../img/jaras.jpg";
import luna from "../img/luna.jpg";
import melon from "../img/melon.jpg";
import sirena from "../img/sirena.jpg";
import soldado from "../img/soldado.jpg";
import valiente from "../img/valiente.jpg";
import venado from "../img/venado.jpg";

function Card(props) {
  return (
    <div className="flex-small one-fourth card red">
      <img src={valiente} alt="" className="responsive-image" />
    </div>
  );
}

export default Card;
