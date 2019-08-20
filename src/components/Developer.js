import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import photospriteImage from "../assets/photosprite thumbnail.png"
import ShortHopImage from "../assets/Shorthop thumbnial.png"
import devBackground from "../assets/Shorthop website web developer.png"
import ItemDetails from "./ItemDetails"

let devData = [{
    name: "ShortHop.ca",
    date: "August 2019",
    description1: "My personal portfolio website, made to showcase and link to my web development and video production work.  You're already here.  Have fun!",
    description2: "This site is built with a React.js front end and deployed using Firebase.",
    description3: "",
    image: ShortHopImage,
    url: "",
    id: 0
},
{
    name: "PhotoSprite",
    date: "June 2019",
    description1: "A web application I made for converting images into pixel art using a user-defined color palette.  You can log in with your Google account in order to save pixel art conversions and palettes.",
    description2: "This site was built with a React.js front end, and a Node.js back end, which handles image conversion.  The user's login session is handled using JWT authentication.  It was deployed using AWS's Elastic Beanstalk",
    description3: "",
    image: photospriteImage,
    url: "http://photosprite.us-east-2.elasticbeanstalk.com",
    id: 1
}]

function Developer() {

    return(
        <div className="developer">

            {/* <h1>Web Development Projects</h1> */}
            <div className="developer__item--container">
                {devData.map((item, index) => 
                    <PortfolioItem info={item} key={index} ></PortfolioItem>
                )}  
            </div>
        </div>
    )
}

export default Developer;