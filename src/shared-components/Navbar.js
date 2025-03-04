import React, { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" onClick={() => setIsOpen(false)}>Charlie Kairaitis</NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* MOBILE MENU - HAMBURGER */}
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
        
        {/* MOBILE MENU - DROPDOWN */}
        <div className={`w-full md:hidden ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
    
        {/* DESKTOP MENU */}
        <div className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1 ml-auto" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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