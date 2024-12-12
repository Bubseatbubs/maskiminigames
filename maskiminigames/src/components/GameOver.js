import React, { useState } from "react";

import styles from "../styles/Styles.module.css";
import "../styles/GameOver.css";

import CloseButton from "./CloseButton.js";
import ScoreDisplay from "./ScoreDisplay.js";
import GameButtons from "./GameButtons.js";

/**
 * @component GameOver
 * @description Game Over Popup UI Component
 * @author Khushmeet Gobindpuri, Ayleen Piteo-Tarpy
 * @date December 2024
 */

const GameOver = ({ score, startGame }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  return (
    <div className={styles.overlay}>
      <div className="game-over">
        <CloseButton onClick={handleClose} />
        <ScoreDisplay score={score} />
        <GameButtons startGame={startGame} />
      </div>
    </div>
  );
};

export default GameOver;
