import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display(props) {
  const { result } = props;
  return (
    <div className="display">
      <p className="result">{result}</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};


export default Display;
