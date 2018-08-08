import React, { Component } from 'react';
import introductionTxt from './introduction.txt';

import './bootstrap/css/bootstrap.min.css';
import './App.css';

const Container = ({children}) => (<div className="container">{children}</div>);
const Header = ({children}) => (<div className="row header clearfix">{children}</div>);
const Jumbotron = ({children}) => (<div className="row jumbotron">{children}</div>);
const ButtonSuccess = ({children, ...props}) => (<a className="btn btn-lg btn-success" role="button" {...props}>{children}</a>);
class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h3 className="text-muted">Kamol Treewatchararat</h3>
        </Header>
        <Jumbotron>
          <p>Senior Software Engineer from Thailand. Specialized in UI Development (ReactJS). Currently working at <a href="https://www.apple.com/">Apple</a>.</p>
          <p><ButtonSuccess href="//tholapz.com/resume.pdf">Download My Resume</ButtonSuccess></p>
        </Jumbotron>
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
          <p>{ introductionTxt }</p>
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
      </Container>
    );
  }
}

export default App;
