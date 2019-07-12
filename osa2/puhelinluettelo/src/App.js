import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showFiltered, setFilter ] = useState('')


  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [2])



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }  
  
  const handleFilter= (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }


  const addName = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber
    }
    if(persons.find(person => person.name===newName)){
        showWarning()
        return
    }

    setPersons(persons.concat(contactObject))
    setNewName('')
    setNewNumber('')

  }

  const showWarning = (event) => {
      window.alert(`${newName} is already added to phonebook`);
     // console.log("show warning")
      
  } 
 
  const filtered = persons.filter(person => person.name.toLowerCase().includes(showFiltered));

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>filter shown with </h3>
      <Filter persons={persons} showFiltered={showFiltered} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>  
      <h2>Numbers</h2>
  
      {showFiltered ? <Persons persons={filtered} />  : <Persons persons={persons}/>   }
    
    </div>
  )

}

export default App