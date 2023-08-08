import { useState } from "react";

import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [namePerson, setNamePerson] = useState("");
  const [numberPerson, setNumberPerson] = useState("");
  const [filterPerson, setFilterPerson] = useState("");


  const handleNamePersonChange = (event) => {
    setNamePerson(event.target.value);
  };

  const handlePhonePersonChange = (event) => {
    setNumberPerson(event.target.value);
  };

  const handleFilterPersonChange = (event) => {
    setFilterPerson(event.target.value);
  };

  const checkDuplicates = () => {
    return persons.some((person) => person.name === namePerson);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicates()) {
      alert(`${namePerson} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: namePerson,
      number: numberPerson,
      id:persons.length+1
    };

    setPersons(persons.concat(personObject));
    setNamePerson("");
    setNumberPerson("");
  };

  const personsToShow = filterPerson === ''
  ? persons
  : persons.filter((person) => person.name.includes(filterPerson))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter  filterPerson={filterPerson}  handleFilterPersonChange={ handleFilterPersonChange}  />

      <h3>add a </h3>
      <PersonForm  
        addPerson={addPerson} 
        namePerson={namePerson}
        numberPerson={numberPerson}
        handleNamePersonChange={handleNamePersonChange}
        handlePhonePersonChange={handlePhonePersonChange}
      />

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />   


    </div>
  );
};

export default App;
