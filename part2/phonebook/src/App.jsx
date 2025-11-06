import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const peopleToShow = (filter === '') ? 
    [] 
    : 
    persons.filter((person) => person.name.toLowerCase().startsWith(filter.toLowerCase()))

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submission occurred")
    const newPerson = {name: newName, number: newNumber}

    // ensure no duplicate names
    if (persons.find((person) => person.name === newPerson.name)) {
      alert(`${newName} is already in the phonebook.`)
    } else {
      setPersons(persons.concat(newPerson))   
    }
 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilterChange}/>
      </div>
      {peopleToShow.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
      
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
      ...
      <div>debug: {filter}</div>
    </div>
  )
}

export default App