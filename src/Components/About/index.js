import React, {Component} from 'react';
import './index.css';
// import {withRouter} from 'react-router';
import {Link} from "react-router-dom"
 
class About extends Component{
  render(){
    return (
      <div className="about">
        <div className="first">Hi I am a web engineer and digital based artist</div>
        <div className="second">
          I am interested in creative tech, and specifically bridging the intersection between technology and art. 
          I often like darker creepy things and that bleeds into my work but thats not all I do!
        </div>

        <div className="contact">Contact me!</div>
        <div className="contact">Email: anaiahdiop@yahoo.com</div>
      </div>
    )
  }
}
 
export default (About);