import React from 'react'
import Fullpage from '../../Components/Fullpage'
import Profile from '../../Users/Profileuser'

const Index = () => {
    return (
        <div className="fullPage">
            <Fullpage />
            <div className="right">
                <Profile />
            </div>
        </div>
    )
}

export default Index;