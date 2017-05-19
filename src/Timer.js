import React, { Component } from 'react'
import moment from 'moment'

export default class Timer extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {time} = this.props 
    return (
      <span>{moment(time, 'x').fromNow()}</span>
    )
  }
}
