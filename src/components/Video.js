import React, { Component } from 'react';
import classnames from 'classnames';

export default class Video extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, title, src } = this.props;
    return (
      <div className="App-intro">
        <video src={src} loop />
      </div> 
    )
  }
}