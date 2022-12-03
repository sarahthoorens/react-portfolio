import { CogIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import React, { useState } from 'react';
import { projects } from "../../data";


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
      <div className="container py-8 mx-auto flex-col justify-content-center text-center lg:px-20 ">
        <div className="flex flex-col w-full mb-10">
          <CogIcon className="mx-auto inline-block w-10 mb-4 text-vanilla" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-vanilla">
                Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-vanilla">
              These are some of the apps I've built.</p>
        </div>
        <div className="slider relative">
              <ChevronLeftIcon className="left-arrow absolute w-10 text-vanilla z-10 top-1/2 -left-2 select-none cursor-pointer" onClick={prevSlide}  />
              <ChevronRightIcon className="right-arrow absolute w-10 text-vanilla z-10 top-1/2 -right-2 select-none cursor-pointer" onClick={nextSlide}  />
          <div className="relative m-4">
          {projects.map((project, index) => {
            return (
                              
              <a href={project.link} key={project.image} className="p-2">
               <div className="relative">

                  <div className={index === current ? "ease-in-out scale-125 duration-1000 opacity-100" : "opacity-0 transition duration-1000"} key={index}>
                  {index === current && (<img alt="featured project" className="max-h-full mx-auto border-4 border-indigo rounded-xl" src={project.image}/>)}
                  {index === current && (<div className="px-5 py-5 absolute max-h-fit mx-auto p-2 z-10 border-4 top-1 bottom-1 left-1 right-1 max-w-md  border-vanilla bg-indigo opacity-0 hover:opacity-95 bg-navy">
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