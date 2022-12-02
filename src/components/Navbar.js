import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-navy md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <section className="title-font font-medium text-white mb-4 md:mb-0 ">
          <a href="#about" className="lg:ml-3 text-xl text-vanilla hover:text-white">
            Sarah Thoorens
          </a>
        </section>
        <nav className="md:mx-auto sm:mx-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-vanilla	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-vanilla hover:text-white">
            Past Work
          </a>
          <a href="https://drive.google.com/file/d/11_Gc-GYoltiWniFvawxeLaSnOtOWIBsA/view?usp=sharing" className="mr-5 text-vanilla hover:text-white">
            Resume
          </a>
      </nav>
      <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 text-lightBlue focus:outline-none hover:bg-gray rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}