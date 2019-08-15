import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import LukeTherapy from "../assets/luke therapy thumbnail.jpg"
import Escape from "../assets/Escape the School Thumbnail.jpg"
import Trailer from "../assets/trailer thumbnail.jpg"

let vidData = [
    {
        name: "Luke Therapy",
        date: "March 2019",
        description1: "A video I wrote, planned, shot, and edited over the span of six months.  This video features heavy use of visual effects, including a cloning effect that is used throughout the video, as well as various fire and electricity effects used in the final fight scene.",
        description2: "I edited this entire video in Adobe After Effects and Adobe Premiere Pro.",
        description3: "",
        image: LukeTherapy,
    },
    {
        name: "North Battlefield Trailer",
        date: "Jan 2019",
        description1: "A trailer I made to advertise a local Esports group that I co-run.  The style of the introductions is based off of the character annoucement trailers for Super Smash Bros. Ultimate.",
        description2: "North Battlefield is a Esports group a friend and I started based out of Saskatchewan Canada.  We organize paid tournament events and a weekly Esports club.",
        description3: "",
        image: Trailer,
    },
    {
        name: "Escape the School",
        date: "June 2017",
        description1: "The largest video project I've made to date.  Escape the School is a 'choose your own adventure' style video series.  It features three main branching paths, and five endings.",
        description2: "I wrote, planned, shot, and edited this series over the course of two years.  I edited it in Adobe After Effects and Adobe Premiere Pro.",
        description3: "",
        image: Escape,
    }
]

function ContentCreator() {
    return(
        <div className="creator">
            {/* <img src={devBackground}/> */}
            <div className="creator__item--container">
                {vidData.map((item, index) => 
                    <PortfolioItem data={item} key={index}></PortfolioItem>
                )}
                
            </div>
        </div>
    )
}

export default ContentCreator;