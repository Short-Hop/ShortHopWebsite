import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import LukeTherapy from "../assets/luke therapy thumbnail.jpg"
import Escape from "../assets/Escape the School Thumbnail.jpg"
import Trailer from "../assets/trailer thumbnail.jpg"


function ContentCreator() {
    return(
        <div className="creator">
            {/* <img src={devBackground}/> */}
            <div className="creator__item--container">
                <PortfolioItem image={LukeTherapy} title={"PhotoSprite"}></PortfolioItem>
                <PortfolioItem image={Trailer} title={"PhotoSprite"}></PortfolioItem>
                <PortfolioItem image={Escape} title={"PhotoSprite"}></PortfolioItem>
            </div>
        </div>
    )
}

export default ContentCreator;