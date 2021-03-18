import React from 'react';

export default class About extends React.Component {
    render() {
        return (<div className="section" id="about">
                <article className="media">
                    <figure className="media-left is-128x128">
                        <p className="image">
                            <img src="https://res.cloudinary.com/lmdp3yf15/image/upload/c_scale,w_250/v1614855834/ChrisGrey_2_v07p6c.png" alt="Chris Trott Profile" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <h3 className="title is-3">About Me</h3>
                            <p>
                                Hi, I'm  Chris Trott. I'm a web developer with experience as a Front End and Full Stack Developer, specifically working with Web Apps.
                                I mostly work with JavaScript and C#, and my most recent experience has been a mix of React and Node.js.
                                I have targetted experience with Product-based companies that solve problems within a specific domain.
                                I build software with precision and integrity, and pride myself on my attention to detail.
                                In my spare time, I try out new technology and build small games in Unity, Unreal Engine, or HTML Canvas.
                                I live with my wife and 4 kids in Melbourne, Victoria.
                                When I'm not experimenting and creating with tech, I'm out enjoying time with the family and soaking up the awesome Melbourne culture.
                            </p>
                        </div>
                    </div>
                </article>
            </div>);
    }
}