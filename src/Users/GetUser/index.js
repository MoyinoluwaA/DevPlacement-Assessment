import React, {useState, useEffect} from 'react'

import Users from '../User'
import RightUpperSection from '../../Components/Right-upper-section'
import UserList from '../UserProfile'


const Index = ({apiUrl, heading}) => {
    // define states
    const [usersArray, setUsersArray] = useState([])
    const [visible, setVisible] = useState(true)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(3)
    const [search, setSearch] = useState("")

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
        const cdata = usersArray.map(row => ({
            firstName: row.name.first,
            lastName: row.name.last,
            email: row.email,
            phoneNumber: row.phone

        }))

        const csvData = objectToCsv(cdata)
        download(csvData)
    }

    const handleSearch =(e) => {
        setSearch(e.target.value);
    }

    // const handleEnter = (e)=> {
    //     if (e.key === "Enter") {
    //         onSearch(search)
    //     }
    // }
    // const title = user.name.title.toLowerCase();
    // const titleList = (usersArray.map((user)=> user.name.title) )
    // console.log(titleList)

    // const filteredTitle = titleList.filter(title => {
    //     return title.toLowerCase().includes(search.toLowerCase())
    // })
    // const filteredCountries = countries.filter( country => {
    //     return country.name.toLowerCase().includes(search.toLowerCase())
    // })

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersArray.slice(indexOfFirstUser, indexOfLastUser);
    const user = currentUsers[0]
    
    // To display UserList
    const userDetails = (user) => {
        setVisible(false);
        console.log(user);
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
        if (currentPage === 14) {
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
                value={search} />
                {/* {filteredTitle.map(()=>( */}
                    <Users users={currentUsers} 
                    loading={loading} 
                    userDetails={userDetails} 
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    onClickDownload={getReport}
                    />
                {/* ))} */}
            </div> :
            <div>
                <RightUpperSection heading="User List" />
                <UserList onClick={handleBack} user={user} userProfile={userDetails}/>
            </div>
            } 
             {/* {filteredCountries.map(() => (
                <Users users={currentUsers} 
                // key={idx}
                loading={loading} 
                userDetails={userDetails} 
                handlePrev={handlePrev}
                handleNext={handleNext} /> 
             )) } */}
            
        </div>
    )
    }

export default Index;