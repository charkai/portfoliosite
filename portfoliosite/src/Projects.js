import React from 'react';

const Projects = () => {
    return (
        <div className="bg-gray-100 w-full flex flex-col items-center px-10 md:px-40 pt-10">

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-10">Projects</h1>
            
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 pb-20">


                <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow text-left">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Battle game</h5>
                    <p class="mb-3 font-normal text-xl text-gray-700">My first ever project: a text-based battle game</p>
                    <div>
                        <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Backend development</span>
                        <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Python</span>
                        <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Programming Fundamentals</span>
                    </div>                    
                    <button type="button" className="mt-5 inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Github
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>


                <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow text-left">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Pool</h5>
                    <p class="mb-3 font-normal text-xl text-gray-700">JavaFX-based game of pool</p>
                    <div>
                        <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Backend development</span>
                        <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Object-oriented programming</span>
                        <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Java</span>
                    </div>                    
                    <button type="button" className="mt-5 inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Github
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>



            </div>

       </div>
    )
}

export default Projects;