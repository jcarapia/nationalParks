import React, { Component } from 'react';
import { Link } from 'react-router';

import ClickMap from './ClickMap';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';

class Landing extends Component{
  
  render() {
    return (
      <div>
      <header>
        <NavBar />
        <Hero />
      </header>
      <Footer />
      </div>
    )  
  }
}

export default Landing