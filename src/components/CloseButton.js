import PropTypes from "prop-types";

/**
 * @component CloseButton
 * @description UI Component which displays a close icon and calls a function when clicked
 * @author Shaun Cushman
 * @date December 2024
 */
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
