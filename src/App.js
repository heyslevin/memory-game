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

  function updateHighScore() {
    if (currentScore >= highScore) {
      setHighScore(currentScore);
    }
  }

  function resetScore() {
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <div className="small-container">
        <Header currentScore={currentScore} highScore={highScore} />
        <Board
          updateHighScore={updateHighScore}
          currentScore={currentScore}
          addToScore={addToScore}
          resetScore={resetScore}
        />
      </div>
    </div>
  );
}

export default App;
