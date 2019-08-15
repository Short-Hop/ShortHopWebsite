import React, { useState, useEffect } from 'react';


function PortfolioItem(props) {
    let data = props.info;
    
    return(
        <div className="portfolio">
            <img src={props.info.image} onClick={() => props.handleClick(props.info)}/>
            {/* <h2>{props.title}</h2> */}
        </div>
    )
}

export default PortfolioItem;