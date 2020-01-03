import React, {Component} from 'react';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends Component {
  render() {
    return (
      <div className="ButtonPanel">
        <div className="Group-1">
          <Button name="AC"/>
          <Button name="+/-"/>
          <Button name="%"/>
          <Button name="÷"/>
        </div>
        <div className="Group-2">
          <Button name="7"/>
          <Button name="8"/>
          <Button name="9"/>
          <Button name="X"/>
        </div>
        <div className="Group-3">
          <Button name="4"/>
          <Button name="5"/>
          <Button name="6"/>
          <Button name="-"/>
        </div>
        <div className="Group-4">
          <Button name="1"/>
          <Button name="2"/>
          <Button name="3"/>
          <Button name="+"/>
        </div>
        <div className="Group-5">
          <Button name="0"/>
          <Button name="."/>
          <Button name="="/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
