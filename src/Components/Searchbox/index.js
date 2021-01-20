import React from 'react';

const Index = ({className, placeholder, handleChange}) => {
    return (
        <input type="search" 
        className={className}
        placeholder={placeholder} 
        onChange={handleChange}
        /> 
    )
}

export default Index;