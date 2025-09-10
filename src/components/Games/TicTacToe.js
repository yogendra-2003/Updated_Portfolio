import React, { useState } from "react";
import Particle from "../Particle";
export default function TicTacToeVsComputer() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a] === "X" ? "Player 1" : "Computer";
      }
    }
    return newBoard.every((cell) => cell) ? "Draw" : null;
  };

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    setIsPlayerTurn(false);

    setTimeout(() => {
      const compMove = computerMove(newBoard);
      if (compMove !== null) {
        newBoard[compMove] = "O";
      }
      setBoard(newBoard);

      const compWinner = checkWinner(newBoard);
      if (compWinner) {
        setWinner(compWinner);
      } else {
        setIsPlayerTurn(true);
      }
    }, 600);
  };

  const computerMove = (newBoard) => {
    // Simple AI: pick random empty cell
    const emptyCells = newBoard.map((v, i) => (v === null ? i : null)).filter((v) => v !== null);
    if (emptyCells.length === 0) return null;
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div
  style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", // ✅ same gradient everywhere
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  }}
>
  {/* Background Particles */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Particle />
      </div>

      {/* Game Content */}
      <div style={{ display: "flex", gap: "30px", maxWidth: "1000px", width: "100%", zIndex: 1 }}>
        
        {/* Left Panel */}
        
        <div
          style={{
            flex: 1,
            background: "#341f67",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          }}
        >
          
          <h2>Player Settings</h2>
          <p><b>Player 1 (X):</b> You 🚀</p>
          <p><b>Computer (O):</b> AI 🤖</p>

          <h3>Game Rules</h3>
          <ul>
            <li>Player goes first with X</li>
            <li>Computer plays O automatically</li>
            <li>Get three in a row to win</li>
          </ul>

          <h3>Tips for Fair Play</h3>
          <p>Block the computer strategically and plan your moves ahead!</p>

          <button
            onClick={resetGame}
            style={{
              marginTop: "20px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              background: "#8a4fff",
              color: "white",
            }}
          >
            Restart Game
          </button>
        </div>

        {/* Right Panel */}
        <div
          style={{
            flex: 2,
            background: "#3d2a7c",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          }}
        >
          <h2>{winner ? `Winner: ${winner}` : isPlayerTurn ? "Your Turn" : "Computer's Turn"}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 100px)",
              gridTemplateRows: "repeat(3, 100px)",
              gap: "8px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            
            {board.map((cell, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                style={{
                  width: "100px",
                  height: "100px",
                  background: "#222",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "36px",
                  borderRadius: "10px",
                }}
              >
                {cell === "X" ? "🚀" : cell === "O" ? "🪐" : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
