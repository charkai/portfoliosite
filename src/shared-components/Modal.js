import { useEffect } from "react";

const Modal = ({ title, content, icon, isOpen, onClose }) => {
    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.classList.add("overflow-hidden");
    //     } else {
    //         document.body.classList.remove("overflow-hidden");
    //     }
    // }, [isOpen]);

    if (!isOpen) return null;

    return (
    
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 min-h-screen">

            <div className="relative mt-40 p-6 w-auto max-w-2xl bg-white rounded-lg shadow-lg dark:bg-gray-700">

                
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <div className="flex mb-10 mt-10">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={icon} alt="icon"></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className="p-4 space-y-4">
                            {content}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;