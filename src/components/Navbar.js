import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Navbar = ({ currentPage, handlePageChange }) => {

  return (
    <header className="bg-navy md:sticky z-10">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row lg:flex-row flex-col text-center sm:text-left  items-center">
        <section className="title-font inline-text font-large text-vanilla mb-4 md:mb-0 ">
          <a href="#home"
          onClick={() => handlePageChange('Home')}
          className={`ml-3 text-xl ${currentPage === 'Home' ? 'nav-link active' : 'nav-link'}`}>
            Sarah Thoorens
          </a>
        </section>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-vanilla flex flex-wrap inline-flex text-base">
          <ul className='nav flex flex-row md:flex-row lg:flex-row flex-col'>
            <li className='nav-item'>
              <a href="#about"
                onClick={() => handlePageChange('About')}
                className={`mr-5 text-vanilla hover:text-white ${currentPage === 'About' ? 'nav-link active' : 'nav-link'}`} >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={`mr-5 text-vanilla hover:text-white ${currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}`}>
                Past Work
              </a>
            </li>
            <li className='nav-item'>
              <a href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={`mr-5 text-vanilla hover:text-white ${currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}`} >
                Resume
                </a>
            </li>
          </ul>
        </nav>
        <ul className='nav nav-tabs '>
          <li className='nav-item'>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={`inline-flex items-center bg-gray-800 border-0 
                  py-1 px-3 text-lightBlue focus:outline-none hover:bg-gray rounded text-base mt-4 md:mt-0 
                    ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`}
            >
              Get In Touch
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </li>
        </ul>

      </div>

    </header>

  );
};
export default Navbar;
