import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import icon from "../assets/icon.png";
import BlueHero from "../assets/Hero Blue.png"
import OrangeHero from "../assets/Hero Orange.png"
import Developer from "./Developer"
import ContentCreator from "./ContentCreator"





function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero__images">
            
            <div className="hero__images--orange">
                <a href="#vid"></a>
            </div>
            
            <div className="hero__images--blue">
                <a href="#dev"></a>   
            </div> 
            
        </div>
      </div>

      <div id="dev">
          <Developer/>
      </div>
      <div id="vid">
          <ContentCreator/>
      </div>
    </div>
  );
}

export default Home;