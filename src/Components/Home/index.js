import React from 'react';
import './index.css'
import {Link} from "react-router-dom"
import Space from '../../assets/SpaceFrame.gif'

const Home = () => {
    return (
      <div className='container'> 
          <img className="headImage" id="frameImage"src={Space} alt="SpaceFrame.gif"/>
      </div>
    ) 
}
 
export default Home;