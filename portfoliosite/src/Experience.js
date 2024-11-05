import React from 'react';

const Experience = () => {

    // https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/
    // Inspo from 

    return (
    <div className="flex flex-col px-10 md:px-40 pt-40 justify-start">


        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Professional Experience</h1>


        <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                <div class="w-full max-w-3xl mx-auto">
                    <div class="-my-6">
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-10 mb-3 sm:mb-0 text-purple-600 bg-purple-100 rounded-full">Dec 2024- Jan 2025</time>
                                <div class="text-xl font-bold text-slate-900">Mastercard <span className="italic font-normal">- Software Engineering Intern</span></div>
                            </div>
        
                            <div class="text-slate-500 -ml-4">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.

                            </div>
                        </div>  


                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-purple-100 rounded-full">May, 2021</time>

                                <div className="text-xl font-bold text-slate-900">revolutioniseSport <span className="italic font-normal">- Software Engineering Intern</span></div>
                            </div>
               
                            <div class="text-slate-500 -ml-4">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>



                        {/* SUWIE */}

                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-purple-100 rounded-full">May, 2021</time>
                                <div className="flex justify-between items-center">
                                    <div className="text-xl font-bold text-slate-900">Sydney University Women in Engineering <span className="italic font-normal">- Vice President</span></div>
                                </div>
                                
                                
                                {/* <div class="text-xl font-bold text-slate-900">Vice President - <span className="text-slate-800 font-bold">Sydney University Women in Engineering</span></div> */}
                            </div>
                            <div class="text-slate-500 -ml-4">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>


                        {/* SUWIE JVP */}
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-purple-100 rounded-full">May, 2021</time>
                                <div className="text-xl font-bold text-slate-900">Sydney University Women in Engineering <span className="italic font-normal">- Junior Vice President</span></div>
                            </div>
               
                            <div class="text-slate-500 -ml-4">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>






                    </div>


                    
                    
                </div>

            </div>
        </div>


        {/* Volunteering */}

    </div>
    );
}
export default Experience;