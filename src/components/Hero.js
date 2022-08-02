import React from "react";
import photogrid from "../images/photogrid.jpg"

export default function Hero(){
    return(
        <div className="Hero">
            <img src={photogrid} alt="photo grid" className="heroimage"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </div>
    )
}