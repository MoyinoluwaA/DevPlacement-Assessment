import React,{useState} from 'react';
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

    // const handleSearch =(e) => {
    //     setSearch(e.target.value);
    // }

    // const onSearchUser = (e) => {
    //     e.preventDefault()
    // }

    return (
        <div className="fullPage">
            <div id="left">
                <LeftSection 
                handleAllUser={handleAllUser} 
                handleMaleUser={handleMaleUser} 
                handleFemaleUser={handleFemaleUser} 
                // handleSearch={handleSearch}
                // onSearchUser={onSearchUser}
                // value={search}
                />
            </div>
            <div className="right">
                {(componentToShow === "AllUsers")? <AllUsers /> :
                (componentToShow === "MaleUsers")? <MaleUsers  />:
                (componentToShow === "FemaleUsers")? <FemaleUsers />:
                (componentToShow === "SearchUsers")? <FemaleUsers />:
                null}
            </div>
        </div>

    )
}

export default Index;