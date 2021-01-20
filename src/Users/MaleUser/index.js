import React from 'react'
import GetUser from '../GetUser'

// Url for male users
const apiMaleUrl = "https://randomuser.me/api/?gender=male&results=42"

const Index = () => {
    
    return (
        <div id="container">
               <GetUser apiUrl={apiMaleUrl} heading="Male Users"/>
        </div>
    )
}

export default Index;