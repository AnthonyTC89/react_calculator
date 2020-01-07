import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name }) => (
  <button className="Button" type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
