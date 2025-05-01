import React from 'react';
import previewImage from '../asset/image.png'; // ✅ adjust path if needed
import bgImage from '../asset/bg2.gif'; // ✅ same background as other pages

export default function Work() {
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
    width: '320px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
  };

  const linkStyle = {
    fontSize: '18px',
    color: '#ffffff',
    backgroundColor: '#1e3a8a',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: '0.3s',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>My Web Projects</h1>
      <img src={previewImage} alt="Project Preview" style={imageStyle} />
      <a href="https://itps-205-rodelyn-maries-projects.vercel.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        Visit My Project
      </a>
    </div>
  );
}
