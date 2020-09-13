import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Ma recette de cuisine </h1>

      <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10" />
    </div>
  );
}

export default App;
