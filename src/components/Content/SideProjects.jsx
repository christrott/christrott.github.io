import React from 'react';
import { FaItchIo } from 'react-icons/fa';
import { sideProjects } from '../../data/sideProjects.js';

const SideProjects = () => (
    <section className="section" id="side-projects">
        <h2 className="title is-3">Side Projects</h2>
        <p className="mb-5">Games I've built solo for game jams, to try out new ideas and tools under a deadline.</p>
        <div className="columns is-multiline">
            {sideProjects.map((game) => (
                <div className="column is-half-tablet is-one-third-desktop" key={game.name}>
                    <article className="card game-card">
                        {game.images && game.images.length > 0 && (
                            <div className="card-image">
                                <figure className="image is-5by4 game-shots">
                                    {game.images.map((src, i) => (
                                        <img
                                            key={src}
                                            src={src}
                                            alt={i === 0 ? `${game.name} title screen` : `${game.name} gameplay`}
                                            loading="lazy"
                                        />
                                    ))}
                                </figure>
                            </div>
                        )}
                        <div className="card-content">
                            <h3 className="title is-5 mb-1">{game.name}</h3>
                            <p className="game-meta">{game.event} · {game.timeframe}</p>
                            <p className="mt-3">{game.description}</p>
                            <p className="game-result mt-3">{game.result}</p>
                        </div>
                        <footer className="card-footer">
                            <a className="card-footer-item" href={game.link}>
                                <span className="icon"><FaItchIo /></span>
                                <span>View on itch.io</span>
                            </a>
                        </footer>
                    </article>
                </div>
            ))}
        </div>
    </section>
);

export default SideProjects;
