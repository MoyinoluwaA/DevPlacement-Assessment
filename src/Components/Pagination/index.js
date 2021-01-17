import React from 'react'
import PaginationButton from '../Button'


const Index = ({onClickPrev, onClickNext, usersPerPage, totalUsers}) => {
    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    //     pageNumbers.push(i);
    // }
    return (
        <div id="pagination-btn">
                <PaginationButton 
                text={<i class="fa fa-arrow-left resize-icon" aria-hidden="true"></i>} 
                onClick={onClickPrev} 
                className="prev-btn"
                />
                <PaginationButton 
                text={<i class="fa fa-arrow-right resize-icon" aria-hidden="true"></i>} 
                onClick={onClickNext} 
                className="next-btn" 
                />
        </div>
    )
}

export default Index;