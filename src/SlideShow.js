import React, { Component } from 'react'

class SlideShow extends Component {
  render() {
    return (
      <figure className="slideshow">
        <img src="../public/images/park-img/arches.jpg" alt="arches"/>
        <figcaption>
          Arches National Park
        </figcaption>
      </figure>
    )
  }
}

export default SlideShow