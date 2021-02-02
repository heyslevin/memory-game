import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function addToScore() {
    setCurrentScore(currentScore + 1);
  }

  return (
    <div className="App">
      <div className="small-container">
        <Header currentScore={currentScore} highScore={highScore} />
        <Board currentScore={currentScore} addToScore={addToScore} />
      </div>
    </div>
  );
}

export default App;
