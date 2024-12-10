import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Instructions.css';

/**
 * @component Instructions
 * @description Formatted instructions
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */

const Instructions = ({ content, onClose }) => (
  <div className="instructions-overlay">
    <div className="instructions-box">
      <button className="close-button" onClick={onClose}>×</button>
      
      <header className="header">INSTRUCTIONS</header>
      
      <div className="content">
        {content}
      </div>
    </div>
  </div>
);

Instructions.propTypes = {
  content: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default Instructions;
