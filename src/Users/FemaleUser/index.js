import React, {useState} from 'react'

import GetUser from '../GetUser'
import RightUpperSection from '../../Components/Right-upper-section' 


const apiFemaleUrl = "https://randomuser.me/api/?gender=female&results=5"

const Index = () => {
    const [femaleUsers, setFemaleUsers] = useState([])

    return (
        <div id="container">
            <h2 className="user-title">Female Users</h2>
            <RightUpperSection />
            <GetUser apiUrl={apiFemaleUrl} users={femaleUsers} setUsers={setFemaleUsers} />
        </div>
    )
}

export default Index;