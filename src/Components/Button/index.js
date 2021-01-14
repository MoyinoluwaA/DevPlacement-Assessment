import React from 'react'
import {Button} from 'react-materialize'

const Index = ({text, className}) => {
    return (
        <div>
            <Button
                node="button"
                style={{
                marginRight: '5px'
                }}
                waves="light"
                className = {className}
            >
                {text}
            </Button>
        </div>
    )
}

export default Index;