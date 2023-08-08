const Total = ({ parts }) => {
  console.log(parts);

  return (
    <>
      <h3>
        total of   { parts.reduce((s, p) => (s += p.exercises), 0)} exercises
      </h3>
    </>
  );
};

export default Total;
