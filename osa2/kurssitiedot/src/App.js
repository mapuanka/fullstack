import React from 'react'
import Header from './components/Header'
import Course from './components/Course'

const App = () => {

      const courses = [
        {
          name: 'Half Stack application development',
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
  
      const lines = courses.map(course =>
        <Course 
          key = {course.id}
          name={course.name}
          parts={course.parts}
          />
          )

      return (
      <div>
        <Header name='Web development curriculum' size='1'/>
        {lines}
      </div>
    )
  }
  export default App