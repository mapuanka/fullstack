import React from 'react'
import Person from './Person'


const Persons = ({persons}) => {

  const showAll = persons.map(person => 
        <div> 
           <Person 
              key={person.key}
              name = {person.name}
              number = {person.number}
              />
        </div>
      )
    return (
         <div>
             {showAll}   
        </div>

    )
}

export default Persons