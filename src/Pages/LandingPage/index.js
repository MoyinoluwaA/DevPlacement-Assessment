import React from 'react';
import AllUser from '../../Users/AllUser';
import FullPage from '../../Components/Fullpage';

const Index = () => {
    return (
        <div className="fullPage">
            <FullPage />
            <div className="right">
                <AllUser />
            </div>
        </div>
    )
}

export default Index;