import './index.css';
import React from 'react';
import {Link, Outlet} from "react-router-dom"
import HeaderBar from '../HeaderBar';
 
const Layout = () =>{
    return (
      <div className='App'>
        <HeaderBar/>
        <div className='page'>
          <Outlet />
      
        </div>
      </div> 
    )
}

export default Layout;