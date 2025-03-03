import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';
import ProjectTile from './shared-components/ProjectTile';

const Projects = () => {
    // DATA
    const projects = [
        {
            "projectName": "Battle Game",
            "info": "My first ever project: a text-based battle game",
            "skillsInvolved": ["Backend Development", "Python", "Programming Fundamentals"],
            "externalLinkName": "Github",
            "externalLinkAddress": "www.google.com"
        }        
    ]

    // Animation style 
    const fadeInUpStyle = useFadeInUp();
    return (
        <animated.div style={fadeInUpStyle} className="flex flex-col px-10 md:px-40 pt-40 justify-start">

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Projects</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 mt-10">
                {projects.map((project, index) => (
                    <ProjectTile 
                        key={index} 
                        projectName={project.projectName} 
                        info={project.info}
                        skillsInvolved={project.skillsInvolved}
                        externalLinkName={project.externalLinkName}
                        externalLinkAddress={project.externalLinkAddress}
                    />
                ))}
            </div>

       </animated.div>
    )
}

export default Projects;