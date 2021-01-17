import React from 'react'
import SearchBox from '../Searchbox'

const Index = () => {
    return (
        <div>
            <p className="filterText">Filter by</p>
            <div className="filtergroup">
                <div className="filterGroup1 filterItem">
                    <SearchBox className="searchUserInput" placeholder="Find in list" />
                </div>
                <div className="filterGroup2 filterItem">
                    <select id="filters" name="filters">
                        <option value="Country" selected>Country</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="filterGroup3 filterItem">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Index;