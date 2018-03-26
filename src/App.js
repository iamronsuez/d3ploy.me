import React, { Component } from 'react';
import BaseComponent from './components/BaseComponent';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    console.log(this.props.sitemap);
    const { sitemap } = this.props;
    return (
      <div className="App">
      { sitemap.pages.map((item) => <BaseComponent {...item} />) }
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
