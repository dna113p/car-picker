import React, { Component } from 'react';
import { connect } from 'react-redux';

import RadialSelector from './RadialSelector.js';
import FilterInput from './FilterInput';
import * as actions from './actions';

class App extends Component {

  componentDidMount() {
    this.props.actions.loadCars()
  }

  render() {
    return (
      <div className="app">
        <FilterInput 
          onChange={this.props.actions.updateFilter}
          text={this.props.filterText}/>
        <RadialSelector 
          setVehicle={this.props.actions.setVehicleMake} 
          items={this.props.items}
          selectedMake={this.props.selectedMake}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.filteredMakes,
    filterText: state.vehicleMakesFilter,
    selectedMake: state.selectedMake
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCars: () => dispatch(actions.fetchVehicleMakes()),
      updateFilter: (filter) => dispatch(actions.updateFilter(filter)),
      setVehicleMake: (make) => dispatch(actions.setVehicleMake(make))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
