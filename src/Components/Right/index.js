import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize'

const ApiUrl = "https://randomuser.me/api/?results=5"

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
    }, [])
    console.log(users)

    return (
        <div>
            <h1>API Page</h1>
            
            {users.map((user) => {
                return (
                    <div>
                        <Row>
                            <Col
                                m={6}
                                s={12}
                            >
                                <Card
                                actions={[<a key="1" href="/">This is a link</a>]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                                horizontal
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                <div>
                                    {/* <h2>{user.name.first}{user.name.last}</h2>
                                    <p>{user.phone}</p>
                                    <p>{user.email}</p> */}
                                    {/* <h2>{user.picture.large}</h2>  */}
                                    {/* <h2>{user.location.street}{user.location.city}{user.location.state}</h2> */}
                                </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;