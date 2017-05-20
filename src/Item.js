import React, { Component } from 'react';
import Timer from './Timer'
import {emojify} from 'react-emojione';

export default class Item extends Component {
  render() {
    const { message, ts } = this.props.item
    return (
      <div>
        {message}{emojify(':smile:')}
        <br />
        Sent: <Timer time={ts}/>
      </div>
    );
  }
}
