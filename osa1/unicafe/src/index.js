import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.handleClick}> {props.text}</button>
const Statistic = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) =>{
  if(props.all > 0 ) {
  return (
    <div><table><tbody>
      <Statistic text='good' value={props.good} />
      <Statistic text='neutral' value={props.neutral} />
      <Statistic text='bad' value={props.bad} />
      <Statistic text='all' value={props.all} />
      <Statistic text='average' value={props.average} />
      <Statistic text='positive' value={props.positive} />
      </tbody></table></div>
    )}
  else { 
    return (
      'No feedback given'
      )}
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const changeGood = () => setGood(good+1) 
  const changeNeutral = () => setNeutral(neutral+1)
  const changeBad = () => setBad(bad+1)

  const sumAll = () => (good + bad + neutral)
  const countAverage = () =>  (good + (bad*-1)) / sumAll()

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {() => changeGood()} text='good'/>
      <Button handleClick = {() => changeNeutral()} text='neutral'/>
      <Button handleClick = {() => changeBad()} text='bad'/>
      <h1>statistics</h1>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}
        all={sumAll()}
        average={countAverage()}
        positive={good/sumAll()}
        />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)