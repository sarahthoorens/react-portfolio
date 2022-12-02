import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-indigo body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}