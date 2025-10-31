import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(()=>0))
  const [mostPopular, setMostPopular] = useState(0)
 
  const getRandomQuote = () => {
    const len = anecdotes.length
    const randomInt = Math.floor(Math.random() * len)
    setSelected(randomInt)
  }

  const addVote = () => {
    const copy = [...votes]    
    copy[selected]++
    setVotes(copy)
    // votes are async!
    setMostPopular(mostPopularAnecdote(copy))
  }

  const mostPopularAnecdote = (copy) => {
    // get max position index
    let max = 0
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > copy[max]){
        max = i
      }
    }
    return max
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{anecdotes[selected]}</h3>
      <p>Has {votes[selected]} votes</p>
      <button onClick={getRandomQuote}>next anecdote</button>
      <button onClick={addVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <h3>{anecdotes[mostPopular]}</h3>
    </div>
  )
}

export default App