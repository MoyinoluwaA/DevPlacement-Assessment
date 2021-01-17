import React,{useState} from 'react';
// import {NavLink} from 'react-router-dom'
import LeftSection from '../Left-section'
import AllUsers from '../../Users/AllUser'
import MaleUsers from '../../Users/MaleUser'
import FemaleUsers from '../../Users/FemaleUser'

const Index = () => {
    const [componentToShow, setComponentToShow] = useState("AllUsers")

    const handleAllUser = () => {
        setComponentToShow("AllUsers")
    }

    const handleMaleUser = () => {
        setComponentToShow("MaleUsers")
    }

    const handleFemaleUser = () => {
        setComponentToShow("FemaleUsers")
    }

    return (
        <div className="fullPage">
            <div id="left">
                <LeftSection 
                handleAllUser={handleAllUser} 
                handleMaleUser={handleMaleUser} 
                handleFemaleUser={handleFemaleUser} 
                />
            </div>
            <div className="right">
                {(componentToShow === "AllUsers")? <AllUsers /> :
                (componentToShow === "MaleUsers")? <MaleUsers />:
                (componentToShow === "FemaleUsers")? <FemaleUsers />: null}
            </div>
        </div>

    )
}

export default Index;