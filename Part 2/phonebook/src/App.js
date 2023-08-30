import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import Notification from "./components/notification";
import personsService from "./service/persons";
import PersonItemList from "./components/PersonItemList";
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [namePerson, setNamePerson] = useState("");
  const [numberPerson, setNumberPerson] = useState("");
  const [filterPerson, setFilterPerson] = useState("");
  const [notificationObject, setNotificationObject] = useState(null)


  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicates()) {
      return;
    }

    const personObject = {
      name: namePerson,
      number: numberPerson,
    };

    personsService
    .create(personObject)
    .then((returnedPerson) => {

      setNotificationObject({
       message:`Added ${returnedPerson.name}`,
       typeNotification: 'sucess'
      });

      setTimeout(() => {
        setNotificationObject(null)
      }, 5000)

      setPersons(persons.concat(returnedPerson));
      setNamePerson("");
      setNumberPerson("");
    });
    ;
  };

  const checkDuplicates = () => {
    const person = persons.find((n) => n.name === namePerson);

    if (person === undefined) {
      return false;
    } else {
      if (
        window.confirm(
          `${person.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...person, number: numberPerson };
        personsService
          .update(person.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((obj) =>
                obj.id !== person.id ? obj : returnedPerson
              )
            );
            
          setNotificationObject({
            message:`Updated ${returnedPerson.name}`,
            typeNotification: 'sucess'
          });

          setNamePerson("");
          setNumberPerson("");
    
          setTimeout(() => {
            setNotificationObject(null)
          }, 5000)
        })
        .catch(error => {
          setNotificationObject({
            message:`Information of ${person.name} has already been removed from the  server`,
            typeNotification: 'error'
            });
      
            setTimeout(() => {
              setNotificationObject(null)
            }, 5000)
      
        });
      }
      return true;
    }
  };

  const toggleDeleteOf = (id) => {
    const person = persons.find((n) => n.id === id);

    if (window.confirm(`Delete ${person.name}`)) {
      personsService
      .deleteObj(id)
      .then((returnedPerson) => {
        /*Elimina la persona del array en memoria */
        console.log("Se elimina");
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch(error => {
        setNotificationObject({
          message:`Information of ${person.name} has already been removed from the  server`,
          typeNotification: 'error'
         });
   
         setTimeout(() => {
           setNotificationObject(null)
         }, 5000)
   
      });
    }
  };

  const handleNamePersonChange = (event) => {
    setNamePerson(event.target.value);
  };

  const handlePhonePersonChange = (event) => {
    setNumberPerson(event.target.value);
  };

  const handleFilterPersonChange = (event) => {
    setFilterPerson(event.target.value);
  };

  const personsToShow =
    filterPerson === ""
      ? persons
      : persons.filter((person) => person.name.includes(filterPerson));

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notificationObject={notificationObject} />

      <Filter
        filterPerson={filterPerson}
        handleFilterPersonChange={handleFilterPersonChange}
      />

      <h3>add a </h3>
      <PersonForm
        addPerson={addPerson}
        namePerson={namePerson}
        numberPerson={numberPerson}
        handleNamePersonChange={handleNamePersonChange}
        handlePhonePersonChange={handlePhonePersonChange}
      />

      <h3>Numbers</h3>
      {personsToShow.map((person) => (
        <PersonItemList
          key={person.id}
          person={person}
          toggleDelete={() => toggleDeleteOf(person.id)}
        />
      ))}
    </div>
  );
};

export default App;
