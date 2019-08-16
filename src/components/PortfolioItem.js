import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function PortfolioItem(props) {
    let data = props.info;
    
    return(
        <div className="portfolio">
            <Link to={"/projects/" + props.info.id} >
                <img src={props.info.image} />
            </Link>
            
            {/* <h2>{props.title}</h2> */}
        </div>
    )
}

export default PortfolioItem;