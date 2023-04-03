import { useState } from 'react';
import './Search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className="search">
            <h1>Search Component</h1>
            <div className="search-form-container">
                <form action="" className="search-form">
                    <label htmlFor="search">Enter Search Location</label>
                    <input id="search" type="text" placeholder="Enter Search Location" />
                </form>
            </div>
        </header>
    );
}


export default Search;