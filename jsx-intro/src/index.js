import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//1.
//declare const name, assign a string to it
//declare const element and assign JSX <h1> element to it with the word Hello and JSX expression 
  // wrapped in {}

// const name = 'Will Smith';
// const element = <h1>Hello, {name}</h1>;

//2.
// you can also embed the result of calling a JS function, into an <h1> element
function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Will',
  lastName: 'Smith'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
)

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
