import React, { Component } from 'react';
import { Link } from 'react-router';

import NavBar from './NavBar';
import Footer from './Footer';

class About extends Component {
  render() {
    return (
      <div className="about" >
        <NavBar showHome />
        <section>
          Placeholder
        </section>
        <Footer />
      </div>
    )
  }
};

export default About