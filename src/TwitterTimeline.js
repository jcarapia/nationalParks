
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'react-twitter-widgets'

class TwitterTimeline extends Component {
  constructor(props) {
    super(props)

    this.state = {twitterHandle: null} 
  }

  componentWillMount() {
    this.setState({twitterHandle: this.props.twitterHandle})
  }

  componentWillReceiveProps(nextProps){
    this.setState({twitterHandle: nextProps.twitterHandle})
  }

  render() {

    return (
      <Timeline
        dataSource={{ sourceType: 'profile', screenName: this.state.twitterHandle}}
        options={{height: '400',width: '400'}}
      />
    );
  }
}

export default TwitterTimeline

