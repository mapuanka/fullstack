import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {

    return (
        <div>
            <Header name={props.name} size='2'/>
            <Content parts={props.parts}/>
            <Total parts={props.parts} />
        </div>
    )
}

export default Course