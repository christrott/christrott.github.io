import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaItchIo, FaLinkedin, FaStackExchange, FaTwitter, FaUnity } from 'react-icons/fa';
import './Navbar.scss';

const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'side-projects', label: 'Side Projects' },
];

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christopher-trott-39345119', icon: <FaLinkedin aria-hidden="true" /> },
    { label: 'GitHub', href: 'https://github.com/ChrisTrott', icon: <FaGithub aria-hidden="true" /> },
    { label: 'Itch.io', href: 'https://viokyma.itch.io/', icon: <FaItchIo aria-hidden="true" /> },
    { label: 'StackExchange', href: 'https://stackexchange.com/users/2116967/chris-trott?tab=accounts', icon: <FaStackExchange aria-hidden="true" /> },
    { label: 'Twitter', href: 'https://twitter.com/viokyma', icon: <FaTwitter aria-hidden="true" /> },
    { label: 'Unity Answers', href: 'https://answers.unity.com/users/152903/viokyma.html', icon: <FaUnity aria-hidden="true" />, hidden: true },
];

// Highlights the nav link for whichever section is in the middle of the screen
const useActiveSection = (ids) => {
    const [active, setActive] = useState(null);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return undefined;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            }),
            { rootMargin: '-45% 0px -50% 0px' },
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        const hero = document.getElementById('top');
        if (hero) observer.observe(hero);
        return () => observer.disconnect();
    }, [ids]);
    return active;
};

// True once the page has scrolled away from the top (adds a shadow under the nav)
const useScrolled = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return scrolled;
};

const sectionIds = sections.map((s) => s.id);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useActiveSection(sectionIds);
    const scrolled = useScrolled();
    const burgerRef = useRef(null);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Escape closes the mobile menu and puts focus back on the menu button
    useEffect(() => {
        if (!isMenuOpen) return undefined;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                if (burgerRef.current) burgerRef.current.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isMenuOpen]);

    return (
        <nav className={`navbar site-nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Main">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item brand" href="#top" onClick={closeMenu}>
                        <span className="brand-mark" aria-hidden="true">CT</span>
                        <span className="brand-name">Chris Trott</span>
                    </a>
                    <button
                        type="button"
                        ref={burgerRef}
                        className={isMenuOpen ? 'navbar-burger is-active' : 'navbar-burger'}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="site-menu"
                        onClick={toggleMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="site-menu" className={isMenuOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                className={`navbar-item section-link${activeSection === id ? ' is-current' : ''}`}
                                href={`#${id}`}
                                aria-current={activeSection === id ? 'location' : undefined}
                                onClick={closeMenu}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="navbar-end social-links">
                        {socialLinks.map(({ label, href, icon, hidden }) => (
                            <a key={label} className={hidden ? 'navbar-item social-link is-hidden' : 'navbar-item social-link'} href={href} title={label} aria-label={label}>{icon}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
