import React from 'react';

export default function About() {
   return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sarah!
              <br className="hidden lg:inline-block text-2xl" />Ambitious web developer, creative tinkerer, enthusiastic problem-solver 
            </h1>
            <p className="mb-8 leading-relaxed">
            I'm a curious full-stack web developer looking for the opportunity to work on practical and innovative projects. 
            I am a forever-learner with a solid background working in fast-paced, diverse environments with every level of professional, client and vendor. 
            Creating useful and timeless physical and digital products from start to finish is what I enjoy doing most.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="inline-flex text-indigo bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                Work With Me
              </a>
              <a href="#projects" className="ml-4 inline-flex text-indigo bg-baby-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See What I've Built
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}