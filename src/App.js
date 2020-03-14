import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
    <Header />
    <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>Message</a>
      <a>News Feed</a>
    </div>
  );
}

const Technologies = () => {
  return (
  <div className="App">
  Simple HTML
  <ul>
    <li>CSS</li>
    <li>HTML</li>
    <li>JS</li>
    <li>REACT</li>
  </ul>
</div>
  );
}
export default App;
