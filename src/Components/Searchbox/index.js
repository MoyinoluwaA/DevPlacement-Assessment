import React from 'react';

const Index = ({className, placeholder, handleChange}) => {
    return (
        <div className="search">
            <input type="search" 
            className={className}
            placeholder={placeholder} 
            onChange={handleChange}
            
            /> 
            <i class="fa fa-search" aria-hidden="true"></i>       
        </div>
    )
}

export default Index;