import React from "react";
import PropTypes from "prop-types";
import StartGameButton from "./StartGameButton";
import styles from "../../styles/PageStyles.module.css";

const GameButtons = ({ startGame }) => {
  const menuRedirectHeader = "BACK TO MENU";

  return (
    <div className="buttons">
      <StartGameButton startGame={startGame} />
      <button
        className={styles.button}
        onClick={() => setTimeout(() => { window.location.href = "/"; }, 100)}
      >
        {menuRedirectHeader}
      </button>
    </div>
  );
};

GameButtons.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default GameButtons;
