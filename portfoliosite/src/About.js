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

const About = () => {
    return (
        <div className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-40">
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
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={ReactSkills} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">React and Modern Frameworks</h3>
                        <p className="mb-3 font-normal text-sm text-gray-700">
                            I enjoy frontend design using modern frameworks and libraries such as Laravel and React.
                            These controllers 
                        </p>
                    </div>
                </div>


                <div className="bg-white border border-gray-200 rounded-lg shadow flex w-full mb-4">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={PresentationSkills} alt="photo"></img>
                    <div className="flex flex-col p-4 leading-normal">
                        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-800">Communication Skills</h3>
                        <p className="mb-3 font-normal text-xl text-gray-700">I love to yap</p>
                    </div>
                </div>

            </div>




            {/* SKILLS GRID */}
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pb-20 pt-10">

                {/* REACT AND OTHER MOERN FRAMEWORKS*/}
                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg" src={ReactSkills} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">React and Modern Frameworks</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>
               


                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg" src={PresentationSkills} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Communication Skills</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>

              

                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg max-h-70 w-full" src={Frontend} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Full Stack Development</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>

                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg" src={DataStructs} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Data Structures and Algorithms</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>

                   {/* TEAMWORK */}
                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg" src={Teamwork} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Teamwork</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>

                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg max-h-70 w-full" src={Database} alt="databases" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Database Management</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>
                
                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg" src={Backend} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">AWS Suite</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>
              



                {/* TIME MANAGEMENT */}
                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg" src={TimeManagement} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Time Management</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>

                <div className="block rounded-lg bg-white shadow-secondary-1">
                    <img className="rounded-t-lg min-h-70 max-h-70 w-full" src={Agile} alt="" />
                    <div class="p-6 text-surface">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">Agile Software Principles</h5>
                        <p class="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                </div>
              
            </div>





       </div>
    )
}

export default About;