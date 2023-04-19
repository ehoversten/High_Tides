import React from "react";
import './Card.css';

function Card({ title, data }) {

    let temp = data.map(item => console.log(item));

    // const lowTime = data.filter(item => item.t.split(' ')[1] < '06:00');
    // const highTime = data.filter(item => item.t.split(' ')[1] >= '06:00');
    // const lowHeight = data.filter(item => item.v < 0);
    // const highHeight = data.filter(item => item.v > 0);

    // const lowTime = data ? data[0]['t'].split(' ')[1] : '';
    // const highTime = data ? data[1]['t'].split(' ')[1] : '';
    // const lowHeight = data ? data[0].v : '';
    // const highHeight = data ? data[1].v : '';

    return (
        <div className="card-container">
            <h1 id="card-title">{title}</h1>
            <div className="data-container">
                <h2>Low: <span data-am="low">{data[0].t.split(' ')[1]}</span></h2>
                <h2>Meters: <span data-am="height-low">{data[0].v}</span></h2>
                <h2>High: <span data-am="high">{data[1].t.split(' ')[1]}</span></h2>
                <h2>Meters: <span data-am="height-high">{data[1].v}</span></h2>
            </div>
        </div>
    )
}

export default Card;
