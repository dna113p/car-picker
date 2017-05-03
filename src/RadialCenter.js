import React, { Component } from 'react';
import SelectButton from './SelectButton';

class RadialCenter extends Component {

  render() {
    return (
      this.props.make ? 
      <div className="radial-select-center">
        <img src={this.props.make.image}></img>
        <SelectButton text={this.props.make.name}/>
      </div>:
      <h2 className="radial-select-center">Pick a vehicle make...</h2>

    );
  }
}

export default RadialCenter;
