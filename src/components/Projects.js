import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-indigo body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-vanilla" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-vanilla">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-vanilla">These are some of the apps I've built.</p>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/ w-100 p-2">
              <div className="flex relative">
                <img
                  alt="project feature"
                  className="absolute inset-0 w-full h-full object-scale-down object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-vanilla bg-indigo opacity-0 hover:opacity-90 bg-navy">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-rose mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-vanilla">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}