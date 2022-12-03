import React from "react";

export default function Footer(){
  return (
  
  <footer className="container py-10 mx-auto">
    <p className="text-center text-navy">© 2022 Sarah Thoorens | Built Using React and Tailwind 
    </p>
    <div className="flex justify-center">
    <a href="http://linkedin.com/in/sarahthoorens" className=""> 
       <img alt="linked-in" className="mx-auto py-4 px-2" src="./assets/linkedin-32.ico"/>
      </a>
      <a href="http://github.com/sarahthoorens" className=""> 
       <img alt="github" className="mx-auto py-4 px-2" src="./assets/github-32.png"/>
      </a>
      </div>
  </footer>
    );
}