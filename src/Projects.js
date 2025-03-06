import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';
import ProjectTile from './shared-components/ProjectTile';

const Projects = () => {
    const projects = [
        {
            "projectName": "This Portfolio Site",
            "info": "A portfolio I created in order to showcase my development skills and work.",
            "skillsInvolved": ["React.js", "HTML", "Tailwind CSS"],
            "externalLinkName": "Github",
            "externalLinkAddress": "https://github.com/charkai/portfoliosite"
        },   
        {
            "projectName": "Battle Game",
            "info": "My first ever project: a battle game run through the command line.",
            "skillsInvolved": ["Backend Development", "Python", "Programming Fundamentals"],
            "externalLinkName": "Github",
            "externalLinkAddress": "https://github.com/charkai/Python_BattleGame"
        },
        {
            "projectName": "Pool Game",
            "info": "An early Java project - designing a pop-up game of pool, utilising Gradle and JavaFX.",
            "skillsInvolved": ["Object-Oriented Programming", "Java", "JavaFX and GUI Design"],
            "externalLinkName": "Github",
            "externalLinkAddress": "https://github.com/charkai/Java_poolgame"
        },
        {
            "projectName": "Bomb Game",
            "info": "Another early Java project designing a game with Java, Gradle and Processing.",
            "skillsInvolved": ["Object-Oriented Programming", "Java", "Processing", "Gradle"],
            "externalLinkName": "Github",
            "externalLinkAddress": "https://github.com/charkai/java_bombgame"
        },

        {
            "projectName": "C - In the Mist",
            "info": "A 2 player game built in C - a game of Gomuku but with the added element of a 'mist'.",
            "skillsInvolved": ["C Programming", "Systems Programming", "Dynamic Memory"],
            "externalLinkName": "Github",
            "externalLinkAddress": "https://github.com/charkai/C_mistgame"
        }

    ]
    const fadeInUpStyle = useFadeInUp();
    return (
        <animated.div style={fadeInUpStyle} className="flex flex-col px-10 md:px-40 pt-40 justify-start">

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">Projects</h1>
            
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