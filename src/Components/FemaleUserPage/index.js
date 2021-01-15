import React from 'react';
import FemaleUser from '../FemaleUser';
import FullPage from '../Fullpage';

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