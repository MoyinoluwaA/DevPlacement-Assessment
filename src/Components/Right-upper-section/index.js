import React from 'react'
import SearchBox from '../Searchbox'
import {Switch} from 'react-materialize'

const Index = ({heading, handleSearch, handleEnter, value}) => {
    // const [search, setSearch] = useState("")

    // const handleSearch =(e) => {
    //     setSearch(e.target.value);
    // }

    return (
        <div>
            <h2 className="user-title">{heading}</h2>
            <p className="filterText">Filter by</p>
            <div className="filtergroup">
                <div className="filterGroup1 filterItem right-search">
                    <SearchBox className="searchUserInput" 
                    placeholder="Find in list" 
                    handleChange={handleSearch} 
                    handleEnter={handleEnter} 
                    value={value}/>
                    <i className="fa fa-search right-search-icon" aria-hidden="true"></i>
                </div>
                <div className="filterGroup2 filterItem">
                    <select id="filters" name="filters">
                        <option value="Country" defaultValue>Country</option>
                        <option value="saab">Age</option>
                        <option value="fiat">Gender</option>
                        <option value="audi">State</option>
                    </select>
                </div>
                <div className="filterGroup3 filterItem">
                <Switch
                id="Switch-11"
                offLabel=""
                onLabel=" Show Country"
                />
                </div>
            </div>
        </div>
    )
}

export default Index;