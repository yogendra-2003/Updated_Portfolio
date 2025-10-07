import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Games from "./components/pages/Games";
import StonePaperScissors from "./components/Games/StonePaperScissors";
import QueenGame from "./components/Games/QueenGames";
import TicTacToe from "./components/Games/TicTacToe";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/games" element={<Games />} />
          <Route path="/stone-paper-scissors" element={<StonePaperScissors />} />
          <Route path="/queen-game" element={<QueenGame />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
