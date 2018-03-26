import React, { Component } from 'react';
import BaseComponent from './BaseComponent';
import classnames from 'classnames';

export default class HeaderDefault extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, logo, title, subtitle } = this.props;
    return (
      <header className="App-header">
        <img src={require(`../${logo}`)} className="App-logo" alt="logo" />
        <h1 className="App-title">{title}</h1>
        <p className="App-subtitle">{subtitle}</p>
      </header>
    )
  }
}