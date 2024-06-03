import React, { useState, useEffect } from "react";
import Square from "./Square";
import Fireworks from "./Fireworks";
import { speak } from "../utils/Speech";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
      speak(`Winner is ${winner}`);
    } else if (squares.every(Boolean)) {
      speak("The game is a draw");
    } else {
      speak(`Next player: ${isXNext ? "X" : "O"}`);
    }
  }, [squares, isXNext]);

  const handleClick = (index) => {
    const squaresCopy = [...squares];
    if (calculateWinner(squares) || squaresCopy[index]) {
      return;
    }
    squaresCopy[index] = isXNext ? "X" : "O";
    setSquares(squaresCopy);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return (
      <Square
        value={squares[index]}
        onClick={() => handleClick(index)}
        key={index}
      />
    );
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      {winner && <Fireworks show={true} />}
      <div className="text-4xl mb-8 font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-4">
        {squares.map((_, index) => renderSquare(index))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
