import React, { Component } from 'react';
import Timer from './Timer'
import {emojify} from 'react-emojione';

export default class Item extends Component {

  // <Button onClick={action('clicked')}>😀</Button>
  // <Button onClick={action('clicked')}>{emojify(':smile:')}</Button>
  // {emojify(':smile: :confused: :cat: :blush:')}

  render() {
    const { message, ts } = this.props.item
    return (
      <div>
        <Timer time={ts}/>: {message}
      </div>
    );
  }
}
