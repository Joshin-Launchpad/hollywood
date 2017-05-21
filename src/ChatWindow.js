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

  // var inputBox = document.getElementById("inputBox");
  // let guessButton = document.getElementById("guess-button");
  // guessButton.addEventListener('click', function () {
  // let guessInput = document.getElementById("letter-box").value;
  // tallyLetter(guessInput);
  // tallyTurn();
  // if (typeof guessInput !== "string" || guessInput.length != 1) {
  //   blankOutput.innerHTML = userMessage.entry;
  //   return false;
  // }

//++++++++++++
//   showEmoji () {
//   var inputBox = document.getElementById("inputBox");
//   console.log('inputBox', inputBox);
//   var emojiButtons = document.querySelectorAll("Button[className='emoji']");
//   console.log('emojiButtons', emojiButtons);
//   for (let item of emojiButtons) {
//     console.log('item', item);
//     item.addEventListener("click", function () {
//     inputBox.innerHTML = item.value;
//     });
//   }
// }
//+++++++++++



// {ReactEmoji.emojify(*hello :)*)}
// <button className=onClick={action('clicked')}>😀</button>

  render() {
    const { items, textInput } = this.state;
    return (
      <div className="chat-container">
        <h2>How do you Celebrate life?</h2>
        <p>Chat with us about it.</p>
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
          <input id="inputBox" onChange={this.handleChange} value={textInput} />
          <br />
          <br />
          <button>Send</button>
        </form>
        <br />
        <button type="button" onClick="emojiShow()">😀</button>
        <button type="button" onClick="emojiShow()">😉</button>
        <button type="button" onClick="emojiShow()">😘</button>
        <button type="button" onClick="emojiShow()">🙁</button>
      </div>
    );
  }
}

export default ChatWindow;
