import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import apache from "./img/apache.jpg";
import barril from "./img/barril.jpg";
import camaron from "./img/camaron.jpg";
import corazon from "./img/corazon.jpg";
import diablo from "./img/diablo.jpg";
import jaras from "./img/jaras.jpg";
import luna from "./img/luna.jpg";
import melon from "./img/melon.jpg";
import sirena from "./img/sirena.jpg";
import soldado from "./img/soldado.jpg";
import valiente from "./img/valiente.jpg";
import venado from "./img/venado.jpg";

function CurrentScore(props) {
  return (
    <div className="flex-small one-fourth">
      <p className="no-margin-bottom">Current Score:</p>
      <h2 className="no-top">1</h2>
    </div>
  );
}

function HighScore(props) {
  return (
    <div className="flex-small one-fourth">
      <p className="no-margin-bottom">High Score</p>
      <h2 className="no-top gray-text">0</h2>
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <div className="flex-row">
        <div className="flex-small half">
          <h1 className="no-margin-top">Memory Game</h1>
          <p className="gray-text">
            The cards get shuffled every time they are clicked. You CAN NOT
            click on any card more than once or else your score resets to zero.{" "}
          </p>
        </div>
        <HighScore />
        <CurrentScore />
      </div>
      <hr />
    </div>
  );
}

function Card(props) {
  return (
    <div className="flex-small one-fourth card red">
      <img src={valiente} alt="" className="responsive-image" />
    </div>
  );
}

function Board(props) {
  return (
    <div>
      <div className="flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="small-container">
        <Header />
        <Board />
      </div>
    </div>
  );
}

export default App;
