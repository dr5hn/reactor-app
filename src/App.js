import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello There !!</h1>
        <p>This is React here.. Can you listen to me..</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement('div',{className: 'App'},)
  }
}

export default App;
