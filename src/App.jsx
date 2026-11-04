import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            &copy; {new Date().getFullYear()} Chris Trott &middot;{' '}
            <a href="https://www.linkedin.com/in/christopher-trott-39345119">LinkedIn</a> &middot;{' '}
            <a href="https://github.com/ChrisTrott/christrott.github.io">Site source on GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
