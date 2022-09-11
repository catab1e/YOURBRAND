import React from 'react';
import "../styles/search.css"

const SearchFilterBar = () => {
    return (
        <div className='search--filter--panel'>
            <div className='search--filter--panel__inner'>
                <div className='buttons'>
                    <button>START</button>
                    <button>START</button>
                    <button>START</button>
                    <button>START</button>
                </div>
                <div className='input-box'>
                    <input type="text" required="requaired"/>
                    <span>Search</span>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterBar;