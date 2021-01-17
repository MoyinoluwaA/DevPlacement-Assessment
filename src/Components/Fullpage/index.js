import React from 'react';
import {NavLink} from 'react-router-dom'
import IconButton from '../Button'
import SearchBox from '../Searchbox'


const Index = () => {
    return (
        <div id="left">
            <div id="text-wrapper">
                <h2 id="hello">Hello, <span id="my-name">Emerald</span></h2>
                <p id="welcome">Welcome to your dashboard, kindly sort through the user base</p>
                <SearchBox className="searchInput" placeholder="Find a user" />
                <p id="users">Show Users</p>
                <div id="icon-group">
                    <div>
                        <NavLink to="/">
                            <IconButton className="icon one" text={<i className="fa fa-users resize-gender-icon" aria-hidden="true"></i>}/>
                        </NavLink>
                        <p>All Users</p>
                    </div>
                    <div>
                        <NavLink to="/male">
                            <IconButton className="icon two" text={<i className="fa fa-male resize-gender-icon" aria-hidden="true"></i>}/>
                        </NavLink>
                        <p>Male Users</p>
                    </div>
                    <div>
                        <NavLink to="/female">
                            <IconButton className="icon three" text={<i className="fa fa-female resize-gender-icon" aria-hidden="true"></i>}/>
                        </NavLink>
                        <p>Female Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;