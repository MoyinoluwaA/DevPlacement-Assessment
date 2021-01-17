import React from 'react'

const Index = ({users}) => {
    return (
        <div>
            {users.map((user) => {
                return (
                    <div>
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
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;