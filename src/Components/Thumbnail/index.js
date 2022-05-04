import './index.css';
import React from 'react';
import {Link, Outlet} from "react-router-dom"

 
const Thumbnail = (props) =>{
    return (
        <div className="thumbnail">
            <Link to={props.link}>
            <div className="thumbnail-image">
                <img src={props.image} alt="Project Image"/>
            </div>
            <div className="thumbnail-title">{props.title}</div>
            <div className="thumbnail-category">{props.category}</div>
            </Link>
      </div>
    )
}

export default Thumbnail;