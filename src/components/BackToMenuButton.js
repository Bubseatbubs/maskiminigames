import React from "react";
import styles from "../styles/Styles.module.css";

/**
 * @component BackToMenuButton
 * @description UI Component for a button that redirects to the main menu
 * @author Shaun Cushman
 * @date December 2024
 */
const BackToMenuButton = () => {

  const buttonText = "BACK TO MENU";

  return (
    <button
      className={styles.button}
      onClick={() => { window.location.href = "/maskiminigames/#/"; }}
    >
      BACK TO MENU
    </button>
  );
};

export default BackToMenuButton;