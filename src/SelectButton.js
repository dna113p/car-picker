import React, { PropTypes, Component } from 'react';

class SelectButton extends Component {
  
  render() {
    return (
      <button className="select-button">Select {this.props.text}</button>
    );
  }
}

export default SelectButton;
