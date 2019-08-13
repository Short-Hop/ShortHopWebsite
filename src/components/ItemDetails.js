import React, { useState, useEffect } from 'react';
import ShortHopImage from "../assets/Shorthop thumbnial.png"

let item = {
    name: "",
    date: "",
    description: "",
}

function ItemDetails() {
    return (
        <div className="details">
            <a>
                <img src={ShortHopImage}/>
                <h1>ShortHop.ca</h1>
            </a>
            
            <h3>August 2019</h3>
            <p>
                My personal portfolio website, made to showcase and link to my web development and video production work.  You're already here.  Have fun!
            </p>

        </div>
    )
}

export default ItemDetails
