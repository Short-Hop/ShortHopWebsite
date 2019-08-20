import React, { useState, useEffect } from 'react';
import html from "../assets/Html Symbol.svg"
import vid from "../assets/baseline_videocam_white_48dp.png"
import git from "../assets/GitHub-Mark-Light-64px.png"

function Nav(props) {
    let data = props.info;
    
    return(
        <div className="nav">
            <img src={html}/>
            <img src={vid}/>
            
            {/* <h2>{props.title}</h2> */}
        </div>
    )
}

export default Nav;