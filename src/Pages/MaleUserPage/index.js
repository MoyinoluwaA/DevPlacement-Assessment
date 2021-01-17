import React from 'react';
import MaleUser from '../../Users/MaleUser';
import FullPage from '../../Components/Fullpage';

const Index = () => {
    return (
        <div className="fullPage">
            <FullPage />
            <div className="right">
                <MaleUser />
            </div>
        </div>
    )
}

export default Index;