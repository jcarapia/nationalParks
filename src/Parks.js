import React, { Component } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';
import Select from './Select';
import Video from './Video';

import Data from './data/data';

class Parks extends Component {
  constructor(props) {
    super(props)

    this.state = {park: Data.parks[0]}
  }

  getPark(park) {
    let foundPark = Data.findPark(park);
    this.setState({park: foundPark});
  }

  render() {

    let video = this.state.park.video;

    return (
      <div className="parks">
        <NavBar showSearch getPark={this.getPark.bind(this)} />
        <section>
        <h1>{this.state.park.name}</h1>
        <Video video ={video} />
        </section>
        <Footer />
      </div>
    )
  }
};

export default Parks;