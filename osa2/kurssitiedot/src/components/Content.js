import React from 'react'
import Part from './Part'

const Content = ({parts}) => {

    const lines = parts.map(part =>
        <Part 
          key={part.id}
          part={part.name}
          exercises={part.exercises}
          />
          )

    return (
         <div>
                {lines}
        </div>

    )
}


export default Content