import PersonItemList from "./PersonItemList";

const Persons = ({ personsToShow }) => {


  return (
    <>
      {personsToShow.map((person) => (
        <PersonItemList key={person.id} person={person} />
      ))}
    </>
  );
};

export default Persons;
