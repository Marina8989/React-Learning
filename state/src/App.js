import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        name: 'Marina',
        age: 67
      }
  }
  render() {
      return (
    <div>
       <h3>{this.state.name}</h3>
       <h4>{this.state.age} years old</h4>
    </div>
  );
  }
}

export default App;
