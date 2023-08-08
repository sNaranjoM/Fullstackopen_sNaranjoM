import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};


const Button = ({handleClick, text }) => {
    return (
      <>
        <button onClick={handleClick}>{text}</button>
      </>
    );
};


const Statistics = ({ displayInfo }) => {

 
    return (
      <>
        <Title text={"statistics"} />
        {displayInfo.hasFeedback === true ? ( 
        <table>
          <tbody>
            {displayInfo.part.map((item) => (
              <tr key={item.text}>
                <StatisticLine text={item.text} value={item.value} />
              </tr>
            ))}
          </tbody>
        </table>
        ):( 
            <p> No feedback given</p>
        )}
      </>
    );
  };
  


const StatisticLine  = ({text, value }) => {

    return (
        <>
            <td> <p> {text} </p> </td>
            <td> <p> {value} </p> </td>
        </>
      );
};


const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const displayInfo = {  
        hasFeedback : good > 0  ||  neutral > 0 || bad > 0,
        part: [
            {
                text:"good",
                value : good
            },
            {
                text:"nuetral",
                value : neutral
            },
            {
                text:"bad",
                value : bad
            },
            {
                text:"all",
                value : good + neutral + bad
            },
            {
                text:"average",
                value : (good - bad) / (good +neutral + bad)
            },
            {
                text:"positive",
                value : (good) / (good +neutral + bad)
            },
            
        ],

    };

 

    return (
      
        <div>
            <Title text={"give feddback"} />
            <br/> 

            <Button handleClick={() => setGood(good + 1)} text={displayInfo.part[0].text} />
            <Button handleClick={() => setNeutral(neutral + 1)} text={displayInfo.part[1].text} />
            <Button handleClick={() => setBad(bad+1)} text={displayInfo.part[2].text} />
            <br/> 

            <Statistics displayInfo={displayInfo} />

        </div>
    );
};

export default App;
