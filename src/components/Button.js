import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render() {
    const { name } = this.props;
    return (
      <button className="Button" type="button">
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
