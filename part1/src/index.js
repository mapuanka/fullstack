import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div> {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (amount) => {
    setValue(amount)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(value+1)} text='increase' />
      <Button handleClick={() => setToValue(0)} text='zero' />
      <Button handleClick={() => setToValue(value-1)} text='decrease' />
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)