import React, { useState, useEffect } from 'react';
import ShortHopImage from "../assets/Shorthop thumbnial.png"
import photospriteImage from "../assets/photosprite thumbnail.png"
import LukeTherapy from "../assets/luke therapy thumbnail.jpg"
import Escape from "../assets/Escape the School Thumbnail.jpg"
import Trailer from "../assets/trailer thumbnail.jpg"
import backArrow from "../assets/baseline_arrow_back_ios_white_24dp.png"
import { Link } from "react-router-dom";

let data = [{
  name: "ShortHop.ca",
  date: "August 2019",
  description1: "My personal portfolio website, made to showcase and link to my web development and video production work.  You're already here.  Have fun!",
  description2: "This site is built with a React.js front end and deployed using Firebase.",
  description3: "",
  image: ShortHopImage,
  id: 0,
},
{
  name: "PhotoSprite",
  date: "June 2019",
  description1: "A web application I made for converting images into pixel art using a user-defined color palette.  You can log in with your Google account in order to save pixel art conversions and palettes.",
  description2: "This site was built with a React.js front end, and a Node.js back end, which handles image conversion.  The user's login session is handled using JWT authentication.  It was deployed using AWS's Elastic Beanstalk",
  description3: "",
  image: photospriteImage,
  url: "http://photosprite.us-east-2.elasticbeanstalk.com",
  id: 1,

  
},
{
    name: "Luke Therapy",
    date: "March 2019",
    description1: "A video I wrote, planned, shot, and edited over the span of six months.  This video features heavy use of visual effects, including a cloning effect that is used throughout the video, as well as various fire and electricity effects used in the final fight scene.",
    description2: "I edited this entire video in Adobe After Effects and Adobe Premiere Pro.",
    description3: "",
    image: LukeTherapy,
    url: "https://www.youtube.com/watch?v=HTNyXaXzrF0",
    id: 2,
},
{
    name: "North Battlefield Trailer",
    date: "Jan 2019",
    description1: "A trailer I made to advertise a local Esports group that I co-run.  The style of the introductions is based off of the character annoucement trailers for Super Smash Bros. Ultimate.",
    description2: "North Battlefield is a Esports group a friend and I started based out of Saskatchewan Canada.  We organize paid tournament events and a weekly Esports club.",
    description3: "",
    image: Trailer,
    url: "https://www.youtube.com/watch?v=8MH997vVBsc",
    id: 3,
},
{
    name: "Escape the School",
    date: "June 2017",
    description1: "The largest video project I've made to date.  Escape the School is a 'choose your own adventure' style video series.  It features three main branching paths, and five endings.",
    description2: "I wrote, planned, shot, and edited this series over the course of two years.  I edited it in Adobe After Effects and Adobe Premiere Pro.",
    description3: "",
    image: Escape,
    url: "https://www.youtube.com/watch?v=0ez8EjlJm7k",
    id: 4,
}]


function ItemDetails(props) {

    console.log(props.match.params.id)

    let info = data[props.match.params.id]

    
    return (
        <div className="details">
            <Link className="link" to="/">
                <img className="details__back" src={backArrow}/>
            </Link>
            
            <a href={info.url}>
                <img src={info.image}/>
                <h1>{info.name}</h1>
            </a>
            
            <h3>{info.date}</h3>
            <p>
                {info.description1}
            </p>
            <p>
                {info.description2}
            </p>

        </div>
    )
}

export default ItemDetails
