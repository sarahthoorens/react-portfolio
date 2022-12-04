import React from 'react';



export default function Home() {
  return (
    <section>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-48 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-vanilla base:text-8xl text-8xl mb-4 font-medium">
            Hello, I'm Sarah!  
            </h1>
            
              <br className='text-xl' />
              <h2 className='title-font text-3xl text-vanilla'>Ambitious web developer, creative tinkerer, enthusiastic problem-solver</h2>
              <br className='text-lg' /> 
              <h2 className='title-font text-3lg text-vanilla'> Welcome to this space.</h2>
          </div>
             <div className="lg:max-w-lg lg:w-full relative right-0 flex flex-wrap md:w-1/2 w-5/6 sm:w-1/2">
                <img alt="Sarah" className="max-w-xs rounded-full object-cover" src="../../assets/sarah.png"/>
              </div>
           
          </div>
    </section>
  );
}
