import React from 'react'
import IconButton from '../Button'
import SearchBox from '../Searchbox'

const Index = (props) => {
    const {handleAllUser,handleMaleUser, handleFemaleUser} = props
    return (
        <div id="text-wrapper">
            <h2 id="hello">Hello, <span id="my-name">Emerald</span></h2>
            <p id="welcome">Welcome to your dashboard, kindly sort through the user base</p>
            <SearchBox className="searchInput" placeholder="Find a user" />
            <p id="users">Show Users</p>
            <div id="icon-group">
                <div>
                    <IconButton className="icon one" 
                    text={<i className="fa fa-users resize-gender-icon" aria-hidden="true"></i>}
                    onClick={handleAllUser}
                    />
                    <p>All Users</p>
                </div>
                <div>
                    <IconButton className="icon two" 
                    text={<i className="fa fa-male resize-gender-icon" aria-hidden="true"></i>}
                    onClick={handleMaleUser}
                    />
                    <p>Male Users</p>
                </div>
                <div>
                    <IconButton className="icon three" 
                    text={<i className="fa fa-female resize-gender-icon" aria-hidden="true"></i>}
                    onClick={handleFemaleUser}
                    />
                    <p>Female Users</p>
                </div>
            </div>
        </div>
    )
}

export default Index;