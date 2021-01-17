import React from 'react';
import FemaleUser from '../../Users/FemaleUser';
import FullPage from '../../Components/Fullpage';

const Index = () => {
    return (
        <div className="fullPage">
            <FullPage />
            <div className="right">
                <FemaleUser />
            </div>
        </div>
    )
}

export default Index;