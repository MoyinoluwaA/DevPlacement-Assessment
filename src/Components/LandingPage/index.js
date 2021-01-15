import React from 'react';
import AllUser from '../AllUser';
import FullPage from '../Fullpage';

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