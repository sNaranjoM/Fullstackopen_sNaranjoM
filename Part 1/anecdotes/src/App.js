
import { useState } from 'react'

const AnecdoteDisplay = ({title, anecdote, points  }) => {
  return (
    <>
      <h1> {title}</h1>
      {anecdote}
      <br/>
      <p> has {points} votes</p>
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


const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));


  const getRandomNumber = () => {
    return Math.floor(Math.random() * (anecdotes.length));
  };
  
  const newVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setMostVoted(copy.indexOf(Math.max(...copy)))
  }


  return (
    <div>

      <AnecdoteDisplay  title={'Anecdote of the day'}  anecdote={anecdotes[selected]} points={points[selected]} />
      <div>
        <Button handleClick={() => newVote()} text={'vote'} />
        <Button handleClick={() => setSelected(getRandomNumber)} text={'next anecdote'} />
      </div>

      <br/>
      <AnecdoteDisplay  title={'Anecdote with most votes'}  anecdote={anecdotes[mostVoted]} points={points[mostVoted]} />




    </div>
  )
}

export default App