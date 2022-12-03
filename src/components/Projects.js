import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from 'react';
import { projects } from "../data";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  if(!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  return (
    <section id="projects" className="bg-indigo body-font">
      <div className="container px-5 py-8 mx-auto text-center lg:px-20 ">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-vanilla" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-vanilla">
                Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-vanilla">These are some of the apps I've built.</p>
        </div>
        <div className="slider relative h-100vh flex justify-content-center align-items-center flex-wrap m-4">
              <FaArrowAltCircleLeft className="left-arrow absolute z-10 top-1/2 left-1 select-none cursor-pointer" onClick={prevSlide}  />
              <FaArrowAltCircleRight className="right-arrow absolute z-10 top-1/2 right-1 select-none cursor-pointer" onClick={nextSlide}  />
        <div className=" m-4">
          {projects.map((project, index) => {
            return (
                              
              <a href={project.link} key={project.image} className=" p-2">
               <div className="flex relative ">

                  <div className={index === current ? 'project active' : 'project'} key={index}>
                  {index === current && (<img alt="featured project" className="inset-0 max-h-full p-2" src={project.image}/>)}
                  {index === current && (<div className="px-8 py-10 absolute z-10 border-4 top-1 h-full w-full border-vanilla bg-indigo opacity-0 hover:opacity-90 bg-navy">
                          <h2 className="tracking-widest text-sm title-font font-medium text-green mb-1">
                          {project.subtitle}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-rose mb-3">
                           {project.title}
                         </h1>
                         <p className="leading-relaxed text-vanilla">{project.description}</p>
                          </div>)}
                </div>
               
              </div> </a>
             
      )})} </div>
          </div>
      </div>
    </section>
  );
}