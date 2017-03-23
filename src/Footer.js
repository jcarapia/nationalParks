import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <img className="logo-small" src="../public/images/logo-title-right.png" alt="logo"/>
        <p>Created by Jorge Carapia</p>
        <ul className="social-media">
          <li><a href="https://www.facebook.com/RichmondGeorge" target="_blank"><i className="ion-social-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jcarapia/" target="_blank"><i className="ion-social-linkedin"></i></a></li>
          <li><a href="https://github.com/jcarapia" target="_blank"><i className="ion-social-github"></i></a></li>
          <li><a href="https://medium.com/@JCarapia" target="_blank"><i className="fa fa-medium"></i></a></li>
        </ul>
      </footer>
    )
  }
};

export default Footer;
