import React from 'react';
import './index.css';
import {Link} from "react-router-dom"
import Thumbnail from '../Thumbnail';
import Poster from '../../assets/Poster.png'
import Logo from '../../assets/SquidLogo.png'
import Comps from '../../assets/comps.png'
import Visualization from '../../assets/Visualization.png'

const Portfolio = () =>{
    return (
      <div>
        <div className="grid">
          <Thumbnail className="thumbnail"
            link=""
            image={Poster}
            title="Movie Poster"
            category="Design"
          />

          <Thumbnail className="thumbnail"
            link=""
            image={Logo}
            title="Logo"
            category="Design"
          />
          <Thumbnail className="thumbnail"
            link=""
            image={Comps}
            title="Senior Project: Interactive Webcomic"
            category="interactive"
          />
          <Thumbnail className="thumbnail"
            link=""
            image={Visualization}
            title="Music Visualization"
            category="Animation"
          />
        </div>
      </div>
    )
}
 
export default Portfolio;