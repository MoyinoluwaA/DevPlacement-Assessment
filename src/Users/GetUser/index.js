import React, {useState, useEffect} from 'react'

import Users from '../User'
import RightUpperSection from '../../Components/Right-upper-section'
import UserList from '../UserProfile'


const Index = ({apiUrl, heading}) => {
    // define states
    const [usersArray, setUsersArray] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [status, setStatus] = useState(true)
    const [visible, setVisible] = useState(true)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(3)
    const [search, setSearch] = useState("")
    const[user, setUser] = useState()

    // Get Users from Api for All, Female and Male Users
    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const data = await fetch(apiUrl);
            const response = await data.json(); 
            const results = await response.results;
            setUsersArray(results);
            setLoading(false);
        }
        fetchApi();
    }, [apiUrl])

    useEffect(() => {
        setFilteredUsers(usersArray)
    }, [usersArray])
   

    // creating body of download csv file
    const objectToCsv = function(cdata) {
        const csvRows = []

        // get the headers
        const headers = Object.keys(cdata[1])
        csvRows.push(headers.join(','))

        // loop over the rows
       for (const row of cdata) {
           const values = headers.map(header => {
               const escaped = ('' +row[header]).replace(/"/g, '\\"')
               return `"${escaped}"`;
           })
           csvRows.push(values.join(','));
       }
       return csvRows.join('\n');
    }

    // creating download csv function
    const download = function(cdata) {
        const blob = new Blob([cdata], {type : 'text/csv'})
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden','')
        a.setAttribute('href', url)
        a.setAttribute('download', 'download.csv')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    
    // Getting data for csv download
    const getReport = () => {
        const cdata = filteredUsers.map(row => ({
            firstName: row.name.first,
            lastName: row.name.last,
            email: row.email,
            phoneNumber: row.phone

        }))

        const csvData = objectToCsv(cdata)
        download(csvData)
    }

    // handle search input
    const handleSearch =(e) => {
        setSearch(e.target.value);
        if (search === '') {
            setStatus(true)
        }
    }

    // search functionality
    const onSearch = (e)=> {
        e.preventDefault()

        const filter = document.getElementById('filters')

        if (filter.selectedIndex === 0) {

            let filteredCountries = usersArray.filter(user => {
                if (user.location.country.toLowerCase().includes(search.toLowerCase())) {
                    return user
                } 
                return null
            })

            filteredCountries.length >= 1 ? setFilteredUsers(filteredCountries) : setStatus(false)
        
        } else if (filter.selectedIndex === 1) {

            let filteredAge = usersArray.filter(user => {
                if (search >= user.dob.age) {
                    return user
                } 
                return null
            })

            filteredAge.length >= 1 ? setFilteredUsers(filteredAge) : setStatus(false)

        } else if (filter.selectedIndex === 2) {

            let filteredGender = usersArray.filter(user => {
                if (user.gender.toLowerCase().includes(search.toLowerCase())) {
                    return user
                } 
                return null
            })

            filteredGender.length >= 1 ? setFilteredUsers(filteredGender) : setStatus(false)
        

        } else {

            let filteredState = usersArray.filter(user => {
                if (user.location.state.toLowerCase().includes(search.toLowerCase())) {
                    return user
                } 
                return null
            })

            filteredState.length >= 1 ? setFilteredUsers(filteredState) : setStatus(false)

        }
        
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    
    
    // To display UserList
    const userDetails = (user) => {
        setVisible(false);
        setUser(user)
        return user;
    } 


    // To navigate to the previous page of All,Male and Female Users
    const handlePrev = (e) => {
        e.preventDefault();
        if (currentPage === 1) {
           return false;
        }
        setCurrentPage(currentPage - 1)
    }

    // To navigate to the next page of All,Male and Female Users
    const handleNext = (e) => {
        e.preventDefault();
        if (currentPage === Math.round(filteredUsers.length / usersPerPage)) {
            return false;
        } 
        setCurrentPage(currentPage + 1);
    }

    // To navigate to the User List
    const handleBack = () => {
        setVisible(true)
    }
   

    return (
        <div>
            {visible ?
            <div>
                <RightUpperSection heading={heading} 
                handleSearch={handleSearch}
                onSubmit={onSearch}
                value={search} />

                {status? 
                    <Users users={currentUsers} 
                    loading={loading} 
                    userDetails={userDetails} 
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    onClickDownload={getReport}
                    />
                : 
                    <div className='error-msg'>
                        No user matches your search. Please search for another user.
                    </div>
                }
            </div> :
            <div>
                <RightUpperSection heading="User List" />
                <UserList onClick={handleBack} user={user}/>
            </div>
            } 
            
        </div>
    )
    }

export default Index;