import React from "react";
import airbnb from "../images/airbnb.png"

export default function NavBar(){
    return(
        <div className="navbar">
        <ul className="nav">
            <li><img src={airbnb} alt="airbnb logo"/></li>
        </ul>
        </div>
    )
}