import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import photospriteImage from "../assets/photosprite thumbnail.png"
import ShortHopImage from "../assets/Shorthop thumbnial.png"
import devBackground from "../assets/Shorthop website web developer.png"

function Developer() {
    return(
        <div className="developer">
            {/* <img src={devBackground}/> */}
            <div className="developer__item--container">
                <PortfolioItem image={ShortHopImage} title={"PhotoSprite"}></PortfolioItem>
                <PortfolioItem image={photospriteImage} title={"PhotoSprite"}></PortfolioItem>
            </div>
        </div>
    )
}

export default Developer;