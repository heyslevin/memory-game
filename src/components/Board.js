import React from "react";
import Card from "./Card";

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

function Board(props) {
  let allCards = [
    apache,
    barril,
    camaron,
    corazon,
    diablo,
    jaras,
    luna,
    melon,
    sirena,
    soldado,
    valiente,
    venado,
  ];

  function cardShuffler() {
    let cardArray = [];

    for (let i = 0; i <= allCards.length; i++) {
      cardArray.push(i);
    }

    console.log(cardArray);
  }

  cardShuffler();

  return (
    <div>
      <div className="flex-row">
        <Card card={allCards[10]} />
        <Card card={barril} />
        <Card card={camaron} />
        <Card card={corazon} />
      </div>

      <div className="flex-row">
        <Card card={diablo} />
        <Card card={jaras} />
        <Card card={luna} />
        <Card card={melon} />
      </div>
    </div>
  );
}

export default Board;
