import './index.css';
import React from 'react';
import {Link, Outlet} from "react-router-dom"
import Thumbnail from '../Thumbnail';

 
const Grid = (props) =>{
    return (
        <div className="flex-grid">
            <div className='col'>
                <Thumbnail/>
            </div>
        </div>
    )
}

export default Grid;