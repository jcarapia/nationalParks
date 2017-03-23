import React, { Component } from 'react'

class SlideShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: "../public/images/park-img/arches.jpg",
      caption: 'Arches National Park'
    }
  }

  componentDidMount() {
    setInterval(()=>this.imageSetter(), 5000);
  }

  imageSetter() {
    console.log('hello', this.state.caption)
    let parkImages = [
      {
        image: "../public/images/park-img/arches.jpg",
        caption: 'Arches National Park'
      },
      {
        image: "../public/images/park-img/crater.jpg",
        caption: 'Crater Lake National Park'
      },
      {
        image: "../public/images/park-img/grandcanyon.jpg",
        caption: 'Grand Canyon National Park'
      },
      {
        image: "../public/images/park-img/joshua.jpg",
        caption: 'Joshua Tree National Park'
      },
    ];

    let randomIndex = Math.floor(Math.random() * parkImages.length);
    console.log(randomIndex)
    let newImage = parkImages[randomIndex].image;
    let newCaption = parkImages[randomIndex].caption;
    
    this.setState({image: newImage, caption: newCaption})
  }

  render() {

    return (
      <figure className="slideshow">
        <img src={this.state.image} alt={this.state.caption}/>
        <figcaption>
          {this.state.caption}
        </figcaption>
      </figure>
    )
  }
}

export default SlideShow