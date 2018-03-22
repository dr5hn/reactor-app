import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Darshan', age: 27},
      {name:'Max', age: 29},
      {name:'Tester', age: 26}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello There !!</h1>
        <p>This is React here.. Can you listen to me..</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>A Inbetween Content</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'},)
  }
}

export default App;
