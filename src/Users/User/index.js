import React from 'react'

import Card from '../../Components/Card'
import Button from '../../Components/Button'

const Index = ({users,loading, userDetails}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {users.map((user) => {
                return (
                    <div >
                        <Card >
                            <div className="card-image">
                                <img src={user.picture.medium} alt="user profile" />
                            </div>
                            <div className="card-text">
                                <h2 id="user-name">{user.name.first} {user.name.last}</h2>
                                <p>{user.location.street["number"]} {user.location.street["name"]}, {user.location.city}, {user.location.state}</p>
                                <div id="contact">
                                    <div className="first contact-items">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        <span className="shift-text">{user.email}</span>
                                    </div>
                                    <div className="contact-items">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span className="shift-text">{user.phone}</span>
                                    </div>
                                    <Button onClick={() => userDetails(user)} className="more-info-btn" 
                                    text={<i class="fa fa-arrow-right resize-icon" aria-hidden="true"></i>} 
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;
