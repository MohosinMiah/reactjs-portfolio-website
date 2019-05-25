import React, { Component } from 'react';
import {
  Player,
  BigPlayButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css

export default class Header extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
 
     <div>
     
        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster="data:image/jpeg;base64,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">
       
        <BigPlayButton position="center" />
        
      </Player>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
     </div>
    );
  }
}

