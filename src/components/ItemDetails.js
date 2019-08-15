import React, { useState, useEffect } from 'react';
import ShortHopImage from "../assets/Shorthop thumbnial.png"






function ItemDetails(props) {

    
    return (
        <div className="details">
            <a>
                <img src={props.info.image}/>
                <h1>{props.info.name}</h1>
            </a>
            
            <h3>{props.info.date}</h3>
            <p>
                {props.info.description1}
            </p>
            <p>
                {props.info.description2}
            </p>

        </div>
    )
}

export default ItemDetails
