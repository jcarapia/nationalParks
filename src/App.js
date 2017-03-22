import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Landing from './Landing';
import ClickMap from  './ClickMap'

require('../public/main.scss');

class App extends Component {

  render() {
    return (
      <div>
        <Landing />
        <ClickMap />  
      </div>
      
    )
  }
};

ReactDOM.render(<App />, document.querySelector("#app"));

