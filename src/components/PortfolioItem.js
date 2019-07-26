import React, { useState, useEffect } from 'react';

function PortfolioItem(props) {
    return(
        <div className="portfolio">
            <img src={props.image}/>
            {/* <h2>{props.title}</h2> */}
        </div>
    )
}

export default PortfolioItem;