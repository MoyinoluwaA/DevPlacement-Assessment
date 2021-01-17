import React from 'react'

import GetUser from '../GetUser'
import RightUpperSection from '../../Components/Right-upper-section' 

const apiMaleUrl = "https://randomuser.me/api/?gender=male&results=5"

const Index = () => {
    const maleUsers = []

    return (
        <div id="container">
                <h2 className="user-title">Male Users</h2>
                <RightUpperSection />
                <GetUser apiUrl={apiMaleUrl} user={maleUsers} />
        </div>
    )
}

export default Index;