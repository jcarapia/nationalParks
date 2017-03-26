import React, { Component } from 'react';
import axios from 'axios';


import NavBar from './NavBar';
import Footer from './Footer';
import Select from './Select';
import Video from './Video';

import Data from './data/data';

class Parks extends Component {
  constructor(props) {
    super(props)

    //initiate the component with the first park in the parks array
    this.state = {park: Data.parks[0]} 
  }

  componentDidMount() {
    // axios.defaults.headers.common['Authorization'] = "FB68E536-BB67-40A2-91BF-DC8B9D510793";
    // axios.get('https://developer.nps.gov/api/v0/parks?parkCode=yell')
    // .then((resp) => {
    //     console.dir(resp);
    // });

    // let config = {key: 'Authorization', value: 'FB68E536-BB67-40A2-91BF-DC8B9D510793'};
    // axios.get('https://developer.nps.gov/api/v0/parks?parkCode=yell', config)
    // .then((resp) => {
    //     console.dir(resp);
    // });

    //let park = axios.get('https://developer.nps.gov/api/v0/parks?parkCode=yell',  'FB68E536-BB67-40A2-91BF-DC8B9D510793');
    var myHeaders = new Headers({"Authorization": "FB68E536-BB67-40A2-91BF-DC8B9D510793",
                                  "Content-Type": "application/json"
                               });
    //myHeaders.append('Authorization', 'FB68E536-BB67-40A2-91BF-DC8B9D510793');
    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    fetch('https://developer.nps.gov/api/v0/parks?parkCode=yell', myInit)  
    .then(function(response) {  
    console.log(response) 
  })  

  }

  getPark(park) {
    //this function will be called in the Select component
    let foundPark = Data.findPark(park);
    this.setState({park: foundPark});
  }

  render() {

    let video = this.state.park.video;
    let desc = this.state.park.desc;
    let climate = this.state.park.climate;

    return (
      <div className="parks">
        <NavBar showSearch getPark={this.getPark.bind(this)} />

        <section className="information">
          <h1 className="park-title">{this.state.park.name} National Park</h1>
          
          <div className="row">
            <div className="col span-1-of-2">
              <Video video ={video} />  
            </div>
            <div className="col span-1-of-2">
              <h3>Description</h3>
              <p>{desc}</p>
              <h3>Climate</h3>
              <p>{climate}</p>   
            </div>
          </div>
        </section>

        <section>
          <h3 className="park-title">Placeholder</h3>
        </section>

        <Footer />
      </div>
    )
  }
};

export default Parks;