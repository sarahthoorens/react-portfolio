import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, mail or message
    if (inputType === 'email') {
      !validateEmail(email) ? setErrorMessage('Please enter a valid email address') : setErrorMessage('');
      setEmail(inputValue);
      return;
    } else if (inputType === 'name') {
      setName(inputValue);
      !name ? setErrorMessage('Please enter your name') : setErrorMessage('');
      return;
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // if (!validateEmail(email) || !name) {
    //   setErrorMessage('Email or name is invalid');
    //   return;
    // }
    if (!message) {
      setErrorMessage(
        `Please enter a message.`
      );
      return;
    }
    alert(`Message sent!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    window.location.reload();

  };
  return (
    <section id="contact" className="relative">
       <div className="container flex flex-row p-4 space-x-8 md:mx-auto sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 text-vanilla flex flex-col md:mr-auto w-full p-8 mt-8 md:mt-3 bg-navy shadow-md rounded">
          
          <div className="lg:w-1/2 mx-auto">
           
              <h2 className="title-font mt-5 font-semibold text-vanilla text-center tracking-widest text-xs">
                CURRENT CITY
              </h2>
              <p className="mt-1 mb-10 tracking-wider text-center text-lightBlue">
                Austin, TX
              </p>
          </div>
     
          <div className="lg:w-1/2 mx-auto">
          
              <h2 className="title-font font-semibold text-center text-vanilla tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="mt-1 mb-10 tracking-wider text-center text-lightBlue">
                s.thoorens@gmail.com
              </p>
          </div>

          <div className="lg:w-1/2 mx-auto flex flex-row items-center">
              
            <div className="flex flex-row mx-auto mt-1">

                <a href="http://linkedin.com/in/sarahthoorens" className="pr-2">
                  <img alt="linked-in" className="object-cover" src="./assets/linkedin-32.ico"></img>
                </a>
                <a href="http://github.com/sarahthoorens" className="">
                  <img alt="github" className="object-cover" src="./assets/github-32.png"></img>
                </a>

              </div>
          </div>
        </div>
 
      <form name="contact" onSubmit={handleFormSubmit}
        className="lg:w-1/2 md:w-1/2 text-vanilla flex flex-col md:ml-auto w-full p-8 mt-8 md:mt-3 bg-navy shadow-md rounded">
        <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font ">
          Work With Me
        </h2>
        <p className="leading-relaxed mb-5">
          I'm always looking for new opportunities to build and learn. If you have a project you'd like to discuss, please get in touch.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-vanilla">
            Name
          </label>
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            className="w-full bg-white rounded border border-white focus:border-white focus:ring-2 focus:ring-indigo text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleInputChange}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-white focus:border-white focus:ring-2 focus:ring-indigo text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-white focus:border-white focus:ring-2 focus:ring-indigo text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="text-vanilla bg-rose border-0 py-2 px-6 focus:outline-none hover:bg-indigo rounded text-lg">
          Submit
        </button>
        {errorMessage && (
        <div><br></br>
          <p className="error-text">{errorMessage}</p>
        </div>   
      )}
      </form>

      </div>
    </section>
  );
}