import React from 'react';
import MaleUser from '../MaleUser';
import FullPage from '../Fullpage';

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