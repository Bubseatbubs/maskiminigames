import React from "react";
import styles from "../styles/Styles.module.css";

const BackToMenuButton = () => {
  return (
    <button className={styles.button}>
      <a href="/">BACK TO MENU</a>
    </button>
  );
};

export default BackToMenuButton;