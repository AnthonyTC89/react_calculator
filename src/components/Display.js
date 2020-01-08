import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = (props) => {
  const { text } = props;
  return (
    <div className="display">
      <span className="result">{ text }</span>
    </div>
  );
};

Display.propTypes = {
  text: PropTypes.string,
};

Display.defaultProps = {
  text: '0',
};


export default Display;
