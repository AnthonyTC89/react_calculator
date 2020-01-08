import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    name, color, wide, clickHandler,
  } = props;
  const handleClick = () => clickHandler(name);
  const classes = wide ? ['buttonZero', color] : ['button', color];
  return (
    <button className={classes.join(' ')} type="button" onClick={handleClick}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};


export default Button;
