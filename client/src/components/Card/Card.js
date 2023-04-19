import React from "react";
import './Card.css';

function Card() {

    return (
        <div className="card-container">
            <h1 id="card-title">AM</h1>
            <div className="data-container">
                <h2>High: <span data-am="high"></span></h2>
                <h2>Meters: <span data-am="height-high"></span></h2>
                <h2>Low: <span data-am="low"></span></h2>
                <h2>Meters: <span data-am="height-low"></span></h2>
            </div>
        </div>
    )
}

export default Card;
