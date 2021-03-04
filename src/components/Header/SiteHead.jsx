import React from 'react';
import About from '../Content/About';
import Projects from '../Content/Projects';
import Navbar from '../Navbar/Navbar';

export default class SiteHead extends React.Component {
    render() {
        return (<div class="App-header ">
            <Navbar></Navbar>
            <div class="container">
                <About></About>
                <Projects></Projects>
            </div>
        </div>);
    }
}