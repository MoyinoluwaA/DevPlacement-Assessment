import React from 'react'
import GetUser from '../GetUser'

// Url for all users
const apiUrl = "https://randomuser.me/api/?results=42&seed=abc"

const Index = () => {

    return (
        <div id="container">
            <GetUser apiUrl={apiUrl} heading="All Users"/>
        </div>
    )
}

export default Index;