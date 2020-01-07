import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ name, color, wide }) {
  const classes = wide ? ['buttonZero', color] : ['button', color];
  return (
    <button className={classes.join(' ')} type="button">
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};


export default Button;
