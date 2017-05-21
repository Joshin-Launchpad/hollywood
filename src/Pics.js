import React, { Component } from 'react';
import roses from './img/rainbow-roses.jpg';
import rocks from './img/rock-pile.jpeg';
import runners from './img/track-runners.jpg';

class Pics extends Component {
  // under return (<div>
  // <Navbar inverse fixedTop>
  // <Grid>...
  // )
  render() {
    return (
      <div>
        <div class="row">
          
          <div class="col-md-4"><img className="runners" src={runners} alt="Runners on Track" /></div>
          <div class="col-md-4"><img className="rocks" src={rocks} alt="Pile of rocks" /></div>
        </div>
      </div>
    );
  }
}


export default Pics;
