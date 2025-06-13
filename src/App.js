// src/App.js
import React from 'react';
import LandingPage from './components/landingpage.js';
import Project from './components/Projects.js';
import Skills from './components/Skills.js';
import Aboutme from './components/AboutMe.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <LandingPage />
      <Project/>
      <Skills />
      <Aboutme/>
      <Footer/>
    </div>
  );
}

export default App;
