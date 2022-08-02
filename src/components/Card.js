import React from "react";
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="card">
            {props.item.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img src={props.item.image} className="card-image"/>
            <div className="card-stats">
                <img src={star} className="card-star"/>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviews}) • </span>
                <span className="grey">{props.item.country}</span>
            </div>
            <p>Trips to {props.item.location}</p>
            <p>From ${props.item.price} / person</p>
        </div>
    )
}