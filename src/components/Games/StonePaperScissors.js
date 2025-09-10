import React, { useState } from "react";
import Particle from "../Particle"; // import particle bg

export default function StonePaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    const result = getWinner(choice, compChoice);
    setWinner(result);
  };

  const getWinner = (player, computer) => {
    if (player === computer) return "Draw";
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You";
    } else {
      return "Computer";
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Particles */}
      <Particle />

      {/* Main Game Box */}
      <div
        style={{
          background: ("#c084fc"),
          borderRadius: "16px",
          padding: "30px",
          maxWidth: "700px",
          width: "90%",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          textAlign: "center",
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ marginBottom: "10px", color: "#07020cff" }}>
          Rock Paper Scissors
        </h1>
        <p style={{ color: "#d1d5db", marginBottom: "20px" }}>
          Play against the Computer 🤖
        </p>

        {/* Buttons */}
        <div style={{ marginBottom: "20px" }}>
          <button style={buttonStyle} onClick={() => playGame("Rock")}>
            🪨 Rock
          </button>
          <button style={buttonStyle} onClick={() => playGame("Paper")}>
            📜 Paper
          </button>
          <button style={buttonStyle} onClick={() => playGame("Scissors")}>
            ✂️ Scissors
          </button>
        </div>

        {/* Choices */}
        <div style={{ margin: "20px 0", fontSize: "18px" }}>
          {playerChoice && (
            <>
              <p>
                <b>You:</b> {playerChoice}
              </p>
              <p>
                <b>Computer:</b> {computerChoice}
              </p>
            </>
          )}
        </div>

        {/* Winner */}
        {winner && (
          <h2
            style={{
              background:
                winner === "Draw"
                  ? "#facc15"
                  : winner === "You"
                  ? "#10b981"
                  : "#ef4444",
              color: "white",
              padding: "10px 15px",
              borderRadius: "10px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
          </h2>
        )}

        <br />

        {/* Restart */}
        <button
          onClick={resetGame}
          style={{
            marginTop: "15px",
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#8b5cf6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  margin: "10px",
  borderRadius: "12px",
  border: "2px solid #a78bfa",
  background: "#6d28d9",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  color: "white",
  transition: "0.2s",
};
