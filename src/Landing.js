import React, { Component } from 'react';

class Landing extends Component{
  
  render() {
    return (
      <header>
        <nav className="main-nav">
          <img className="logo-small" src="../public/images/logo-title-right.png" />
          <ul>
            <li><a href="#">Map</a></li>
            <li><a href="#">Park Info</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    )  
  }
}

export default Landing