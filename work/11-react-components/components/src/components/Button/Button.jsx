import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  visual,
  type,
  children,
  onClickHandler
}) => {
  return (
    <button
      className={`btn-${visual}`}
      type={type}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

Button.prototype = {
  visual: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClickHandler: PropTypes.func
}

export default Button;
