import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <p>Result: {this.props.result}</p>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string
};

Display.defaultProps = {
  result: '0',
};


export default Display;
