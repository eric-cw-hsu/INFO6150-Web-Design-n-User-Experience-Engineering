import PropTypes from "prop-types";

const Reorder = ({ onReorder }) => {
  return (
    <>
      <button
        onClick={() => {
          onReorder();
        }}
      >
        Reorder
      </button>
    </>
  );
};

Reorder.propTypes = {
  onReorder: PropTypes.func.isRequired,
};

export default Reorder;
