import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';

import USYD from "./assets/usyd.jpg"
import Cornell from "./assets/cornell.jpg"
import MLC from "./assets/MLC.jpg"
import EducationCard from './shared-components/EducationCard';
import Award from './shared-components/Award';


const Education = () => {

    // DATA
    const educationExperiences = [
        {
            "image": USYD,
            "imageAlt": "Quadrangle of USYD",
            "institution": "University of Sydney",
            "degree": "Bachelor of Engineering Honours (Software) / Bachelor of Science",
            "startDate": "2021",
            "endDate": "2026",
            "info": "Degree",
            "stat": "91",
            "statContext": "WAM"
        },
        {
            "image": Cornell,
            "imageAlt": "Clocktower of Cornell",
            "institution": "Cornell University",
            "degree": "Exchange Semester",
            "startDate": "2021",
            "endDate": "2026",
            "info": "Degree",
            "stat": "4.3/4.3",
            "statContext": "GPA"
        },
        {
            "image": MLC,
            "imageAlt": "MLC Quadrangle",
            "institution": "MLC School",
            "degree": "Exchange Semester",
            "startDate": "2021",
            "endDate": "2026",
            "info": "Degree",
            "stat": "99.95",
            "statContext": "ATAR"
        }
    ]

    const awards = [
        {
            "awardName": "Chancellor's Award",
            "awardDetails": "",
            "awardDate": "2021-2025"
        },
        {
            "awardName": "Dean's List of Excellence in Academic Performance (Faculty of Engineering)",
            "awardDetails": "",
            "awardDate": "2022"
        },
        {
            "awardName": "Vice Chancellor's Global Mobility Merit scholarship",
            "awardDetails": "",
            "awardDate": "2023"
        },
        {
            "awardName": "UniSport Nationals Division 1 Gold Medalist",
            "awardDetails": "",
            "awardDate": "2022"
        },
        {
            "awardName": "Old Girls' Union Prize for Scholarship, Sportsmanship and Leadership",
            "awardDetails": "",
            "awardDate": "2020"
        },
        {
            "awardName": "Dux of HSC Candidature",
            "awardDetails": "",
            "awardDate": "2020"
        },
        {
            "awardName": "Prescott Medal for Highest Tertiary Admissions Rank (99.95)",
            "awardDetails": "",
            "awardDate": "2020"
        },
        
    ]

    // Inspo from 
    // https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/

    const fadeInUpStyle = useFadeInUp();


    return (
        <animated.div style={fadeInUpStyle} className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-40">
    
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Education</h1>
            
            {/*  EDUCATION */}
            <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">                
                {educationExperiences.map((education, index) => (
                    <EducationCard 
                        key={index} 
                        image={education.image}
                        imageAlt={education.imageAlt}
                        institution={education.institution}
                        info={education.info}

                        stat={education.stat}
                        statContext={education.statContext}
                    />
                ))}
            </div>


            {/* AWARDS */}
            <h1 class="mb-8 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Awards</h1>

                <ul class="px-10 mb-10 bg-white border border-gray-200 rounded-lg shadow divide-y divide-gray-200 dark:divide-gray-700 max-w-full">
                    {awards.map((award, index) => (
                        <Award 
                        awardName={award.awardName}
                        awardDetails={award.awardDetails}
                        awardDate={award.awardDate}
                        />
                    ))}
                </ul>
        </animated.div>
    )
}
export default Education;