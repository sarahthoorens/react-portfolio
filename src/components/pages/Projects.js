import { CogIcon } from "@heroicons/react/solid";
import React, { useState } from 'react';
import { projects } from "../../data";
// import GridLayout from "react-grid-layout";
// import styled from "styled-components";


export default function Projects() {
  // const [current, setCurrent] = useState(0);
  // const length = projects.length;
  return (
    <section id="projects" className="bg-indigo body-font">
      <div className="container py-8 mx-auto flex-col justify-content-center text-center lg:px-20 ">
        <div className="flex flex-col w-full mb-10">
          <CogIcon className="mx-auto inline-block w-10 mb-4 text-vanilla" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-vanilla">
                Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-vanilla">
              Some of the apps I've built.</p>
        </div>
        <div className="relative m-4">
        {projects.map((project, index) =>
            <a href={project.link} key={project.image[index]} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img alt="featured-project-preview" className="max-h-full mx-auto border-4 border-indigo rounded-xl"
                  src={project.image}/>
                  <div className="px-5 py-5 absolute max-h-fit mx-auto p-2 z-10 border-4 top-1 bottom-1 left-1 right-1 max-w-full  border-vanilla bg-indigo opacity-0 hover:opacity-95 bg-navy">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green mb-1">
                          {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-rose mb-3">
                        {project.title}
                    </h1>
                    <p className="leading-relaxed text-vanilla">
                      {project.description}
                      </p>
                  </div>
              </div>
            </a>  
                  )}
          </div>
      </div>
    </section>
   )}
 
   