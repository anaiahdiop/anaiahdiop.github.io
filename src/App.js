import React from "react";
import {Route,Routes, Link} from 'react-router-dom'; 
import './App.css';
import Portfolio from './Components/Portfolio/index.js'; 
import Home from './Components/Home/index.js'; 
import About from './Components/About/index.js'; 
import Layout from './Components/Layout/index'

function App() {
  return(
    <>
        <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        </Routes>
           
    </>
  );
}

export default App; 
