import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button className="Button">
        {this.props.name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
