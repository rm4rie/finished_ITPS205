import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import "./App.css"

function App() {
  return (
    <>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        padding: '1rem 2rem',
        backgroundColor: '#222',
        alignItems: 'center',
        color: 'white',
        justifyContent: 'space-between'
      }}>
        <text style={{ fontSize: 25}}>My Portfolio</text>
        <nav style={{
          display: 'flex',
          gap: '2rem',
          padding: '1rem 2rem',
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link to="/work" style={{ color: 'white', textDecoration: 'none' }}>Work</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </div>
      

      {/* Page content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
