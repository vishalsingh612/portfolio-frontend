import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="introduction">
        <Introduction />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
