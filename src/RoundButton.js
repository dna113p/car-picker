import React, { Component } from 'react';

class RoundButton extends Component {

  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  
  handleMouseEnter() {
    this.props.setVehicle(this.props.data)
  }

  render() {

    const styles = {
      transform: `translateX(-${this.props.size/2}px) 
                  translateY(-${this.props.size/2}px) 
                  rotate(${this.props.rotation}deg)
                  translate(${this.props.offset}px)
                  rotate(${this.props.rotation * -1}deg)`,
      position: `absolute`,
      height: `${this.props.size}px`,
      width: `${this.props.size}px`,
      borderRadius: `${this.props.size/2}px`,
      backgroundImage: `url('${this.props.data.image}')`
    }

    return (
      <div 
        onMouseEnter={this.handleMouseEnter} 
        style={styles} 
        className="round-button"></div>
    );
  }
}

export default RoundButton;
