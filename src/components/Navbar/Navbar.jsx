import React, { useState } from 'react';
import { FaGithub, FaItchIo, FaLinkedin, FaStackExchange, FaTwitter, FaUnity } from 'react-icons/fa';
import './Navbar.scss';

const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'side-projects', label: 'Side Projects' },
];

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christopher-trott-39345119', icon: <FaLinkedin /> },
    { label: 'GitHub', href: 'https://github.com/ChrisTrott', icon: <FaGithub /> },
    { label: 'Itch.io', href: 'https://viokyma.itch.io/', icon: <FaItchIo /> },
    { label: 'StackExchange', href: 'https://stackexchange.com/users/2116967/chris-trott?tab=accounts', icon: <FaStackExchange /> },
    { label: 'Twitter', href: 'https://twitter.com/viokyma', icon: <FaTwitter /> },
    { label: 'Unity Answers', href: 'https://answers.unity.com/users/152903/viokyma.html', icon: <FaUnity />, hidden: true },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item brand-name" href="#top" onClick={closeMenu}>Chris Trott</a>
                    <a role="button" className={isMenuOpen ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={isMenuOpen ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-start">
                        {sections.map(({ id, label }) => (
                            <a key={id} className="navbar-item" href={`#${id}`} onClick={closeMenu}>{label}</a>
                        ))}
                    </div>
                    <div className="navbar-end">
                        {socialLinks.map(({ label, href, icon, hidden }) => (
                            <a key={label} className={hidden ? "navbar-item is-hidden" : "navbar-item"} href={href} title={label} aria-label={label}>{icon}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
