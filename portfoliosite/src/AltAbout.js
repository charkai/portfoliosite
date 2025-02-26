import React, { useState, useEffect } from 'react';
import Headshot from "./assets/headshot.JPG";
import Database from './assets/databases.svg';
import Agile from "./assets/agile.svg";
import Teamwork from "./assets/teamwork.svg";
import PresentationSkills from "./assets/presentationskills.svg";
import Frontend from "./assets/frontend.svg";
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


    const skills = [
        {
            "title": "Database Management",
            "content": "Not written yet"
        },
        {
            "title": "AWS Suite",
            "content": "Not written yet"
        },
        {
            "title": "Agile Software Development",
            "content": "Not written yet"
        },
        {
            "title": "Time Management",
            "content": "Not writte yet"
        },
        {
            "title": "Full Stack Development",
            "content": "Not written yet"
        }, 
        {
            "title": "Modern Frameworks and Libraries",
            "content": "Not written yet"
        }, 
        {
            "title": "Teamwork and Interdisciplinary Collaboration",
            "content": "Not written yet"
        },
        {
            "title": "Data Structures and Algorithms",
            "content": "Not written yet"
        }, 
        {
            "title": "Communication Skills",
            "content": "Not written yet"
        }
    ]

    const handleTileClick = (skill) => {
        setModalTitle(skill.title)
        setModalContent(skill.content);
        setIsModalOpen(true);
    };

    const fadeInUpStyle = useFadeInUp();



    // const skills = ["Database Management", "AWS Suite", "Agile Software Development", "Time Management", "Full Stack Development", "Modern Frameworks and Libraries", "Teamwork and Interdisciplinary Collaboration", "Data Structures and Algorithms", "Communication Skills"];
    return (
        <animated.div style={fadeInUpStyle} className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-40">
            {/* ABOUT ME CARD */}

            <div className="bg-white border border-gray-200 rounded-lg shadow flex mb-10">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={Headshot} alt="photo"></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    {/* <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl">About Me</h3> */}
                    <p className="mb-3 font-normal text-xl text-gray-700">Hi, I'm Charlie! I'm a full-time student with a passion for escape rooms, trivia nights, history podcasts, Ultimate Frisbee, Football and Formula 1. In my engineering degree and career thus far, I have gained a strong foundation with a range of computer science fundamentals - including object-oriented programming with Java, memory management in C, databases with SQL, and front-end development skills with JQuery, HTML and Laravel, which I was lucky enough to learn during my internship at revolutioniseSport. In the Psychology component of my degree, I have gained exposure to several disciplines. I am particularly fascinated by neuroscience and cognition, and I would love to one day work in a field that combines the best elements of both of my courses, such as AI or cybersecurity.</p>
                </div>
            </div>
            
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-10">Skills</h1>
   
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 pb-20">
                {skills.map((skill, index) => (
                    <Tile key={index} title={skill.title} onClick={() => handleTileClick(skill)} />
                ))}
            </div>
            
            <Modal
                title={modalTitle}
                content={<p className="text-base text-gray-500 leading-relaxed">{modalContent}</p>}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
      
        </animated.div>
    )
}

export default AltAbout;