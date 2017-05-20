import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';
import './index.css';
// import Button from './Button'
// import Emoji from './Emoji';

class ChatWindow extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      textInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ textInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      message: this.state.textInput,
      ts: Date.now(),
    };
    this.setState(state => ({
      items: [...state.items, newItem],
      textInput: '',
    }));
  }


// {ReactEmoji.emojify(*hello :)*)}
// <button className=onClick={action('clicked')}>😀</button>

  render() {
    const { items, textInput } = this.state;
    return (
      <div>
        <h3>Let's Chat</h3>
        <ul
          style={{
            padding: 0,
            listStyleType: 'none',
          }}>
          {items.map(item => (
            <li key={item.ts}>
              <Item item={item} />
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={textInput} />
          <br />
          <button>Send</button>
        </form>
        <p>Emoji box here</p>
        <button type="button" onClick="emojiShow()">😀</button>
        <button type="button" onClick="emojiShow()">😉</button>
        <button type="button" onClick="emojiShow()">😘</button>
        <button type="button" onClick="emojiShow()">🙁</button>
      </div>
    );
  }
}

export default ChatWindow;
