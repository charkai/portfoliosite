import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';
import TimelineElement from './shared-components/TimelineElement';
import VolunteeringTile from './shared-components/VolunteeringTile';

const Experience = () => {
    // DATA 
    const workExperience = [
        {
            "company":"Mastercard",
            "role":"Software Engineering Intern",
            "startDate":"Dec 2024",
            "endDate":"Jan 2025",
            "info":"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
        },
        {
            "company":"Sportsgrid",
            "role":"Software Engineering Intern",
            "startDate":"Dec 2022",
            "endDate":"Feb 2023",
            "info":"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
        },
        {
            "company":"Sydney University Women in Engineering",
            "role":"Vice President",
            "startDate":"Sep 2022",
            "endDate":"Aug 2023",
            "info":"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
        },
        {
            "company":"Sydney University Women in Engineering",
            "role":"Junior Vice President",
            "startDate":"Sep 2021",
            "endDate":"Sep 2022",
            "info":"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
        }
    ]

    const volunteeringExperience = [
        {
            "name": "Regional Education Support Network (RESN)",
            "startDate": "2021",
            "endDate": "2023",
            "info": "As a volunteer at RESN, I assisted in providing online education support to high school students from regional and rural Australia. I would spend around 1-2 hours per week answering forum questions from students studying Modern History, Ancient History, Mathematics Advanced, Maths Extension 1 and Chemistry. As a Content Creator for HSC Chemistry, I wrote wikis and created sample exam-style questions and answer rubrics for students. I additionally assisted the organisation with designing a tutor onboarding program for Ancient History, which involved scaffolding a sample question and several approaches to an answer.",
            "link": "https://www.resn.org.au/"
        },
        {
            "name": "The Greyhound Rescue",
            "startDate": "2024",
            "endDate": "current",
            "info": "HELLo",
            "link": "https://greyhoundrescue.com.au/?gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goCTWzUnHTQ4y74jf7yUrxjSYEBuoGncX5_UZMsxUuIYsVV6mHmrJ0RoCUwIQAvD_BwE"
        }

    ]

    // Animation style
    const fadeInUpStyle = useFadeInUp();

    // Inspo of timeline from 
    // https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/
    return (
    <animated.div style={fadeInUpStyle} className="flex flex-col px-10 md:px-40 pt-40 justify-start">
        


        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Professional Experience</h1>

        {/* WORK EXPERIENCE TIMELINE */}
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                <div class="w-full max-w-3xl mx-auto">
                    <div class="-my-6">
                        {workExperience.map((job, index) => (
                            <TimelineElement 
                                key={index} 
                                company={job.company}
                                role={job.role}
                                startDate={job.startDate}
                                endDate={job.endDate}
                                info={job.info}
                            />
                        ))}
                    </div> 
                </div>
            </div>
        </div>

        {/* Volunteering */}
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Volunteering</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 pt-10 md:pt-20">
            {volunteeringExperience.map((volunteerRole, index) => (
                <VolunteeringTile 
                    key={index} 
                    name={volunteerRole.name}
                    startDate={volunteerRole.startDate}
                    endDate={volunteerRole.endDate}
                    info={volunteerRole.info}
                    link={volunteerRole.link}
                />
            ))}
        </div>
    </animated.div>
    );
}
export default Experience;