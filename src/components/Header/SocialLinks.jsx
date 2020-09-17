import React from 'react';
import { FaGithub, FaItchIo, FaLinkedin, FaStackExchange, FaTwitter } from 'react-icons/fa';

export default class SocialLinks extends React.Component {
    render() {
        return (<div class="socialLinks">
            <div class="socialLink"><a href="https://twitter.com/viokyma"><FaTwitter /> Twitter</a></div>
            <div class="socialLink"><a href="https://www.linkedin.com/in/christopher-trott-39345119"><FaLinkedin /> LinkedIn</a></div>
            <div class="socialLink"><a href="https://stackexchange.com/users/2116967/chris-trott?tab=accounts"><FaStackExchange /> StackExchange</a></div>
            <div class="socialLink"><a href="https://github.com/ChrisTrott"><FaGithub /> GitHub</a></div>
            <div class="socialLink"><a href="https://viokyma.itch.io/"><FaItchIo /> Itch.io</a></div>
        </div>);
    }
}