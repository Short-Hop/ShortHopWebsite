import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import icon from "../assets/icon.png";
import BlueHero from "../assets/Hero Blue.png"
import OrangeHero from "../assets/Hero Orange.png"
import Developer from "./Developer"
import ContentCreator from "./ContentCreator"
import Nav from "./Nav"





function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero__images">
            
            <div className="hero__images--orange">
                <a href="#vid">
                  <h1>Content<br/>Creator</h1>
                </a>
            </div>
            
            <div className="hero__images--blue">
                <a href="#dev">
                  <h1>Web<br/>Developer</h1>
                </a>   
            </div> 
            
        </div>
      </div>

      <Nav/>


      <div className="body">
        <div id="dev">
          <Developer/>
        </div>
        <div id="vid">
          <ContentCreator/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;