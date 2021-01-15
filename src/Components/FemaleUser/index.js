import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import Card from '../Card'
import SearchBox from '../Searchbox'
import Button from '../Button'

const ApiUrl = "https://randomuser.me/api/?results=5&?gender=female"

const Index = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const data = await fetch(ApiUrl);
            const response = await data.json(); 
            console.log(response);
            let results = await response.results;
            setUsers(results);
        }
        fetchApi();
    },[])
    console.log(users)

    return (
        <div id="container">
            <div>
                <h2 className="user-title">Female Users</h2>
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

            
            {users.map((user) => {
                return (
                    <div>
                        <Card>
                            <div className="card-image">
                                <img src={user.picture.medium} alt="user profile" />
                            </div>
                            <div className="card-text">
                                <h2 id="user-name">{user.name.first} {user.name.last}</h2>
                                <p>{user.location.street["number"]} {user.location.street["name"]}, {user.location.city}, {user.location.state}</p>
                                <div id="contact">
                                    <div className="contact-items">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        <span className="shift-text">{user.email}</span>
                                    </div>
                                    <div className="contact-items">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span className="shift-text">{user.phone}</span>
                                    </div>
                                    <NavLink to="/profile" className="contact-items">
                                        <Button text={<i class="fa fa-sm fa-arrow-right" aria-hidden="true"></i>} />
                                    </NavLink>
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;