import React from "react";
import PropTypes from "prop-types";

/**
 * @component CloseButton
 * @description UI Component for displaying the final score of a game
 * @author Shaun Cushman
 * @date December 2024
 */
const ScoreDisplay = ({ score }) => {
  const gameOverHeader = "GAME OVER!!!";
  const finalScoreHeader = `FINAL SCORE: ${score}`;

  return (
    <div className="score-display">
      <h1>{gameOverHeader}</h1>
      <h2>{finalScoreHeader}</h2>
    </div>
  );
};

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreDisplay;
