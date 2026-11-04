import React, { useState } from 'react';
import { Navigate, NavLink, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { FaGithub, FaItchIo, FaLinkedin, FaStackExchange, FaTwitter, FaUnity } from 'react-icons/fa';
import About from '../Content/About';
import Projects from '../Content/Projects';
import './Navbar.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Router>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className={isMenuOpen ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded={isMenuOpen} data-target="navbar" onClick={toggleMenu}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={isMenuOpen ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-item"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about" onClick={closeMenu}>About Me</NavLink></div>
                    <div className="navbar-item"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/projects" onClick={closeMenu}>Projects</NavLink></div>
                    <div className="navbar-end">
                        <div className="navbar-item" title="Twitter"><a href="https://twitter.com/viokyma" aria-label="Twitter"><FaTwitter /></a></div>
                        <div className="navbar-item" title="LinkedIn"><a href="https://www.linkedin.com/in/christopher-trott-39345119" aria-label="LinkedIn"><FaLinkedin /></a></div>
                        <div className="navbar-item" title="GitHub"><a href="https://github.com/ChrisTrott" aria-label="GitHub"><FaGithub /></a></div>
                        <div className="navbar-item" title="StackExchange"><a href="https://stackexchange.com/users/2116967/chris-trott?tab=accounts" aria-label="StackExchange"><FaStackExchange /></a></div>
                        <div className="navbar-item" title="Itch.io"><a href="https://viokyma.itch.io/" aria-label="Itch.io"><FaItchIo /></a></div>
                        <div className="navbar-item is-hidden" title="Unity Answers"><a href="https://answers.unity.com/users/152903/viokyma.html" aria-label="Unity Answers"><FaUnity /></a></div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route index element={<Navigate to="/about" />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
