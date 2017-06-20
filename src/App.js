import React, { Component } from 'react';

import './bootstrap/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row header clearfix">
          <h3 className="text-muted">Kamol Treewatchararat</h3>
        </div>
        <div className="row jumbotron">
          <p className="lead">My name is Kamol. I'm a software engineer from Thailand. I'm currently working at a startup company called Vixlet.</p>
          <p><a className="btn btn-lg btn-success" href="http://tholapz.com/resume.pdf" role="button">Download My Resume</a></p>
        </div>
        <div className="row">
          <ul>
            <li>Check out <a href="https://github.com/tholapz/resume/blob/gh-pages/reading.md">my reading list here</a>.</li>
        
            <li>I blog on Medium. Check out <a href="https://medium.com/@kamol" target="blank">my articles here</a></li>
            
            <li>For technical inquiry, <a href="mailto:tholapz@gmail.com">Send me an email</a></li>
            
            <li>Check out <a href="https://github.com/tholapz" target="blank">my Github profile</a></li>
          </ul>
        </div>
        <div className="row">
          <h3>Introduction</h3>
          <p>I help create several web applications which are used by hundreds of thousands of users world wide. I graduated from University of Southern California in 2013 with the Master's degree in Computer Science. In my spare time, I attend hackathon events in either LA or Bay Area. Apart from that, I read about Startup and History. My current book is Cracking the Coding Interview by Gayle Laakmann McDowell.</p>
        </div>
        <div className="row">
          <h3>Recommendations</h3>
          <blockquote>
            <p>Kamol and I worked together for several months on a small team of web app developers, and I can honestly say that it was a great pleasure to work with him. His sense of humor, energetic personality, and depth of knowledge make him a great addition to any team. He's a very knowledgeable and eager developer with an unmatched enthusiasm and drive for learning, an invaluable trait in the fast-moving web development industry. He and I often bounced ideas off of one another, and his broad understanding of web technologies gave him invaluable insight for solving bugs and architecting applications. Kamol is the kind of guy who you would want on your team at a hackathon - he's quick to pick up on complex ideas, and even quicker to offer his own improvements and contributions.</p>
          </blockquote>
          <p className="author"><a href="https://www.linkedin.com/in/james-lin-1120113">James Lin - Front-end Lead Developer at Telescope.tv</a></p>
        </div>
        <div>
          <h3>Projects</h3>
          <ul className="projects">
            <li>
              <h3><a href="https://github.com/tholapz/leappottery">Leap Pottery</a></h3>
              <p>a simple modeling tool written in JavaScript</p>
            </li>
          </ul>
        </div>
        <footer className="footer">
          <p>This project was bootstrapped with <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
