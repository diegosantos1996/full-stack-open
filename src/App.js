import React from 'react';
import './App.css';



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h2>Name: Diego Santos</h2>
      <h3>Exercise 1</h3>
      <hr />
      <Header course={course} />
      <Content content1={part1} content2={part2} content3={part3} num1={exercises1} num2={exercises2} num3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      <hr />
      <Part part={props.content1} exercises={props.num1} />
      <Part part={props.content2} exercises={props.num2} />
      <Part part={props.content3} exercises={props.num3} />
      {props.content}

    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p>Name: {props.part} ---------|----Exercises: {props.exercises} </p>
    </div>
  );
}
const Total = (props) => {
  return (
    <div>
      <hr />
      <p>Total: {props.total}</p>
    </div>
  );
}


export default App;
