import { useState } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';

function Display({tides}) {
    // Seperate AM and PM data
    const amData = tides.filter(data => data.t.split(' ')[1] < '12:00');
    const pmData = tides.filter(data => data.t.split(' ')[1] >= '12:00');

    return (
        <div className="main-content" alt="beach background">
            <h1>When is High Tide Today?</h1>
            <Search />
            { amData ? 
            (
                <Card title='AM' data={amData}/>
            ) : '' }

            {pmData ? 
            (
                <Card title='PM' data={pmData}/>
            ): '' }
        </div>
    )
}


export default Display;