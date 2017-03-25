import React, { Component } from 'react';

import Data from './data/data';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {park: 'Select Park'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selection = event.target.value;
    this.setState({park: selection});
    if (selection !== 'Select Park') {
      this.props.getPark(selection);  
    } 
  }

  render() {

    let parks = Data.parks;

    return (
      <div id="park-selection">
      <select value={this.state.park} onChange={this.handleChange}>
        <option value="Select Park">Select Park</option>
        {parks.map((park) => (<option value={park.name} key={park.name}>{park.name}</option>) )}
      </select>
      </div>
    );
  }
}

export default Select;
