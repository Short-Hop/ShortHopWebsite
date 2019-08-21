import React, { useState, useEffect } from 'react';
import html from "../assets/Html Symbol.svg"
import vid from "../assets/baseline_videocam_white_48dp.png"
import git from "../assets/GitHub-Mark-Light-64px.png"
import YouTube from "../assets/yt_icon_mono_dark.png"
import LinkedIn from "../assets/LI-In-Bug.png"

function Nav(props) {
    let data = props.info;
    
    return(
        <div className="nav">
            <a href="#dev">
                <img src={html} />
            </a>
            <a href="#vid">
                <img src={vid} />
            </a>
            <a href="https://github.com/Short-Hop">
                <img src={git}/>
            </a>
            <a href="https://www.youtube.com/c/ShortHopYT">
                <img src={YouTube}/>
            </a>
            
            <img src={LinkedIn}/>
            
            
            {/* <h2>{props.title}</h2> */}
        </div>
    )
}

export default Nav;