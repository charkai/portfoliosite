import React from 'react';
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';
import headShot from './assets/headshot.JPG'


const Education = () => {

    // Inspo from 
    // https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/

    const fadeInUpStyle = useFadeInUp();


    return (
        <animated.div style={fadeInUpStyle} className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-40">
            
        </animated.div>
    )
}


export default Education;