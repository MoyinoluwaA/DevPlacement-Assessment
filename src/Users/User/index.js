import React from 'react'

import Card from '../../Components/Card'
import Button from '../../Components/Button'
import Pagination from '../../Components/Pagination'

const Index = ({users,loading, userDetails, handlePrev, handleNext, onClickDownload}) => {
    if (loading) {
        return <p>Loading...</p>
    }

    // Map through array for all, male and female users
    const user = users.map((user, index) => 
        <div key={index}>
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
                        <div className="more-info-btn contact-items last">
                            <Button onClick={() => userDetails(user)} className="more-info-btn" 
                            text={<i class="fa fa-arrow-right resize-icon" aria-hidden="true"></i>} 
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )

    console.log(user)

    return (
        <div>
            {user}
            <div className="download-page-btn">
                <Button 
                className="download-btn"
                text={<i class="fa fa-cloud-download" aria-hidden="true"></i>} 
                children="   Download results"
                onClick={onClickDownload}
                />
                <Pagination 
                onClickPrev={handlePrev} 
                onClickNext={handleNext} 
                classNamePrev="prev-btn"
                classNameNext="next-btn"
                />
            </div>
        </div>
    )
}

export default Index;
