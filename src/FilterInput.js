import React, { Component } from 'react';

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input 
        className="filter-input"
        value={this.props.text}
        onChange={this.handleChange} 
        placeholder="filter vehicle makes"></input>
    );
  }
}

export default FilterInput;
