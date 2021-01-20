import React from 'react'
import GetUser from '../GetUser'

// Url for female users
const apiFemaleUrl = "https://randomuser.me/api/?gender=female&results=42&seed=abc"

const Index = () => {

    return (
        <div id="container">
            <GetUser apiUrl={apiFemaleUrl}  heading="Female Users" />
        </div>
    )
}

export default Index;