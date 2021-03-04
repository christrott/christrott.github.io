import React from 'react';
import { FaGithub, FaItchIo, FaLinkedin, FaStackExchange, FaTwitter } from 'react-icons/fa';

export default class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar">
                <div class="container">
                    <div class="navbar-brand"><img src="" /></div>
                    <div class="navbar-item">About</div>
                    <div class="navbar-item">Projects</div>
                    <div class="navbar-end">
                        <div class="navbar-item" title="Twitter"><a href="https://twitter.com/viokyma"><FaTwitter /></a></div>
                        <div class="navbar-item" title="LinkedIn"><a href="https://www.linkedin.com/in/christopher-trott-39345119"><FaLinkedin /></a></div>
                        <div class="navbar-item" title="StackExchange"><a href="https://stackexchange.com/users/2116967/chris-trott?tab=accounts"><FaStackExchange /></a></div>
                        <div class="navbar-item" title="GitHub"><a href="https://github.com/ChrisTrott"><FaGithub /></a></div>
                        <div class="navbar-item" title="Itch.io"><a href="https://viokyma.itch.io/"><FaItchIo /></a></div>
                    </div>
                </div>
            </div>
        );
    }
}