import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

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
