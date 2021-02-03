import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";

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

import violin from "../img/violin.jpg";
import bandolon from "../img/bandolon.jpg";
import arbol from "../img/arbol.jpg";
import botella from "../img/botella.jpg";
import escalera from "../img/escalera.jpg";
import gorrito from "../img/gorrito.jpg";
import muerte from "../img/muerte.jpg";
import pera from "../img/pera.jpg";
import pajaro from "../img/pajaro.jpg";
import garza from "../img/garza.jpg";
import catrin from "../img/catrin.jpg";
import dama from "../img/dama.jpg";
import paraguas from "../img/paraguas.jpg";

function Board(props) {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    violin,
    bandolon,
    arbol,
    botella,
    escalera,
    gorrito,
    muerte,
    pera,
    pajaro,
    garza,
    catrin,
    dama,
    paraguas,
  ];

  let shuffled = [];

  function cardShuffler() {
    setShuffledCards([...allCards].sort(() => 0.5 - Math.random()));
  }

  function handleClick(item) {
    if (selectedCards.includes(item)) {
      setOpen(true);
      props.resetScore();
      setSelectedCards([]);
    } else {
      selectedCards.push(item);
      setSelectedCards(selectedCards);
      props.addToScore();
    }
  }

  useEffect(() => {
    cardShuffler();
    props.updateHighScore();
  }, [props.currentScore]);

  return (
    <div>
      <Modal open={open} handleClose={handleClose} />
      <div className="flex-row">
        <Card card={shuffledCards[0]} handleClick={handleClick} />
        <Card card={shuffledCards[1]} handleClick={handleClick} />
        <Card card={shuffledCards[2]} handleClick={handleClick} />
        <Card card={shuffledCards[3]} handleClick={handleClick} />
      </div>

      <div className="flex-row">
        <Card card={shuffledCards[4]} handleClick={handleClick} />
        <Card card={shuffledCards[5]} handleClick={handleClick} />
        <Card card={shuffledCards[6]} handleClick={handleClick} />
        <Card card={shuffledCards[7]} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Board;
