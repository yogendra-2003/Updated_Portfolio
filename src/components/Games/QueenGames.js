import React, { useState } from "react";
import { FaChessQueen } from "react-icons/fa";
import Particle from "../Particle";

export default function QueenGame() {
  const [n, setN] = useState(8);
  // store queens as objects: { row, col, safe: boolean }
  const [queens, setQueens] = useState([]);

  // recompute safe flag for every queen in the array
  const computeSafety = (arr) => {
    return arr.map((q) => {
      const conflict = arr.some(
        (other) =>
          !(other.row === q.row && other.col === q.col) &&
          (other.row === q.row ||
            other.col === q.col ||
            Math.abs(other.row - q.row) === Math.abs(other.col - q.col))
      );
      return { ...q, safe: !conflict };
    });
  };

  // helper: check if there's a queen at a cell
  const findQueenIndex = (row, col) =>
    queens.findIndex((q) => q.row === row && q.col === col);

  // Handle cell click: toggle remove if exists, otherwise add (allowed even if conflicts)
  const handleCellClick = (row, col) => {
    const idx = findQueenIndex(row, col);

    if (idx !== -1) {
      // remove queen
      const newArr = queens.filter((_, i) => i !== idx);
      setQueens(computeSafety(newArr));
    } else {
      // add queen (always allowed)
      const newArr = [...queens, { row, col, safe: true }];
      setQueens(computeSafety(newArr));
    }
  };

  // Reset board
  const handleReset = () => setQueens([]);

  // Win only if we have n queens and all are safe
  const isWin = queens.length === n && queens.every((q) => q.safe);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        overflow: "hidden",
      }}
    >
      <Particle />

      <div
        style={{
          background: "transparent", // let the gradient + particles show
          borderRadius: "16px",
          padding: "30px",
          textAlign: "center",
          maxWidth: "750px",
          width: "96%",
          position: "relative",
          zIndex: 1,
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>♛ N-Queens Puzzle</h1>

        {/* Controls */}
        <div style={{ margin: "15px" }}>
          <select
            value={n}
            onChange={(e) => {
              setN(Number(e.target.value));
              setQueens([]);
            }}
            style={{
              padding: "8px 14px",
              margin: "0 5px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {[4, 5, 6, 7, 8].map((val) => (
              <option key={val} value={val}>
                {val} Queens
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            style={{
              padding: "8px 14px",
              margin: "0 5px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#9b5de5",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Reset
          </button>
        </div>

        {/* Chessboard */}
        <div
          style={{
            border: "4px solid rgba(255,255,255,0.08)",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          {Array.from({ length: n }).map((_, row) => (
            <div key={row} style={{ display: "flex" }}>
              {Array.from({ length: n }).map((_, col) => {
                const queenObj = queens.find((q) => q.row === row && q.col === col);
                const hasQueen = Boolean(queenObj);
                const isWhite = (row + col) % 2 === 0;

                return (
                  <div
                    key={col}
                    onClick={() => handleCellClick(row, col)}
                    style={{
                      width: "50px",
                      height: "50px",
                      background: isWhite ? "#f0d9b5" : "#b58863",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "0.12s",
                      userSelect: "none",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                    title={
                      hasQueen
                        ? queenObj.safe
                          ? "Safe queen — click to remove"
                          : "Conflicting queen (red) — click to remove"
                        : "Click to place a queen"
                    }
                  >
                    {hasQueen && (
                      <FaChessQueen
                        style={{
                          color: queenObj.safe ? "#38b000" : "crimson", // green if safe, red if conflict
                          fontSize: "28px",
                          filter: queenObj.safe ? "drop-shadow(0 3px 6px rgba(56,176,0,0.25))" : "drop-shadow(0 3px 6px rgba(255,0,70,0.25))",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Status */}
        <div
          style={{
            marginTop: "25px",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "1.1rem",
            background: isWin ? "#38b000" : "rgba(255,255,255,0.06)",
            color: isWin ? "white" : "#fff",
          }}
        >
          {isWin ? "🎉 You Win! All queens placed safely!" : `Queens placed: ${queens.length}/${n}`}
        </div>
      </div>
    </div>
  );
}
