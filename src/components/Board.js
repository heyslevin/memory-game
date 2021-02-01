import React from "react";
import Card from "./Card";

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

export default Board;
