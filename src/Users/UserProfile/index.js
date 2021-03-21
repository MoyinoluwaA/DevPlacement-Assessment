import React from 'react'
import Button from '../../Components/Button'
import Pagination from '../../Components/Pagination'

const Index = ({onClick, user}) => {
    const date = user.registered.date

    return (
        <div>
            <Button className="back-btn" 
            text={<i className="fa fa-arrow-left resize-icon back-icon" aria-hidden="true"></i>}
            onClick={onClick} 
            />
            <span >RESULTS</span>
            <div className="profile-box">
                <div className="profile-pic">
                    <img src={user.picture.large} alt="profile-pic" />
                </div>
                <div className="profile-text">
                    <h3 className="profile-name">{user.name.title} {user.name.first} {user.name.last} <span className="age">{user.dob.age}</span></h3>
                    <p>{user.location.street["number"]} {user.location.street["name"]}, {user.location.city}, {user.location.state}</p>
                    <div className="profile-email">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <span className="shift-text">{user.email}</span>
                    </div>
                    <p className="registration-date">JOINED: {date.split("", [10])}</p>
                    <div className="phone">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="shift-text">{user.phone}</span>
                    </div>
                    <div className="phone">
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <span className="shift-text">{user.cell}</span>
                    </div>
                </div>
            </div>
            <div className="download-page-btn">
                <Button 
                className="download-btn disable"
                text={<i className="fa fa-cloud-download" aria-hidden="true"></i>} 
                children="   Download results"
                />
                <Pagination 
                classNamePrev="prev-btn disable"
                classNameNext="next-btn disable" />
            </div>
        </div>
    )

}

export default Index;