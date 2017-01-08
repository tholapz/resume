import React, { Component } from 'react';
import './reset.css';
import './bootstrap.css';
import './App.css';
import vase from './images/vase.png';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Kamol Treewatchararat</h1>
        <a href="http://tholapz.com/resume.pdf">
            <span className="glyphicon glyphicon-download"/><span> Download a copy of my resume</span>
        </a>
        <h2>Introduction</h2>         
        <p>My name is Kamol. This is my online portfolio. I'm a software engineer from Thailand. I'm currently working at a startup company called Vixlet.</p>
        <p>I help create several web applications which are used by hundreds of thousands of users world wide. I graduated from University of Southern California in 2013 with the Master's degree in Computer Science. In my spare time, I attend hackathon events in either LA or Bay Area. Apart from that, I read about Startup and History. My current book is Cracking the Coding Interview by Gayle Laakmann McDowell.</p>
        <p>Check out <a href="https://github.com/tholapz/resume/blob/gh-pages/reading.md">my reading list here</a>.</p>
        <p>I blog on Medium. Check out <a href="https://medium.com/@kamol" target="blank">my articles here</a></p>
        <p>For technical inquiry, <a href="mailto:tholapz@gmail.com">Send me an email</a></p>
        <p>Check out <a href="https://github.com/tholapz" target="blank">my Github profile</a></p>
        <h2>Recommendations</h2>
        <blockquote>
          <p>Kamol and I worked together for several months on a small team of web app developers, and I can honestly say that it was a great pleasure to work with him. His sense of humor, energetic personality, and depth of knowledge make him a great addition to any team. He's a very knowledgeable and eager developer with an unmatched enthusiasm and drive for learning, an invaluable trait in the fast-moving web development industry. He and I often bounced ideas off of one another, and his broad understanding of web technologies gave him invaluable insight for solving bugs and architecting applications. Kamol is the kind of guy who you would want on your team at a hackathon - he's quick to pick up on complex ideas, and even quicker to offer his own improvements and contributions.</p>
        </blockquote>
        <p style={{textAlign:'right'}}>James Lin - Front-end Lead Developer at Telescope.tv</p>
        <h2>Projects</h2>
        <ul className="projects">
          <li>
            <h3><a href="https://github.com/tholapz/leappottery">Leap Pottery</a></h3>
            <p>a simple modeling tool written in JavaScript</p>
          </li>
        </ul>
        <div>
          <p>This project was bootstrapped with <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
