import React from "react";
import PropTypes from "prop-types";

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
