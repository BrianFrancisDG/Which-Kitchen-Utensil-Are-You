import React from 'react';
import logo from './logo.svg';
import './App.css';

// Component Imports
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Question content = "What is your favorite food?" />
    </div>
  );
}

export default App;
