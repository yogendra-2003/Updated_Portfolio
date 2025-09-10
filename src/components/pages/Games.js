import React from "react";
import { Link } from "react-router-dom";
import "../pages/Games.css";
import { FaGamepad } from "react-icons/fa";
import Particle from "../Particle"; // <-- import this for background

export default function Games() {
  return (
    <div className="games-section">  {/* Apply background */}
      <Particle />  {/* Add particle effect like About page */}

      <div className="games-container" >
        <h1 className="games-title">
          <FaGamepad className="icon" /> Interactive Games
        </h1>
        <p className="games-subtitle">
          Choose a game and start having fun! 🎯
        </p>

        <div className="games-buttons">
          <Link to="/stone-paper-scissors" className="btn btn-purple">
            Start Rock, Paper, Scissors!
          </Link>
          <Link to="/queen-game" className="btn btn-teal">
            Start 8 Queen Problem
          </Link>
          <Link to="/tic-tac-toe" className="btn btn-green">
            Start Tic-Tac-Toe
          </Link>
        </div>
      </div>
    </div>
  );
}
