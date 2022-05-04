import './index.css';
import React from 'react'; 
import {Link, NavLink} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';

 
const HeaderBar = () =>{
    return (
      <div>
        <Link to="/" id="header">Anaiah Diop</Link>
        <nav>
          <div className="navbar">
            <NavLink exact ="true" activeclassname="active" to="/portfolio" className="portfolio-link">Portfolio</NavLink>
            <NavLink exact ="true" activeclassname="active" to="/about" class="about-link">About</NavLink>   
          </div> 
          <div className='links'>
              <a className="outsideLink" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/anaiah-diop-393646a6/'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              <a className="outsideLink" target="_blank" rel='noreferrer' href='https://github.com/anaiahdiop'> <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></a>  
              <a className="outsideLink" target="_blank" rel='noreferrer' href='https://anaiahdiop.itch.io/'> <FontAwesomeIcon icon={faItchIo} ></FontAwesomeIcon></a>          
            </div>
            
          
        </nav>
      </div>
    )
}

export default HeaderBar;