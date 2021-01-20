import React from 'react'
import SearchBox from '../Searchbox'

const Index = ({heading, handleSearch}) => {
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
                    <SearchBox className="searchUserInput" placeholder="Find in list" handleChange={handleSearch}/>
                    <i class="fa fa-search right-search-icon" aria-hidden="true"></i>
                </div>
                <div className="filterGroup2 filterItem">
                    <select id="filters" name="filters">
                        <option value="Country" defaultValue>Country</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="filterGroup3 filterItem">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        <span>Show</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Index;