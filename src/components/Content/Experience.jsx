import React from 'react';
import { experience, earlierExperience } from '../../data/experience.js';

const TechTags = ({ tech }) => (
    <ul className="tags mt-4" aria-label="Technologies used">
        {tech.map((t) => <li key={t} className="tag">{t}</li>)}
    </ul>
);

const Company = ({ company, link }) => (
    link ? <a href={link}>{company}</a> : company
);

const Experience = () => (
    <section className="section" id="experience">
        <h2 className="title is-3 section-heading">Experience</h2>

        {experience.map((job) => (
            <article className="card experience-card mb-5" key={job.company}>
                <div className="card-content">
                    <header className="experience-header">
                        <div>
                            <h3 className="title is-4 mb-1">{job.role}</h3>
                            <p className="subtitle is-5 mb-0"><Company {...job} /></p>
                        </div>
                        <p className="experience-dates">{job.dates}</p>
                    </header>
                    {job.earlierRoles && job.earlierRoles.map((r) => (
                        <p key={r} className="experience-earlier">Previously: {r}</p>
                    ))}
                    <div className="content mt-4">
                        <p className="experience-summary">{job.summary}</p>
                        <ul>
                            {job.highlights.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                    </div>
                    <TechTags tech={job.tech} />
                </div>
            </article>
        ))}

        <h3 className="title is-5 mt-6">Earlier experience</h3>
        {earlierExperience.map((job) => (
            <div className="earlier-item mb-4" key={job.company}>
                <p>
                    <strong>{job.role}</strong>, <Company {...job} />{' '}
                    <span className="experience-dates">· {job.dates}</span>
                </p>
                <p className="experience-summary">{job.summary}</p>
            </div>
        ))}
    </section>
);

export default Experience;
