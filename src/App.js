import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import vase from './images/vase.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Kamol Treewatchararat</h1>
        <div className="App-intro">          
          <p>My name is Kamol. This is my online portfolio.</p>
          <p>I'm a software engineer from Thailand. I'm currently working at a startup company called Vixlet. I create a revolutionary web application and proprietary widget system.</p>
          <p>I graduated from University of Southern California in 2013 with the Master's degree in Computer Science.</p>
          <p>In my spare time, I attend hackathon events in either LA or Bay Area. Apart from that, I read about Startup and History. My current book is Cracking the Coding Interview by Gayle Laakmann McDowell</p>
          <p>Check out <a href="https://github.com/tholapz/resume/blob/gh-pages/reading.md">my reading list here</a>.</p>
        </div>
        <p><a href="http://tholapz.com/resume.pdf">
          <span className="glyphicon glyphicon-download"></span> Download a copy of my resume
        </a></p>
        <div>
          <h2>Leap Pottery</h2>
          <a href="https://github.com/tholapz/leappottery"><img src={vase} alt="leap-pottery"/></a>
        </div>
        <div className="App-footer">
          <p>This project was bootstrapped with <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
