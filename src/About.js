import React, { useState } from 'react';
import Headshot from "./assets/headshot.JPG";
import Database from './assets/databases.svg';
import Agile from "./assets/agile.svg";
import Teamwork from "./assets/teamwork.svg";
import CommunicationSkills from "./assets/communicationskills.svg";
import PresentationSkills from "./assets/presentation.svg";
import Frontend from "./assets/frontend.svg";
import Cloud from "./assets/cloud.svg";
import DataStructs from "./assets/datastructsandalgos.svg";
import VersionControl from "./assets/vc.svg";
import Backend from "./assets/programming.svg";
import ReactSkills from "./assets/react.svg";
import TimeManagement from "./assets/timemanagement.svg";
import Tile from './shared-components/Tile'
import Modal from './shared-components/Modal'
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';

const AltAbout = () => {
    const skills = [
        {
            "title": "Database Management",
            "content": "I have extensive proficiency in working with data. I am confident with advanced SQL (mainly PostgreSQL and MySQL) through the entire data lifecycle including creating tables, inserting data, modifying and manipulating data as well as removal and deletion.",
            "icon": Database
        },
        {
            "title": "Agile Software Development",
            "content": "I have had the opportunity to apply agile principles in a variety of environments - from study to a practical work environment. I have experienced working with Scrum, developing in sprint iterations, and playing an active role in the end-to-end development including ideating and estimating user stories, through to development, testing and maintenance.",
            "icon": Agile
        },
        {
            "title": "Time Management",
            "content": "As someone who enjoys having a lot of exciting things on my plate, developing skills in time management has been essential for ensuring that I am able to manage my workload while still completing tasks to a high quality. Maintaining regular commitments whilst also being flexible to prioritise is something I have worked on throughout my tertiary education, and continue to refine as I enter the workforce.",
            "icon": TimeManagement
        },
        {
            "title": "Full Stack Development",
            "content": "I am passionate about both frontend and backend development, and enjoy creating end-to-end products that involve aesthetic and functional frontend as well as secure and reliable backend. While I have certainly gained more experience in the computational, sever-side backend throughout my degree, I have taken initiative to work on my frontend skills including through the design of this portfolio site.",
            "icon": Frontend
        }, 
        {
            "title": "Modern Frameworks and Libraries",
            "content": "In my studies and experience in the industry, I have had the chance to be exposed to various modern frameworks and libraries, including Vue.js, Laravel, and React.js, for dynamic and responsive web application design. I have had the opportunity to improve my skills in constructing reusable, maintainble and efficient code, that also emphasises a quality user experience.",
            "icon": ReactSkills
        }, 
        {
            "title": "Teamwork and Interdisciplinary Collaboration",
            "content": "I love to work in a team, combining the strengths of individuals from multiple backgrounds and disciplines. Through various group-based university and industry projects, I am confident using collaborative tools such as version control through Git as well as documentation and planning software such as Confluence and Jira.",
            "icon": Teamwork
        },
        {
            "title": "Data Structures and Algorithms",
            "content": "I have gained an in-depth exposure to using data structures and algorithms to optimise data structures and processes. I am skilled in designing algorithms and leveraging the benefits of several data structures for common processes such as searching, sorting, and various computational tasks. This knowledge allows me to write efficient and reusable code.",
            "icon": DataStructs
        }, 
        {
            "title": "Communication Skills",
            "content": "I have developed expertise in my written and verbal communication skills, allowing me to effectively report on, discuss and improve ideas and implementations. I consider myself adept in explaining technical concepts to non-technical parties, to facilitate better collaboration. I respond positively to constructive feedback in order to better my individual and team-based work.",
            "icon": CommunicationSkills
        },
        {
            "title": "CI/CD practices",
            "content": "I have gained substantial experience with Continuous Integration and Continuous Delivery. Working on industry-scale projects with large teams, I learned the importance of continuously checking in and out with the main branch due to constantly evolving changes. I am proficient in writing .yaml files and using automated deployment such as through Github Actions and Bitbucket Pipelines. ",
            "icon": Backend
        },
        {
            "title": "Cloud Services",
            "content": "I have proficiency with using Amazon Web Services- including EC2, S3, Cloudfront, RDS, ECS and Elastic Load Balancer - for deploying full-stack web applications. My experience with Linux has allowed me to seamlessly set up and configure cloud-based servers, such as setting up Nginx as a reverse proxy.",
            "icon": Cloud
        },
        {
            "title": "Version Control",
            "content": "My skills include managing code repositories, branching and merging, and collaborating with a team through code review and pull requests. I utilise Git in personal and grou-based projects to track changes, maintain code integrity, and ensure seamless integration of new features. These skills enable efficient and successful development projects.",
            "icon": VersionControl
        },
        {
            "title": "Presentation Skills",
            "content": "I enjoy the opportunity to present to others, as I am proud to showcase my work and enjoy the opportunity to listen and respond to feedback. I create engaging presentations that communicate project objectives, status and deliverables, with the ability to do so in a way that can be specific either to technical and non-technical parties.",
            "icon": PresentationSkills
        },
    ]
    const aboutText = "Hi, I'm Charlie! I'm a full-time student with a passion for escape rooms, trivia nights, history podcasts, Ultimate Frisbee, Football and Formula 1. In my engineering degree and career thus far, I have gained a strong foundation with a range of computer science fundamentals - including object-oriented programming with Java, memory management in C, databases with SQL, and front-end development skills with JQuery, HTML and Laravel, which I was lucky enough to learn during my internship at revolutioniseSport. In the Psychology component of my degree, I have gained exposure to several disciplines. I am particularly fascinated by neuroscience and cognition, and I would love to one day work in a field that combines the best elements of both of my courses, such as AI or cybersecurity."
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalIcon, setModalIcon] = useState(null);

    const handleTileClick = (skill) => {
        setModalTitle(skill.title)
        setModalContent(skill.content);
        setModalIcon(skill.icon)
        setIsModalOpen(true);
    };

    const fadeInUpStyle = useFadeInUp();

    return (    
        <div>
            <Modal
                title={modalTitle}
                content={<p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{modalContent}</p>}
                icon={modalIcon}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <animated.div style={fadeInUpStyle} className="w-full flex flex-col items-center px-10 md:px-40 pt-40">
                    <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-10 dark:bg-gray-800 dark:border-gray-800">
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                            src={Headshot}
                            alt="selfie"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-300">
                            {aboutText}
                            </p>
                        </div>
                    </div>
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-10 dark:text-gray-100">Skills</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-20">
                        {skills.map((skill, index) => (
                            <Tile key={index} title={skill.title} onClick={() => handleTileClick(skill)} />
                        ))}
                    </div>
                  
            </animated.div>
        </div>

    )
}

export default AltAbout;