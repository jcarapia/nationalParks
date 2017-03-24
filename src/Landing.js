import React, { Component } from 'react';

import ClickMap from './ClickMap';
import Footer from './Footer';
import Hero from './Hero';

class Landing extends Component{
  
  render() {
    return (
      <div>
      <header>
        <nav className="main-nav">
          <img className="logo-small" src="../public/images/logo-title-right.png" />
          <ul>
            <li><a href="#">Map</a></li>
            <li><a href="#">Park Info</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <Hero />
      </header>
      <ClickMap />
      <Footer />
      </div>
    )  
  }
}

export default Landing