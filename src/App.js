import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello There !!</h1>
        <p>This is React here.. Can you listen to me..</p>
        <Person name="Darshan" age="27"/>
        <Person name="Max" age="28">A Inbetween Content</Person>
        <Person name="Tester" age="54"/>
      </div>
    );
    // return React.createElement('div',{className: 'App'},)
  }
}

export default App;
