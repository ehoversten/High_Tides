import { useState } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';

function Display() {
    return (
        <div className="main-content" alt="beach background">
            <h1>When is High Tide Today?</h1>
            <Search />
            <Card title='AM'/>
            <Card title='PM'/>
        </div>
    )
}


export default Display;