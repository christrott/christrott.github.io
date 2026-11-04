import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Content/Hero.jsx';
import About from './components/Content/About.jsx';
import Projects from './components/Content/Projects.jsx';
import './App.scss';

// Old links used the router's hash URLs (e.g. /#/projects). Send those to the matching section.
const redirectLegacyHash = () => {
  const { hash, pathname } = window.location;
  if (!hash.startsWith('#/')) return;
  const id = hash.slice(2);
  window.history.replaceState(null, '', id ? `#${id}` : pathname);
  const section = id && document.getElementById(id);
  if (section) section.scrollIntoView();
};

function App() {
  useEffect(redirectLegacyHash, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <div className="container">
          <About />
          <Projects />
        </div>
      </main>
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
