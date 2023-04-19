import { useState } from 'react';
import './Search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // logic to submit search request to API request

        setSearchTerm('');
    }

    return (
        <header className="search">
            <h1>Search Component</h1>
            <div className="search-form-container">
                <form onSubmit={handleSubmit} className="search-form">
                    <label htmlFor="search">Enter Search Location</label>
                    <input id="search" type="text" placeholder="Enter Search Location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button id="search-btn" type="submit">Search</button>
                </form>
            </div>
        </header>
    );
}


export default Search;