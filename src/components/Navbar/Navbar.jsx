import React from 'react';
import { Navigate, NavLink, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { FaGithub, FaItchIo, FaLinkedin, FaStackExchange, FaTwitter, FaUnity } from 'react-icons/fa';
import About from '../Content/About';
import Projects from '../Content/Projects';
import './Navbar.scss';

export default class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand"></div>
                        <div className="navbar-item"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about">About Me</NavLink></div>
                        <div className="navbar-item"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/projects">Projects</NavLink></div>
                        <div className="navbar-end">
                            <div className="navbar-item" title="Twitter"><a href="https://twitter.com/viokyma"><FaTwitter /></a></div>
                            <div className="navbar-item" title="LinkedIn"><a href="https://www.linkedin.com/in/christopher-trott-39345119"><FaLinkedin /></a></div>
                            <div className="navbar-item" title="GitHub"><a href="https://github.com/ChrisTrott"><FaGithub /></a></div>
                            <div className="navbar-item" title="StackExchange"><a href="https://stackexchange.com/users/2116967/chris-trott?tab=accounts"><FaStackExchange /></a></div>
                            <div className="navbar-item" title="Itch.io"><a href="https://viokyma.itch.io/"><FaItchIo /></a></div>
                            <div className="navbar-item is-hidden" title="Unity Answers"><a href="https://answers.unity.com/users/152903/viokyma.html"><FaUnity /></a></div>
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
}