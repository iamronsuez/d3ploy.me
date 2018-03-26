import React, { Component } from 'react';
import classnames from 'classnames';
import BaseComponent from './BaseComponent';

export default class Hero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, title, subtitle } = this.props;
    return (
      <div className="App-intro">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
      </div> 
    )
  }
}