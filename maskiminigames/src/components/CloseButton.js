import react from "react";
import PropTypes from "prop-types";

const CloseButton = ({ onClick }) => {
  
  const icon = "x";

  return (
    <button
      className="close-button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
