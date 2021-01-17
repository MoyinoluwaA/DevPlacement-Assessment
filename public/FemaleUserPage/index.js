import React from 'react';
import FemaleUser from '../../src/Components/FemaleUser';
import FullPage from '../../src/Components/Fullpage';

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