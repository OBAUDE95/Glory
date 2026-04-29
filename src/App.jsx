import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '30px',
        color: 'var(--text-muted)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        marginTop: '60px'
      }}>
        <p>&copy; {new Date().getFullYear()} Glory Nathaniel. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
