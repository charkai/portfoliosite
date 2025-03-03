import React, { useState } from 'react';
import Headshot from "./assets/headshot.JPG";
import Database from './assets/databases.svg';
import Agile from "./assets/agile.svg";
import Teamwork from "./assets/teamwork.svg";
import PresentationSkills from "./assets/presentationskills.svg";
import Frontend from "./assets/frontend.svg";
import Cloud from "./assets/cloud.svg";
import DataStructs from "./assets/datastructsandalgos.svg";
import Backend from "./assets/programming.svg";
import ReactSkills from "./assets/react.svg";
import TimeManagement from "./assets/timemanagement.svg";
import Tile from './shared-components/Tile'
import Modal from './shared-components/Modal'
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';

const AltAbout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("")
    const [modalIcon, setModalIcon] = useState(null)

    const skills = [
        {
            "title": "Database Management",
            "content": "I have extensive proficiency in working with data. I am confident with advanced SQL (mainly PostgreSQL and MySQL) through the entire data lifecycle including creating tables, inserting data, modifying and manipulating data as well as removal and deletion.",
            "icon": Database
        },
        {
            "title": "Agile Software Development",
            "content": "I have had the opportunity to apply my learnings about Agile principles from study to a practical work environment throughout both my internships. I have experienced working with Scrum, developing in sprint iterations, and playing an active role in the end-to-end development including ideating and estimating user stories, through to development, testing and maintenance.",
            "icon": Agile
        },
        {
            "title": "Time Management",
            "content": "Not writte yet",
            "icon": TimeManagement
        },
        {
            "title": "Full Stack Development",
            "content": "Not written yet",
            "icon": Frontend
        }, 
        {
            "title": "Modern Frameworks and Libraries",
            "content": "Not written yet",
            "icon": ReactSkills
        }, 
        {
            "title": "Teamwork and Interdisciplinary Collaboration",
            "content": "Not written yet",
            "icon": Teamwork
        },
        {
            "title": "Data Structures and Algorithms",
            "content": "Not written yet",
            "icon": DataStructs
        }, 
        {
            "title": "Communication Skills",
            "content": "Not written yet",
            "icon": PresentationSkills
        },
        {
            "title": "CI/CD practices",
            "content": "I have gained substantial experience with Continuous Integration and Continuous Delivery. I am proficient in writing .yaml files and using automated deployment such as through Github Actions and Bitbucket Pipelines. ",
            "icon": Backend
        },
        {
            "title": "Cloud Services",
            "content": "I have gained substantial experience with Continuous Integration and Continuous Delivery. I am proficient in writing .yaml files and using automated deployment such as through Github Actions and Bitbucket Pipelines. ",
            "icon": Cloud
        },
    ]

    const handleTileClick = (skill) => {
        setModalTitle(skill.title)
        setModalContent(skill.content);
        setModalIcon(skill.icon)
        setIsModalOpen(true);
    };

    const fadeInUpStyle = useFadeInUp();

    // const skills = ["Database Management", "AWS Suite", "Agile Software Development", "Time Management", "Full Stack Development", "Modern Frameworks and Libraries", "Teamwork and Interdisciplinary Collaboration", "Data Structures and Algorithms", "Communication Skills"];
    return (    
        <div>
            <Modal
                title={modalTitle}
                content={<p className="text-base text-gray-500 leading-relaxed">{modalContent}</p>}
                icon={modalIcon}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <animated.div style={fadeInUpStyle} className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-40">
                {/* ABOUT ME CARD */}

                    <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-10">
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                            src={Headshot}
                            alt="selfie"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="mb-3 font-normal text-xl text-gray-700">
                            Hi, I'm Charlie! I'm a full-time student with a passion for escape rooms, trivia nights, history podcasts, Ultimate Frisbee, Football and Formula 1. In my engineering degree and career thus far, I have gained a strong foundation with a range of computer science fundamentals - including object-oriented programming with Java, memory management in C, databases with SQL, and front-end development skills with JQuery, HTML and Laravel, which I was lucky enough to learn during my internship at revolutioniseSport. In the Psychology component of my degree, I have gained exposure to several disciplines. I am particularly fascinated by neuroscience and cognition, and I would love to one day work in a field that combines the best elements of both of my courses, such as AI or cybersecurity.
                            </p>
                        </div>
                    </div>

                    
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-10">Skills</h1>
        
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