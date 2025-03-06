import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';

import USYD from "./assets/usyd.jpg"
import Cornell from "./assets/cornell.jpg"
import MLC from "./assets/MLC.jpg"
import EducationCard from './shared-components/EducationCard';
import Award from './shared-components/Award';

const Education = () => {
    const educationExperiences = [
        {
            "image": USYD,
            "imageAlt": "Quadrangle of USYD",
            "institution": "University of Sydney",
            "degree": "Bachelor of Engineering Honours (Software) / Bachelor of Science",
            "startDate": "2021",
            "endDate": "2026",
            "info": "Majoring in Psychology program. Relevant Subjects and Grades: Object Oriented Programming (Java) - 92%, Systems Programming (C) - 98%, Data andInformation Management (SQL) - 94%, Software Development Project (Capstone project) - 94%",
            "stat": "91.28",
            "statContext": "WAM"
        },
        {
            "image": Cornell,
            "imageAlt": "Clocktower of Cornell",
            "institution": "Cornell University",
            "degree": "Exchange Semester - School of Arts and Sciences",
            "startDate": "August 2023",
            "endDate": "December 2023",
            "info": "Undertook a semester abroad at Cornell University in Ithaca, New York - majoring in History and Psychology. Grade: 4.300 (A+) GPA. Vice Chancellor's Global Mobility Merit scholarship recipient. ",
            "stat": "4.3/4.3",
            "statContext": "GPA"
        },
        {
            "image": MLC,
            "imageAlt": "MLC Quadrangle",
            "institution": "MLC School",
            "degree": "Completion of Higher School Certificate (HSC)",
            "startDate": "2015",
            "endDate": "2020",
            "info": "2020: HSC All Rounders' List - 4th in state for Ancient History, 13th in state for Modern History. Member of 10-student leadership team - Captain of SRC. Recipient of the Old Girls' Union Prize for Scholarship, Sportsmanship and Leadership.",
            "stat": "99.95",
            "statContext": "ATAR"
        }
    ]
    const awards = [
        {
            "awardName": "Chancellor's Award",
            "awardDetails": "Awarded to school-leavers with an outstanding performance in the NSW Higher School Certificate Examination (ATAR 99.90) or equivalent.",
            "awardDate": "2021-2025"
        },
        {
            "awardName": "Dean's List of Excellence in Academic Performance (Faculty of Engineering)",
            "awardDetails": "Awarded annually on recommendation by the Deans, this prize recognises high performing students in each faculty based on annual average marks and enrolment.",
            "awardDate": "2022"
        },
        {
            "awardName": "Vice Chancellor's Global Mobility Merit scholarship",
            "awardDetails": "achieved a Weighted Average Mark (WAM) of 75 or higher, participating in a semester exchange program.",
            "awardDate": "2023"
        },
        {
            "awardName": "UniSport Nationals Division 1 Gold Medalist - Ultimate",
            "awardDetails": "1st Place in Div 1 Championship in Ultimate (Frisbee) held in Perth, Western Australia.",
            "awardDate": "2022"
        },
        {
            "awardName": "MLC - Old Girls' Union Prize",
            "awardDetails": "Awarded for Scholarship, Sportsmanship and Leadership.",
            "awardDate": "2020"
        },
        {
            "awardName": "MLC - Dux of HSC Candidature",
            "awardDetails": "Awarded for achievement of highest mark in Assessment in the Year 12 program of study.",
            "awardDate": "2020"
        },
        {
            "awardName": "Prescott Medal",
            "awardDetails": "Awarded for achieving Highest Tertiary Admissions Rank (99.95).",
            "awardDate": "2020"
        },
    ]

    const fadeInUpStyle = useFadeInUp();

    return (
        <animated.div style={fadeInUpStyle} className="w-full flex flex-col items-center px-10 md:px-40 pt-40">

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">Education</h1>
            <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {educationExperiences.map((education, index) => (
                    <EducationCard
                        key={index}
                        image={education.image}
                        imageAlt={education.imageAlt}
                        institution={education.institution}
                        degree={education.degree}
                        startDate={education.startDate}
                        endDate={education.endDate}
                        info={education.info}
                        stat={education.stat}
                        statContext={education.statContext}
                    />
                ))}
            </div>
            <h1 class="mb-8 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">Awards</h1>
            <ul class="px-10 mb-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow divide-y divide-gray-200 dark:divide-gray-700 max-w-full">
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