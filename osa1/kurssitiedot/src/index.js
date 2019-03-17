import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
    return(
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )

}

const Content = (props) => {
    return(
        <div>
            <p>
                {props.part} {props.exercise}
            </p>
        </div>
    )
}

const Total =(props) => {
    return(
        <div>
            <p>
            yhteensä {props.sum} tehtävää
            </p>
        </div>
    )

}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

return (
    <>
    <Header course={course} />
    <Content part={part1} exercise={exercises1} />
    <Content part={part2} exercise={exercises2} />
    <Content part={part3} exercise={exercises3} />
    <Total sum={exercises1+exercises2+exercises3} />
    </>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))