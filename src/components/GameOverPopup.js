import React, { useState } from "react";
import CloseButton from "./CloseButton.js";
import ScoreDisplay from "./ScoreDisplay.js";
import BackToMenuButton from "./BackToMenuButton.js";
import StartGameButton from "./StartGameButton.js";
import styles from "../styles/Styles.module.css";
import "../styles/GameOver.css";

/**
 * @component GameOver
 * @description Game Over Popup UI Component
 * @author Khushmeet Gobindpuri, Ayleen Piteo-Tarpy, Shaun Cushman
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
        <div className="buttons">
          <StartGameButton
            startGame={startGame}
            text="RESTART"
          />
          <BackToMenuButton />
        </div>
      </div>
    </div>
  );
};

export default GameOver;
