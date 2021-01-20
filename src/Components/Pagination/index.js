import React from 'react'
import PaginationButton from '../Button'


const Index = ({onClickPrev, onClickNext, classNamePrev, classNameNext}) => {
   
    return (
        <div id="pagination-btn">
                <PaginationButton 
                text={<i className="fa fa-arrow-left resize-icon" aria-hidden="true"></i>} 
                onClick={onClickPrev} 
                className={classNamePrev}
                />
                <PaginationButton 
                text={<i className="fa fa-arrow-right resize-icon" aria-hidden="true"></i>} 
                onClick={onClickNext} 
                className={classNameNext} 
                />
        </div>
    )
}

export default Index;