import React, { Component } from 'react';

import RoundButton from './RoundButton';

class RadialButtons extends Component {

  render() {

    const numItems = this.props.buttons.length;
    const rotationDeg = 360/numItems;
    let size = Math.PI*1.8*(this.props.height/2)/numItems;
    if (size > 100) size = 125;

    return (
      <div className="radial-buttons">
        {this.props.buttons.map( (button, i) => 
          <RoundButton  
            data={button} 
            rotation={rotationDeg * i - 90}
            size={size}
            offset={this.props.height/2}
            key={i}
            setVehicle={this.props.setVehicle}/>
        )}
      </div>
    );
  }
}

export default RadialButtons;
