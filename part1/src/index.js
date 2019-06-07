import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
      <div>
        <p>Hello {props.name}, your are {props.age} years old</p>
      </div>
    )
  }
  
  const App = () => {
    const name = 'Pekka'
    const age = 10
  
    return (
      <>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
        <Footer />
      </>
    )
  }
  const Footer = () => {
    return (
      <div>
        greeting app created by 
        <a href="https://github.com/mapuanka">mapuanka</a>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))