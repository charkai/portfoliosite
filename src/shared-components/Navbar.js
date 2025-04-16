import React, { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="w-full top-0 start-0">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<NavLink to="/" onClick={() => setIsOpen(false)}>Charlie Kairaitis</NavLink>
			<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<button 
				onClick={() => setIsOpen(!isOpen)}
				data-collapse-toggle="navbar-sticky" 
				type="button" 
				className="mt-1 inline-flex items-center w-10 h-11 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky" 
				aria-expanded={isOpen}
			>
				<span className="sr-only">Open main menu</span>
				<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
				</svg>
            </button>
          </div>
		  {/* ON MOBILE */}
          <div className={`w-full md:hidden ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
				<li>
					<NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
				</li>
				<li>
					<NavLink to="/education" onClick={() => setIsOpen(false)}>Education</NavLink>
				</li>
				<li>
					<NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
				</li>
				<li>
					<NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
				</li>
            </ul>
          </div>
          <div className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1 ml-auto" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/education">Education</NavLink>
				</li>
				<li>
					<NavLink to="/experience">Experience</NavLink>
				</li> 
				<li>
					<NavLink to="/projects">Projects</NavLink>
				</li>
            </ul>       
          </div>
        </div>
    </nav>
    )
}

export default Navbar;