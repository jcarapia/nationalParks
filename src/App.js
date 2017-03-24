import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Router, Match, Link, BrowserRouter } from 'react-router'

import Landing from './Landing';

require('../public/main.scss');

class App extends Component {

  render() {
    return (
      <Match exactly pattern="/" component={()=> <Landing/>} />     
    )
  }
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#app"));

