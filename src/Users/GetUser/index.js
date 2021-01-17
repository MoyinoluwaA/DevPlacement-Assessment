import React, {useState, useEffect} from 'react'
import Users from '../User'
import UserFullInfo from '../UserFullInfo'


const Index = ({apiUrl}) => {
    const [usersArray, setUsersArray] = useState([])
    const [visible, setVisible] = useState(true)
    const [loading, setLoading] = useState(false)
    const [currentPage] = useState(1)
    const [usersPerPage] = useState(3)

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
    console.log(usersArray)
    console.log(setUsersArray)
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         setLoading(true);
    //         const data = await fetch(apiMaleUrl);
    //         const response = await data.json(); 
    //         const results = await response.results;
    //         setMaleUsers(results);
    //         setLoading(false);
    //     }
    //     fetchApi();
    // }, [])

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         setLoading(true);
    //         const data = await fetch(apiFemaleUrl);
    //         const response = await data.json(); 
    //         const results = await response.results;
    //         setFemaleUsers(results);
    //         setLoading(false);
    //     }
    //     fetchApi();
    // }, [])
    // const userArray = users

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersArray.slice(indexOfFirstUser, indexOfLastUser);
    

    function userDetails(user) {
        setVisible(false);
        return (user);
    } 

    // const currentUser = userDetails();
    // console.log(currentUser);

    // const totalUsers = users.length;

    return (
        <div>
            {visible? 
            <Users users={currentUsers} loading={loading} userDetails={userDetails}/> :
            <UserFullInfo users={currentUsers} /> }
            
        </div>
    )
    }

export default Index;