import React from 'react';
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
import { animated } from '@react-spring/web';
import { useFadeIn, useFadeInUp } from './shared-components/Animations';

const About = () => {

    const fadeInUpStyle = useFadeInUp();
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


            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 pb-20">

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={Database} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Database Management</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love databases
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={Backend} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">AWS Suite</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love AWS
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={TimeManagement} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Time management</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love time management
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={Agile} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Agile</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love agile
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={Teamwork} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Teamwork</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love working in a team
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={Frontend} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Full Stack Development</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love fullstack
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={DataStructs} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Data Structures and Algorithms</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love data structures
                        </p>
                    </div>
                </div>

                
                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={ReactSkills} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">React and Modern Frameworks</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I enjoy frontend design using modern frameworks and libraries such as Laravel and React.
                        </p>
                    </div>
                </div>


                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={PresentationSkills} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Communication Skills</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I love to yap
                        </p>
                    </div>
                </div>

            </div>
        </animated.div>
    )
}

export default About;