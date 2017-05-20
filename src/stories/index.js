import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';



// Add this code to "src/stories/index.js"

import '../index.css';
import App from '../App';

storiesOf('App', module)
  .add('default view', () => (
    <App />
  ))
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>😀</Button>
  ))
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>😉</Button>
  ))
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>😥</Button>
  ))
storiesOf('Button', module)  
  .add('with text', () => (
    <Button onClick={action('clicked')}>👍</Button>
  ))
