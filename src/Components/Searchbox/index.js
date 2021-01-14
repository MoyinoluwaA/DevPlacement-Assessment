import React from 'react';

const Index = ({placeholder, handleChange}) => {
    return (
        <div className="searchBox">
            <input type="search" 
            className="searchInput"
            placeholder={placeholder} 
            onChange={handleChange}
            
            /> 
            <i class="fa fa-search" aria-hidden="true"></i>       
        </div>
    )
}

export default Index;