import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="http://tholapz.com/resume.pdf">
          <span className="glyphicon glyphicon-download"></span> Download a PDF copy
        </a>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
