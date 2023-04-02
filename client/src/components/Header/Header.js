import { useState } from 'react';
import './Header.css';

function Header() {
    const [location, setLocation] = useState('Location, Title');

    return (
        <header className="header">
            <img src="" alt="high tides logo" />
            <h1>High Tides</h1>
            <div className="location">
                <p>for <span id="location-title">{location}</span></p>
            </div>
        </header>
    );
}


export default Header;