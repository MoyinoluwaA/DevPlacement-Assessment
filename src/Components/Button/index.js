import React from 'react'
import {Button} from 'react-materialize'

const Index = ({text,children,onClick,className}) => {
    return (
            <Button
                node="button"
                style={{
                marginRight: '5px'
                }}
                onClick = {onClick}
                waves="light"
                className = {className}
            >
                {text}
                {children}
            </Button>
    )
}

export default Index;