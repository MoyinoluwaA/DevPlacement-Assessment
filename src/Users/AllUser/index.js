import React from 'react';

import RightUpperSection from '../../Components/Right-upper-section'
import GetUser from '../GetUser'
import Button from '../../Components/Button'
// import Pagination from '../../Components/Pagination'


const apiUrl = "https://randomuser.me/api/?results=9&seed=abc"

const Index = () => {
    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    //     pageNumbers.push(i);
    // }
    // console.log(pageNumbers);
   
    // const handlePrev = () => {
    //     setCurrentPage(currentPage - 1)
    // }

    // const handleNext = () => {
    //     setCurrentPage(currentPage + 1);
    // }

    return (
        <div id="container">
            <h2 className="user-title">All Users</h2>
            <RightUpperSection />
            <GetUser apiUrl={apiUrl}/>
            <div className="download-page-btn">
                <Button 
                className="download-btn"
                text={<i class="fa fa-cloud-download" aria-hidden="true"></i>} 
                children="   Download result"
                />
                {/* <Pagination onClickPrev={handlePrev} onClickNext={handleNext} /> */}
            </div>
        </div>
    )
}

export default Index;