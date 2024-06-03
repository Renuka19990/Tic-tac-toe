// src/App.js
import React from 'react';

import './App.css';
import Board from './components/Board';

const App = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
    </div>
  );
};

export default App;
