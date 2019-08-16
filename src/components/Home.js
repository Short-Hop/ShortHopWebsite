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
            <a href="#vid">
                <div className="hero__images--orange"></div>
            </a>
            <a href="#dev">
               <div className="hero__images--blue"></div> 
            </a>
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