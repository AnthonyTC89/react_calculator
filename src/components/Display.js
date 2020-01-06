import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="display">
        <p className="result">{result}</p>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};


export default Display;
