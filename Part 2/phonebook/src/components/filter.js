const Filter = ({ filterPerson, handleFilterPersonChange}) => {
  return (
    <div>
      filter shown with{" "} <input value={filterPerson} onChange={handleFilterPersonChange} />
    </div>
  );
};

export default Filter;
