import React from 'react';
import logo from './graphql.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { getCharacters } from './query';

const App = () => {
  useQuery(getCharacters, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <a
          className="App-link"
          href="https://graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React GraphQL Client 🚀
        </a>
      </header>
    </div>
  );
}

export default App;
