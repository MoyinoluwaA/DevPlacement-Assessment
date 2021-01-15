import React from 'react'
import {Row, Col, CardPanel} from 'react-materialize'

const Index = ({children}) => {
    return  (
        <div>
            <Row>
                <Col
                    l={12}
                >
                    <CardPanel className="white">
                        {children}
                    </CardPanel>
                </Col>
                </Row>
        </div>
    )
}

export default Index;