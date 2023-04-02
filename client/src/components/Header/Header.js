import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="" alt="high tides logo" />
            <h1>High Tides</h1>
            <div className="location">
                <p>for <span id="location-title">Location, Title</span></p>
            </div>
        </header>
    );
}


export default Header;