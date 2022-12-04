import React from 'react';
import { DownloadIcon } from '@heroicons/react/solid';



export default function Resume() {
  return (
    <section>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <p className="title-font mx-auto text-vanilla base:text-8xl text-xl mb-4 font-medium">
            Click resume to download <DownloadIcon className="w-10 mx-auto"/>
            </p>
          </div>
             <div className="lg:max-w-lg mx-auto lg:w-full relative right-0 flex flex-wrap md:w-1/2 w-5/6 sm:w-1/2">
               <a href="../public/assets/resume.png" download="resume.png"> <img alt="" className="max-w-lg object-cover" src="./assets/resume.png" /></a>
              </div>
    </section>
  );
}
