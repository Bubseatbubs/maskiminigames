/**
 * @file App.js
 * @description Houses routes for MASKI Minigames Website.
 * @contributor Khushmeet Gobindpuri
 * @date December 2024
 */
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import EndlessRacingGamePage from "./components/endless-racing-game/EndlessRacingGamePage";
import SnakeGamePage from "./components/snake-game/SnakeGamePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/snake" element={<SnakeGamePage />} />
          <Route path="/endless-racing" element={<EndlessRacingGamePage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
