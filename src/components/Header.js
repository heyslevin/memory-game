import React, { useEffect, useState } from "react";
import HighScore from "./HighScore";
import CurrentScore from "./CurrentScore";

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

export default Header;
