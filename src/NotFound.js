import Lottie from 'lottie-react';
import NotFoundAnimation from './assets/NotFoundAnimation.json'; 

const NotFound = () => {

    return (
        <div className="flex-1 flex justify-center items-center px-10">
            <Lottie animationData={NotFoundAnimation} loop={true} className="w-full" />
        </div>
    )
}

export default NotFound