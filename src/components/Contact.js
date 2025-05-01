import React from 'react';
import bgImage from '../asset/bg5.gif'; // 🔁 same background as other pages

export default function Contact() {
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
    fontSize: '50px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
  };

  const paragraphStyle = {
    fontSize: '18px',
    marginBottom: '20px',
    fontSize: 30,
    textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
  };

  const linkStyle = {
    color: '#00e6e6', 
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 30,
    textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Me</h1>
      <p style={paragraphStyle}>
        You can reach me at{" "}
        <a href="mailto:bacaresrodelyn@gmail.com" style={linkStyle}>
          bacaresrodelyn@gmail.com
        </a>
      </p>
      <h2 style={{ ...titleStyle, fontSize: '28px' }}>Social Links</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <a
            href="https://www.facebook.com/profile.php?id=100010096663167"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
}
