import React from 'react'
import PaginationButton from '../Button'


const Index = ({onClickPrev, onClickNext, classNamePrev, classNameNext}) => {
    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    //     pageNumbers.push(i);
    // }
    return (
        <div id="pagination-btn">
                <PaginationButton 
                text={<i class="fa fa-arrow-left resize-icon" aria-hidden="true"></i>} 
                onClick={onClickPrev} 
                className={classNamePrev}
                />
                <PaginationButton 
                text={<i class="fa fa-arrow-right resize-icon" aria-hidden="true"></i>} 
                onClick={onClickNext} 
                className={classNameNext} 
                />
        </div>
    )
}

export default Index;