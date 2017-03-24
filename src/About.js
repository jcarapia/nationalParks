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
          <q>
            Thousands of tired, nerve-shaken, over-civilized people are
            beginning to find out going to the moutains is going home; 
            that wilderness is a necessity...
          </q>
          <p>
            - John Muir
          </p>
        </section>
        <Footer />
      </div>
    )
  }
};

export default About