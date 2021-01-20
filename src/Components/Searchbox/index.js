import React from 'react';

const Index = ({className, placeholder, handleChange, handleEnter, value}) => {
    return (
        <input type="search" 
        className={className}
        placeholder={placeholder} 
        onChange={handleChange}
        onKeyPress={handleEnter}
        value={value}
        /> 
    )
}

export default Index;