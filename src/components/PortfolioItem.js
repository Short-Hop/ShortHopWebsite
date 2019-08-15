import React, { useState, useEffect } from 'react';

function PortfolioItem(props) {
    const [details, setdetails] = useState(<div></div>)


    return(
        <div className="portfolio">
            <img src={props.data.image}/>
            {/* <h2>{props.title}</h2> */}
        </div>
    )
}

export default PortfolioItem;