import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Router, Match, Link, BrowserRouter } from 'react-router'

import Landing from './Landing';
import About from './About';
import Parks from './Parks';

require('../public/main.scss');

class App extends Component {

  render() {
    return (
      <div>
      <Match exactly pattern="/" component={()=> <Landing/>} />     
      <Match pattern="/parks" component={()=> <Parks/>} />
      <Match pattern="/about" component={()=> <About/>} />
      </div>
    )
  }
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#app"));