import React from 'react'
import IconButton from '../Button'
import SearchBox from '../Searchbox'

const Index = (props) => {
    const {handleAllUser,handleMaleUser, handleFemaleUser, handleSearch, onSearchUser, value} = props
    return (
        <div id="text-wrapper">
            <h2 id="hello">Hello, <span id="my-name">Emerald</span></h2>
            <p id="welcome">Welcome to your dashboard, kindly sort through the user base</p>
            <div className="left-search">
                <SearchBox 
                className="searchInput" 
                placeholder="Find a user" 
                handleChange={handleSearch} 
                onSubmit={onSearchUser} 
                value={value}
                />
                <i className="fa fa-search left-search-icon" aria-hidden="true"></i>       
            </div>
            <p id="users">Show Users</p>
            <div id="icon-group">
                <div className="icon-spacing">
                    <IconButton className="icon one" 
                    text={<i className="fa fa-users resize-gender-icon" aria-hidden="true"></i>}
                    onClick={handleAllUser}
                    />
                    <p className="icon-text">All Users</p>
                </div>
                <div className="icon-spacing">
                    <IconButton className="icon two" 
                    text={<i className="fa fa-male resize-gender-icon" aria-hidden="true"></i>}
                    onClick={handleMaleUser}
                    />
                    <p className="icon-text">Male Users</p>
                </div>
                <div className="icon-spacing">
                    <IconButton className="icon three" 
                    text={<i className="fa fa-female resize-gender-icon" aria-hidden="true"></i>}
                    onClick={handleFemaleUser}
                    />
                    <p className="icon-text">Female Users</p>
                </div>
            </div>
        </div>
    )
}

export default Index;