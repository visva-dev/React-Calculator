import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, handleClick, color, wide,
  } = props;
  return (
    <button
      type="button"
      onClick={() => {
        handleClick(name);
      }}
      value={name}
      style={{ backgroundColor: ['+', '-', 'X', '/', '='].includes(name) ? color : 'lightgrey', width: name === '0' ? `${wide}%` : '10%' }}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  wide: PropTypes.number,
};

Button.defaultProps = {
  name: '',
  handleClick: undefined,
  color: 'orange',
  wide: 20,
};

export default Button;
