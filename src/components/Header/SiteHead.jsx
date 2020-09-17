import React from 'react';
import SocialLinks from './SocialLinks'

export default class SiteHead extends React.Component {
    render() {
        return (<div class="App-header">
            <p class="headerTitle">Chris Trott</p>
            <SocialLinks></SocialLinks>
        </div>);
    }
}