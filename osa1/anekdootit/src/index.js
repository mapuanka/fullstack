import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({action, text}) => <button onClick={action}> {text} </button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  const [voted, setVotes] = useState(0)
  
  const handler = () => {
      const newselected = Math.floor(Math.random()*anecdotes.length)
      setSelected(newselected)
  }
  const vote = item => { 
    const copy = { ...points }
    points [item]+= 1
    copy [item] += 1
    console.log(copy)
  }


  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <p>has {points[selected]} votes</p>
        <Button action={() => vote(selected)} text='vote' /> 
        <Button action={() => handler()} text='next anecdote' />
        <h1>Anecdote with most votes</h1>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)