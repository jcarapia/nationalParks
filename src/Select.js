import React, { Component } from 'react';

import Data from './data/data';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {park: 'Denali'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({park: event.target.value});
    this.props.getPark(event.target.value);
  }

  render() {

    let parks = Data.parks;

    return (
      <div>
      <select value={this.state.park} onChange={this.handleChange}>
        {parks.map((park) => (<option value={park.name} key={park.name}>{park.name}</option>) )}
      </select>
      </div>
    );
  }
}

export default Select;
