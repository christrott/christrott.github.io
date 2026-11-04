import React from 'react';
import { FaLinkedin, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';

// Edit these to change the header content
const name = 'Chris Trott';
const title = 'Software Engineer · Frontend & Full Stack';
const location = 'Remote, Australia';
const summary = 'I build product-focused web apps with React, Node.js and PHP, from design systems and frontend architecture to leading teams through modernisation.';
const linkedinUrl = 'https://www.linkedin.com/in/christopher-trott-39345119';
const cvUrl = null; // e.g. '/Chris-Trott-CV.pdf' (put the file in /public). The CV button only shows when this is set.
const photoUrl = 'https://res.cloudinary.com/lmdp3yf15/image/upload/w_200,c_fill,ar_1:1,g_auto,r_max,bo_3px_solid_grey,b_rgb:14161a/v1785371994/PXL_20241112_110440793_exported_780_1731409521293_yiz7tf.jpg';

const Hero = () => (
    <section className="hero is-medium" id="top">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-narrow hero-photo">
                        <img src={photoUrl} alt="Chris Trott" width="180" height="180" />
                    </div>
                    <div className="column">
                        <h1 className="title is-1 hero-name">{name}<span className="caret" aria-hidden="true"></span></h1>
                        <p className="subtitle is-4 hero-role mb-2">{title}</p>
                        <p className="hero-location mb-4">
                            <span className="icon"><FaMapMarkerAlt /></span>
                            <span>{location}</span>
                        </p>
                        <p className="hero-summary">{summary}</p>
                        <div className="buttons mt-5">
                            <a className="button is-accent" href={linkedinUrl}>
                                <span className="icon"><FaLinkedin /></span>
                                <span>Connect on LinkedIn</span>
                            </a>
                            {cvUrl && (
                                <a className="button is-accent-outlined" href={cvUrl}>
                                    <span className="icon"><FaFileAlt /></span>
                                    <span>Download CV</span>
                                </a>
                            )}
                            <a className="button is-text" href="#experience">See my work ↓</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
