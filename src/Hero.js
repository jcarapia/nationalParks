import React, { Component } from 'react';



class Hero extends Component {

  render() {
    return (
      <div className="hero">
        <div className="what-is-trailstar">
          <p className="title">
            What is TrailStar
          </p> 
          <p className="header">
            TrailStar is your one stop location for information on
            National Parks.
          </p>
          <p className="secondary">
            TrailStar provides a quick snapshot of our nations National 
            Parks. You'll be able to watch an introductory video, get 
            information such as founding date, size, visitors pear year.
            You will also have access to events, articles, and news releases.
          </p>

        </div>
        
      </div>
    )
  }
};

export default Hero;