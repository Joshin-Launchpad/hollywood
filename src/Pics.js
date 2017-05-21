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
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>

        <div className="main">
          <h1 className="title">Celebrate Life!</h1>
          <div className="pics-container"

            <div className="row">
              <div className="col-xs-6 col-md-3">
                <img className="roses" src={roses} alt="Rainbow of Roses" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6 col-md-3">
                <img className="runners" src={runners} alt="Runners on Track" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6 col-md-3">
                <img className="rocks" src={rocks} alt="Pile of rocks" />
              </div>
            </div>
          </div>
          <div className="chat-window-container">
          <ChatWindow />
        </div>

        <Main />
      </div>
    );
  }
}


export default Pics;
