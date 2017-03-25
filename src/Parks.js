import React, { Component } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';
import Carousel from './Carousel';
import Select from './Select';

class Parks extends Component {
  constructor(props) {
    super(props)

    this.state = {park: 'yosemite'}
  }

  getPark(park) {
    this.setState({park: park})
  }

  render() {
    return (
      <div className="parks">
        <NavBar showSearch getPark={this.getPark.bind(this)} />
        <section>
        <h1>{this.state.park}</h1>
        </section>
        <Footer />
      </div>
    )
  }
};

export default Parks;