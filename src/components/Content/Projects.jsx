import React from 'react';

export default class About extends React.Component {
    render() {
        const projectData = [
            {
                name: 'E1',
                category: 'Commercial',
                description: 'With over 17 years in Australian construction, E1 is the largest and most trusted platform for connecting builders with verified subcontractors and suppliers.',
                work: ['Led the Frontend Guild for a year during an extensive modernisation effort, from initial planning to seeing the new UI rolled out to customers.',
                'Rolled out a new design component system built with AI in mind, implementing figma code connect for more accurate UI reproduction.', 'Involved in planning and Implementation of an AI chatbot for subcontractors, measuring a roughly 75% accuracy of responses, which fed into our future understanding of AI and where it’s useful.', 'Mentored newer engineers as an onboarding buddy to help them find their feet, having a real impact on the work culture at E1.', 'Developed an ability to adapt to change whilst maintaining momentum as I worked across 8 various projects and teams including Site Reliability, support, technical uplift projects, as well as new and existing product development'],
                link: 'https://estimateone.com'
            },
            {
                name: 'dbKoda',
                category: 'Commercial',
                description: 'dbKoda is a modern (JavaScript/Electron framework), open source IDE for MongoDB. It has features to support development, administration and performance tuning on MongoDB databases.',
                work: ['Owned UI efficiency problems like efficient display and parsing of large terminal output', 'Led the automated testing efforts to ensure the product had sufficient test coverage, reducing time to release', 'Primarily responsible for building and maintaining the product website and support site'],
                link: 'https://github.com/SouthbankSoftware/dbkoda',
            },
            {
                name: 'PaSME',
                category: 'Commercial',
                description: 'PaSME is a small company with 5-10 employees based in Pakenham, Victoria and provides software and services for member-based organisations of a variety of sizes and industries.',
                work: ['Led a team of 2-3 developers working on the product', 'Supported 15 clients through the life of the product, reaching a peak user base of 1200 users', 'Designed and developed a SaaS implementation of the product that reduced overall server cost and assisted in further company growth'],
                link: 'https://au.linkedin.com/company/pasme-pty-ltd',
            },
            {
                name: 'Canva',
                category: 'Commercial',
                description: 'Canva is a rapidly growing company that provide an intuitive graphic design tool to millions of people all over the world. At Canva, I was a Mid-level Frontend Engineer, working as part of the Education team to deliver a constantly improving experience as part of the roll out of the Canva for Education offering.',
                work: [],
                link: 'https://www.canva.com',
            },
            {
                name: 'Froccer',
                category: 'Personal',
                description: 'A submission to the Github GameOff 2018, Froccer is a fusion of the classic arcade game Frogger with a game of soccer (football).',
                work: ['Developed as a solo project in a month', 'Ranked #70 overall with a rank #33 for innovation', 'One of the 318 entries to the game jam'],
                link: 'https://itch.io/jam/game-off-2018/rate/335529',
            },
            {
                name: 'Extinction Event',
                category: 'Personal',
                description: 'A submission to the Github GameOff 2021, Extinction Event is a strategy game that invokes the feeling of a creature trying to survive while an apocalyptic event sweeps through your habitat.',
                work: ['Developed as a solo project in a month', 'Ranked #224 overall with a rank #63 for theme interpretation', 'One of the 502 entries to the game jam'],
                link: 'https://itch.io/jam/game-off-2021/rate/1290519',
            },
            {
                name: 'Without Darkness',
                category: 'Personal',
                description: 'A submission to the LOWREZJAM 2022, Without Darkness is a game about a modern day vampire attempting to push back the onset of daylight',
                work: ['Developed as a solo project in two weeks', 'Ranked #99 overall with a rank #73 for audio', 'One of the 413 entries to the game jam'],
                link: 'https://itch.io/jam/lowrezjam-2022/rate/1656586',
            }
        ];

        return (
            <div className="section" id="projects">
            {projectData.map((project) => {
                return <div class="card">
                    <div class="card-image"></div>
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-4">{project.name}</p>
                            <p class="subtitle is-6">{project.category}</p>
                        </div>
                        <br />
                        <div class="content">
                            <p>{project.description}</p>
                            {project.work.length > 0 ?
                                <>
                                    <p class="title is-6">My Role</p>
                                    <ul>
                                    {project.work.map((workItem) => <li>{workItem}</li>)}
                                    </ul>
                                </>
                            : ''}
                            {project.link ? <a href={project.link}>{project.name}</a> : ''}
                        </div>
                    </div>
                </div>
            })}
            </div>
        );
    }
}
