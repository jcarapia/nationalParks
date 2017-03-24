import React, { Component } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';
import Carousel from './Carousel';

class Parks extends Component {
  render() {
    return (
      <div className="parks">
        <NavBar showSearch />
        <section>
          Placeholder
        </section>
        <Footer />
      </div>
    )
  }
};

export default Parks;