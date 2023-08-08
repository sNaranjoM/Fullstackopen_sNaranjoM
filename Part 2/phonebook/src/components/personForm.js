const PersonForm = ({ addPerson,namePerson, numberPerson,handleNamePersonChange,handlePhonePersonChange}) => {

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={namePerson} onChange={handleNamePersonChange} />
        </div>
        <div>
          number :{" "} <input value={numberPerson} onChange={handlePhonePersonChange} />{" "}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>{" "}
    </div>
  );
};

export default PersonForm;
