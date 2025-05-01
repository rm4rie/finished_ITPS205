import React from 'react';
import cutie from '../asset/cutie.jpg';
import bgImage from '../asset/bg4.gif'; // adjust the path and name as needed


export default function Home() {
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
    textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
  };

  const imageStyle = {
    width: '300px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const textStyle = {
    fontSize: '20px',
    color: '#333',
    maxWidth: '800px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Home Page</h1>
      <img src={cutie} alt="Rods" style={imageStyle} />
      <p style={textStyle}>Hi, and Thanks for Dropping By! I am Rods.</p>
      <p style={textStyle}>I hope you enjoy browsing through my little corner of creativity!</p>
    </div>
  );
}
