import Part from "./part/Part";

const Content = ({parts}) => {

  console.log(parts)

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

export default Content;
