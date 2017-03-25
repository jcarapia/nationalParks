import React, { Component } from 'react';

import Data from './data/data';

let sampleData = ['yosemite', 'denali', 'yellowstone', 'glacier']

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.getPark(event.target.value);
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
      <select value={this.state.value} onChange={this.handleChange}>
        {sampleData.map((park) => (<option value={park} key={park}>{park}</option>) )}
      </select>
      </div>
    );
  }
}

export default Select;
