import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';


const Education = () => {

    // Inspo from 
    // https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/

    const fadeInUpStyle = useFadeInUp();


    return (
        <animated.div style={fadeInUpStyle} className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-40">
            {/* ABOUT ME CARD */}

            <div className="bg-white border border-gray-200 rounded-lg shadow flex mb-10">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" alt="photo"></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    {/* <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl">About Me</h3> */}
                    <p className="mb-3 font-normal text-xl text-gray-700">Hi, I'm Charlie! I'm a full-time student with a passion for escape rooms, trivia nights, history podcasts, Ultimate Frisbee, Football and Formula 1. In my engineering degree and career thus far, I have gained a strong foundation with a range of computer science fundamentals - including object-oriented programming with Java, memory management in C, databases with SQL, and front-end development skills with JQuery, HTML and Laravel, which I was lucky enough to learn during my internship at revolutioniseSport. In the Psychology component of my degree, I have gained exposure to several disciplines. I am particularly fascinated by neuroscience and cognition, and I would love to one day work in a field that combines the best elements of both of my courses, such as AI or cybersecurity.</p>
                </div>
            </div>
            

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-10">Skills</h1>


        </animated.div>
    )
}


export default Education;