import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/homepageani.json'; // Path to your downloaded JSON

const Home = () => {
    return (
        <div className="flex items-center justify-between p-8 h-screen bg-gray-100">
        {/* Text Section */}
        <div className="flex-1 pr-8">
            <h1 className="text-5xl font-bold mb-4 text-gray-700">Hi! I'm Charlie Kairaitis</h1>
            <p className="text-2xl leading-relaxed text-gray-600 px-12">
                A Software Engineering student with a passion for full-stack development
            </p>

            <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mt-4">B Eng (Software)</span>
            <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">B Sci (Psychology) </span>

            {/* ADD SOCIAL MEDIA TAGS */}
            <div class="w-full h-auto flex justify-between py-8 gap-2">
                <div class="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
                    <a href="https://www.linkedin.com/in/charlie-kairaitis-561a0920a/" target="_blank"
                    class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-purple-200 hover:bg-purple-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                    fill="none">
                    <path
                        d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                        fill="#111827" />
                    </svg></a>

                    <a href="https://github.com/charkai" target="_blank"
                    class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-purple-200 hover:bg-purple-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 .296C5.373.296 0 5.671 0 12.297c0 5.303 3.438 9.801 8.207 11.387.6.111.793-.26.793-.577 0-.285-.011-1.042-.017-2.045-3.338.724-4.046-1.61-4.046-1.61-.546-1.38-1.333-1.747-1.333-1.747-1.085-.741.082-.726.082-.726 1.202.085 1.833 1.235 1.833 1.235 1.068 1.826 2.8 1.297 3.48.992.108-.774.418-1.297.762-1.597-2.665-.303-5.466-1.332-5.466-5.93 0-1.313.469-2.386 1.235-3.227-.125-.303-.536-1.532.117-3.192 0 0 1.008-.323 3.303 1.231.958-.267 1.988-.4 3.006-.404 1.018.004 2.048.137 3.007.404 2.293-1.554 3.297-1.231 3.297-1.231.653 1.66.244 2.89.12 3.192.77.841 1.235 1.914 1.235 3.227 0 4.612-2.805 5.623-5.473 5.921.43.37.815 1.102.815 2.224 0 1.604-.014 2.902-.014 3.295 0 .316.193.693.8.575C20.563 22.098 24 17.598 24 12.296 24 5.671 18.627.296 12 .296z" fill="#111827" />
                    </svg>
                    </a>
                </div>

                <div class="w-full h-auto gap-2 justify-center items-center flex">
                    <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        Download CV 
                    </button>
                </div>
            </div>
        </div>
  
        {/* Animation Section */}
        <div className="flex-1 flex justify-center items-center">
          <Lottie animationData={animationData} loop={true} className="w-full" />
        </div>
      </div>
    )
}

export default Home;