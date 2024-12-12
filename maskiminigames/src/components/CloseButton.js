import react from "react";
import PropTypes from "prop-types";

const CloseButton = ({ onClick }) => (
  <button
    className="close-button"
    onClick={onClick}
  ></button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
