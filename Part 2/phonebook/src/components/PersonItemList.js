const PersonItemList = ({ person, toggleDelete }) => {
  return (
    <p>
      {person.name} {person.number}{" "}
      <button onClick={toggleDelete}>Eliminar</button>{" "}
    </p>
  );
};

export default PersonItemList;
