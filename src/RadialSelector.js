import React, { Component } from 'react';

import RadialButtons from './RadialButtons';
import RadialCenter from './RadialCenter';


class RadialSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: null
    };
  }

  calcHeight(node) {
    if (node && !this.state.height) {
      this.setState({
        height: node.offsetHeight - 100 
      });
    }
  }

  render() {
    return (
      <div ref={(node) => this.calcHeight(node)} className="radial-selector">
      {this.state.height ?
          <div className="radial-buttons-container">
            <RadialButtons 
              setVehicle={this.props.setVehicle} 
              height={this.state.height}
              buttons={this.props.items}/>
            <RadialCenter make={this.props.selectedMake} />
          </div>:
          <h3>Loading...</h3>}
      </div>
    );
  }
}

export default RadialSelector;
