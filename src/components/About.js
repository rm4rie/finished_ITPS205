import React from 'react';
import bgImage from '../asset/bg3.gif'; // match your Home.js background path

export default function About() {
  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#222',
    textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
  };

  const textStyle = {
    fontSize: '20px',
    color: '#333',
    maxWidth: '800px',
    lineHeight: '1.6',
    marginBottom: '12px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Me</h1>
      <p style={textStyle}>
        I’m an IT student who loves exploring technology and learning new skills.
        I believe in growing step by step and finding creative ways to solve problems.
      </p>
      <p style={textStyle}><strong>Name:</strong> Rodelyn Marie P. Bacares</p>
      <p style={textStyle}><strong>Age:</strong> 22</p>
      <p style={textStyle}><strong>Birthdate:</strong> September 8, 2002</p>
      <p style={textStyle}>- A Virgo</p>
      <p style={textStyle}>- Loves cats & dogs</p>
    </div>
  );
}
