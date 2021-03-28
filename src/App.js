import React from 'react';
import './App.css';



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  return (
    <div>
      <h2>Name: Diego Santos</h2>
      <h3>Exercise 1.3-1.5</h3>
      <hr />
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = (props) => {
  console.log()
  return <h1>{props.course.name}</h1>
}

// this version makes use of Part.
// forEach possible solution as well.
const Content = (props) => {
  return (
    <div>
      <hr />
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p>Name: {props.part.name}------|-------Exercises: {props.part.exercises}</p>
    </div>
  );
}


const Total = (props) => {
  let total = 0;
  props.parts.forEach(index => {    // used a forEach to iterate through object, use 'index' as the object iter.
    total += index.exercises;
  });

  return (
    <div>
      <hr />
      <p>Total: {total}</p>
    </div>
  );
}


export default App;
