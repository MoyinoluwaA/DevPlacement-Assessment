import React from 'react'
import RightUpperSection from '../../Components/Right-upper-section'
import UserDetails from '../UserFullInfo' 

const Index = ()=> {
    return (
        <div id="container">
                <h2 className="user-title">User List</h2>
                <RightUpperSection />
                <UserDetails />
        </div>
    )
}

export default Index;