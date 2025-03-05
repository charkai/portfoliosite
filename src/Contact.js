import React from 'react';
import Lottie from 'lottie-react';
import contactAnimation from './assets/mail.json'; 
import { animated } from '@react-spring/web';
import { useFadeInUp } from './shared-components/Animations';

const Contact = () => {
    const fadeInUpStyle = useFadeInUp();
    return (
        
        <animated.div style={fadeInUpStyle} className="flex flex-col md:flex-row items-center justify-between md:p-8 pt-16 mt-16">
        {/* Text Section */}
        <div className="flex-1 md:pr-8">
            <h1 className="text-5xl font-bold mb-4 text-gray-700">Hi! I'm Charlie Kairaitis</h1>
            <p className="text-2xl leading-relaxed text-gray-600 px-12">
                A Software Engineering student with a passion for full-stack development
            </p>
        </div>
  
        <div className="flex-1 flex justify-center items-center">
          <Lottie animationData={contactAnimation} loop={true} className="w-full" />
        </div>
    </animated.div>
    )
}

export default Contact;