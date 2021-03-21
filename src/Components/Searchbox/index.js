import React from 'react';

const Index = ({className, placeholder, handleChange, onSubmit, value}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="search" 
            className={className}
            placeholder={placeholder} 
            onChange={handleChange}
            // onKeyPress={handleChange}
            value={value}
            /> 
        </form>
    )
}

export default Index;