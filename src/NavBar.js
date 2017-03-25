import React, { Component } from 'react';
import { Link } from 'react-router';

import Select from './Select';

class NavBar extends Component {

  render() {

    let utilSpace;
    let getPark = this.props.getPark;

    if(this.props.showHome) {
      utilSpace = (
        <ul>
          <li><Link to="/parks"> Parks </Link></li>
          <li><Link to="/"> Home </Link></li>
        </ul>  
      )
    } else if (this.props.showSearch) {
      utilSpace = (
        <ul>
          <li><Select getPark={getPark} /></li>
          <li><Link to="/"> Home </Link></li>
        </ul>
      )
    } else {
      utilSpace = (
        <ul>
          <li><a href="#">Map</a></li>
          <li><Link to="/parks"> Parks </Link></li>
          <li><Link to="/about"> About </Link></li>
        </ul>    
      )
    }

    return (
      <nav className="main-nav">
        <img className="logo-small" src="../public/images/logo-title-right.png" />
        { utilSpace }
      </nav>
    )
  }
};

export default NavBar;