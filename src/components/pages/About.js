import React from 'react';

export default function About() {
   return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-48 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-vanilla base:text-4xl text-4xl mb-4 font-medium">
            Hello, I'm Sarah!  
            </h1>
            
              <br className="text-xl" /><h2 className="title-font text-3xl text-vanilla">Ambitious web developer, creative tinkerer, enthusiastic problem-solver</h2> 
              <br className="text-m"/>
            <p className="mb-8 leading-relaxed text-vanilla">
            I'm a curious full-stack web developer looking for the opportunity to work on practical and innovative projects. 
            I am a forever-learner with a solid background working in fast-paced, diverse environments with every level of professional, client and vendor. 
            Creating useful and timeless physical and digital products from start to finish is what I enjoy doing most.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="inline-flex text-indigo bg-rose border-0 py-2 px-6 focus:outline-none hover:text-white shadow-lg rounded text-lg">
                Work With Me
              </a>
              <a href="#projects" className="ml-4 inline-flex text-indigo bg-lightBlue border-0 py-2 px-6 focus:outline-none hover:text-white shadow-lg rounded text-lg">
                See What I've Built
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full relative right-0  md:w-1/2 w-5/6 sm:w-1/2">
            <img alt="Sarah" className="max-w-xs rounded-full object-cover " src="../../assets/Sarah.png"/>
          </div>
        </div>
      </section>
    );
}