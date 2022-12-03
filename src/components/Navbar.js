import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Navbar = ({ currentPage, handlePageChange }) => {

  return (
    <header className="bg-navy md:sticky ">
      <div className="container mx-auto flex flex-wrap md:flex-row text-center flex-align-center p-5 lg:flex-row sm:text-left flex-col items-center">
        <section className="title-font inline-text font-large text-vanilla mb-4 md:mb-0 ">
          <a href="#home"
          onClick={() => handlePageChange('Home')}
          className={`ml-3 text-xl ${currentPage === 'Home' ? 'nav-link active' : 'nav-link'}`}>
            Sarah Thoorens
          </a>
        </section>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-vanilla flex flex-wrap items-center text-base justify-center">
          <ul className='nav nav-tabs'>
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
              <a href="https://drive.google.com/file/d/11_Gc-GYoltiWniFvawxeLaSnOtOWIBsA/view?usp=sharing" className="mr-5 text-vanilla hover:text-white">
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
